import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from 'chart.js'; // 이걸 적용 안하면 오류 
import axios from 'axios'; 

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function DonutChart() {
  // const [percent, setPercent] = useState(0);
  const percent = 20;  // 임의 데이터였던 것

  // useEffect(() => {
  //   const MedicinePercent = async () => {
  //     try {
  //       const response = await axios.get('url'); // 백엔드 엔드포인트로 변경
  //       setPercent(response.data.percent); // 백엔드에서 받은 percent 데이터로 설정  
  //     } catch (error) {
  //       console.error('Error MedicenePercent: ', error);
  //     }
  //   };
  //   MedicinePercent();
  // }, []);

  const data = {
    labels: ['약 복용'], // 커서 올렸을 때 뜨는값
    datasets : [ // 데이터 관련 정보(값, 컬러, 라벨 등)를 담은 dataset 객체들을 가지고 있는 배열
      {
        data: [percent, 100-percent], // 약 섭취량, 총섭취량-실섭취량
        backgroundColor : [ '#9DCEFF', '#F2F3F6'],
        borderWidth: [0,0], // border적용 
        scaleBeginAtZero: true,
        borderRadius: [20,0] // 그래프 끝 radius 설정
         // 도넛 안쪽 원의 크기 설정
      },
    ],
  };

  const options = {
    // 옵션 찾아보기
    cutout: "70%",
    responsive: true, // 알아서 동적으로 
    maintainAspectRatio: false,
    animaition: {
      animateScale: true,
      animateRotate: true
    },
    rotation: 0, // 회전해서 위치 조정가능
    circumference:360, // 크기? 같은거 
    plugins: {
      legend: {
        display: true, // 상단에 뜨는거
        labels: {
          filter: function (legendItem, data) {
            //100-percent 부분 범례 표시x 필터링
            return legendItem.index === 0;
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // 100-percent부분에 값이 표시되지 않도록 설정
            if (tooltipItem.dataIndex === 1) {
              return '';
            }
            return `${tooltipItem.label} : ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        display: function (context) {
          return context.dataIndex === 0; // 첫번째 데이터만 라벨 표시
        },
        color: 'white',
        font: {
          weight: 'bold',
        },
        formatter: (value) => `${value}%`,
      },
      // formatter: (value, context) => {
      //   if (context.dataIndex === 0) {
      //     return `${value}%`;
      //   } else {
      //     return '';
      //   }
      // }
    },
  };

  // 백한테 데이터 받아옴 
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get('url');
  //       setPercentage(response.data.percentage); 
  //     } catch (error) {
  //       console.error('Error fetching percentage data: ', error);
  //     }
  //   };
  //   getData();
  // }, []); 
  
  // 차트에 넣을 데이터(객체를 넣기) (백이 percentage 를 넘겨줌)

  // 렌더링값 
  return (
    <div className="chartContainer w-[320px] h-[400px]"> {/* 여기서 차트 크기 조정  */}
      <Doughnut data={data} options={options}/>
      {/* <Chart type ='doughnut' data={data}/> */}


    </div>
    // <div style ={{positon: 'center', width: '200px', height:'200px'}}>
  
  );
};

