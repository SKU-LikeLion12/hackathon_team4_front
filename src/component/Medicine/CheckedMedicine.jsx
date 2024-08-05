import React, {useState} from "react";
import DonutChart from "./DonutChart";
// import axios from 'axios';
// import ApexChart from 'apexcharts'

export default function CheckedMedicine() {
	const [activeTab, setActiveTab] = useState("tab1");

	const medicines = [
		// 데이터 넣는 거 필요 (수정하기)
		{
			id: 1,
			time: "아침1",
			name: "항우울제",
			color: "bg-[#ff8540]",
		},
		{
			id: 2,
			time: "아침2",
			name: "고혈압약",
			color: "bg-[#ff8540]",
		},
		{
			id: 3,
			time: "점심1",
			name: "기분안정제",
			color: "bg-[#3b9ffc]",
		},
		{
			id: 4,
			time: "점심2",
			name: "항우울제",
			color: "bg-[#3b9ffc]",
		},
		{
			id: 5,
			time: "저녁1",
			name: "수면제",
			color: "bg-[#3f72c1]",
		},
		{
			id: 6,
			time: "저녁2",
			name: "고혈압약",
			color: "bg-[#3f72c1]",
		},
	];

	// const handleButtonClick = async () => {
	//     // 상태 변경
	//     const newStatus = !checked;
	//     setChecked(newStatus);

	//     // 데이터 전송
	//     try {
	//         const response = await axios.post('url', {
	//             id : medicines.id,
	//             status: newStatus ? 'checked' : 'unchecked',
	//         });
	//         console.log('약에 체크가 되었습니다:', response.data);
	//     } catch (error) {
	//         console.error('에러:', error);
	//     }

	// };

	// const medicine = medicines.map((Medicine, index) => {
	//     return (
	//         <>
	//             <div key={index} className="MedicineCkBox rounded-lg w-[200px] h-[100px] p-4 m-5"> {/*약체크칸*/}
	//                 <div className="">
	//                     <span className="text-white p-3">
	//                     {Medicine.time}
	//                     </span>
	//                     <br/>
	//                     <li className="text-white">
	//                         {Medicine.name}
	//                     </li>
	//                 </div>
	//                 <button> {/*클릭하면 체크로 변하는걸로 수정해야함*/}
	//                     먹었어요.
	//                 </button>
	//             </div>

	//         </>
	//     );

	// });

	return (
		<div className='justify-items-center rounded-xl drop-shadow-xl bg-white w-[900px] m-10'>
			<div className='flex justify-center'>
				<button
					className={`px-4 py-2 mx-2 border-b-2 w-full ${
						activeTab === "tab1"
							? "border-b-red-500 text-blue-500"
							: "border-b-lightgray text-[#dddcde]"
					}`}
					onClick={() => setActiveTab("tab1")}
				>
					오늘 먹을 약
				</button>
				<button
					className={`px-4 py-2 mx-2 border-b-2 w-full ${
						activeTab === "tab2"
							? "border-b-red-500 text-blue-500"
							: "border-b-ligthgray text-[#dddcde]"
					}`}
					onClick={() => setActiveTab("tab2")}
				>
					약 섭취 현황
				</button>
			</div>

			{activeTab === "tab1" && ( // 일단 나중에 수정
				<div className='grid grid-cols-2 gap-3 justify-items-center'>
					{/* {medicine} */}
					{medicines.map((Medicine, index) => (
						<div
							key={index}
							className={`MedicineCkBox rounded-lg w-[200px] h-[100px] p-4 m-5 ${Medicine.color}`}
						>
							{/*약체크칸*/}
							<div className=''>
								<span className='text-white p-3'>
									{Medicine.time}
								</span>
								<br />
								<li className='text-white'>
									{Medicine.name}
								</li>
							</div>
							<button>먹었어요</button>
						</div>
					))}
				</div>
			)}

			{activeTab === "tab2" && (
				<div className='grid grid-cols-2 gap-3 justify items-center'>
					<DonutChart />
				</div>
			)}
		</div>
	);
}
