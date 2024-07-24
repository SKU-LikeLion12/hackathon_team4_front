import React, {useState} from "react";

export default function CheckedMedicine() {
	const [activeTab, setActiveTab] = useState("tab1");

	const medicines = [
		// 데이터 넣는 거 필요 (수정하기)
		{
			id: 1,
			time: "아침약1",
			name: "항우울제",
		},
		{
			id: 2,
			time: "아침약2",
			name: "고혈압약",
		},
		{
			id: 3,
			time: "점심약1",
			name: "기분안정제",
		},
		{
			id: 4,
			time: "점심약2",
			name: "항우울제",
		},
		{
			id: 5,
			time: "저녁약1",
			name: "수면제",
		},
		{
			id: 6,
			time: "저녁약2",
			name: "고혈압약",
		},
	];

	const medicine = medicines.map((Medicine) => {
		return (
			<>
				<div className='MedicineCkBox bg-sky-500 w-[100px] h-[90px] p-4'>
					{Medicine.id}
					<div className=''>
						<span className='text-white'>
							{Medicine.time}
						</span>
						<span className='text-white'>
							{Medicine.name}
						</span>
					</div>
					<button>먹었어요.</button>
				</div>
			</>
		);
	});

	return (
		<div className='rounded-lg border-2 border-[#68aefe] w-[70%] text-center m-10'>
			<button
				className={`px-4 py-2 mx-2 border-b-2 ${
					activeTab === "tab1"
						? "border-b-red-500 text-blue-500"
						: "border-b-lightgray text-[#dddcde]"
				}`}
				onClick={() => setActiveTab("tab1")}
			>
				오늘 먹을 약
			</button>
			<button
				className={`px-4 py-2 mx-2 border-b-2 ${
					activeTab === "tab2"
						? "border-b-red-500 text-blue-500"
						: "border-b-ligthgray text-[#dddcde]"
				}`}
				onClick={() => setActiveTab("tab2")}
			>
				약 섭취 현황
			</button>

			{activeTab === "tab1" && ( // 일단 나중에 수정
				<div className='grid grid-cols-2 gap-3 '>
					{medicine}
				</div>
			)}
		</div>
	);
}
