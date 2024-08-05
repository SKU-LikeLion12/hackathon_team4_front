import React from "react";
import {Bar} from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import "chartjs-plugin-annotation";

import {ResponsiveBullet} from "@nivo/bullet";

// Chart.js의 구성 요소를 등록합니다.
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BMIChart = ({bmi}) => {
	const data2 = [
		{
			id: "temp.",
			ranges: [63, 34, 60, 0, 100],
			measures: [37],
			markers: [78],
		},
		{
			id: "power",
			ranges: [
				0.4069953687553469, 0.24284271291979226,
				1.3439694721281006, 0, 2,
			],
			measures: [0.35443851382721187, 0.5194681062899398],
			markers: [1.3888146224399633],
		},
		{
			id: "volume",
			ranges: [20, 18, 10, 24, 15, 2, 0, 60],
			measures: [21],
			markers: [54],
		},
		{
			id: "cost",
			ranges: [168464, 12504, 485273, 0, 500000],
			measures: [28155, 35267],
			markers: [300852],
		},
		{
			id: "revenue",
			ranges: [11, 0, 8, 0, 11],
			measures: [7],
			markers: [9.46300741183061, 7.975001789277439],
		},
	];
	const labels = ["저체중", "정상", "과체중", "비만"];
	const bmiRanges = [18.5, 24.9, 29.9, 40];
	const colors = [
		"rgba(75, 192, 192, 0.6)",
		"rgba(75, 192, 75, 0.6)",
		"rgba(192, 192, 75, 0.6)",
		"rgba(192, 75, 75, 0.6)",
	];

	const data = {
		labels: ["BMI"],
		datasets: [
			{
				label: "BMI 범위",
				data: [bmi], // 최대 범위 값을 설정합니다.
				backgroundColor: [
					"rgba(75, 192, 192, 0.2)",
					"rgba(75, 192, 75, 0.2)",
					"rgba(192, 192, 75, 0.2)",
					"rgba(192, 75, 75, 0.2)",
				],
				borderColor: [
					"rgba(75, 192, 192, 1)",
					"rgba(75, 192, 75, 1)",
					"rgba(192, 192, 75, 1)",
					"rgba(192, 75, 75, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		indexAxis: "y",
		scales: {
			x: {
				beginAtZero: true,
				max: 40,
				ticks: {
					stepSize: 9,
					callback: function (value) {
						if (value <= 18.5) return labels[0];
						if (value <= 24.9) return labels[1];
						if (value <= 29.9) return labels[2];
						if (value <= 40) return labels[3];
					},
				},
			},
		},
		plugins: {
			afterDatasetsDraw: (chart) => {
				const ctx = chart.ctx;
				const dataset = chart.getDatasetMeta(0);
				const bar = dataset.data[0];
				const startX = bar.x - bar.width / 2;
				const endX = bar.x + bar.width / 2;
				let currentX = startX;

				bmiRanges.forEach((range, index) => {
					const nextX =
						startX + (range / 40) * (endX - startX);
					ctx.fillStyle = colors[index];
					ctx.fillRect(
						currentX,
						bar.y - bar.height / 2,
						nextX - currentX,
						bar.height
					);

					ctx.fillStyle = "black";
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(
						labels[index],
						(currentX + nextX) / 2,
						bar.y
					);

					currentX = nextX;
				});
			},
		},
	};

	return (
		<>
			<div className='flex flex-col items-center bg-[white] py-[30px] px-[10px] rounded-[10px] overflow-hidden drop-shadow-md'>
				{/* BMI 지수 제목 */}
				<div className='flex justify-center text-[23px] font-extrabold'>
					<div>BMI : {bmi}</div>
					<div className='ml-[10px] text-[#FF8540]'>
						(비만)
					</div>
				</div>
				{/* BMI 지수 표 */}
				<div className=''>
					{/* <BarChart width={500} height={200} data={data}> */}
					<Bar
						style={{width: "340px", height: "300px"}}
						data={data}
						options={options}
					/>
					<ResponsiveBullet data={data2} />
					{/* <XAxis dataKey='name' />
						<YAxis />
					</BarChart>
					{bmi && <BMIChart bmi={bmi} />} */}
				</div>
			</div>
		</>
	);
};

export default BMIChart;
