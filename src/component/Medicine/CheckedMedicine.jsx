import React, {useState, useEffect} from "react";
import axios from "axios";
import DonutChart from "./DonutChart";

export default function CheckedMedicine({Ltoken}) {
	const [activeTab, setActiveTab] = useState("tab1");
	const [medicines, setMedicines] = useState({
		morning: [],
		lunch: [],
		dinner: [],
	});

	// 데이터 받아오기
	useEffect(() => {
		const getMedicineData = async () => {
			try {
				// const response = await axios.get('http://localhost:8080/schedule/get',
				//     {
				//         headers: {
				//             Authorization: `Bearer ${Ltoken}`,
				//         },
				//     });
				// 엔드포인트 수정하기

				// 임의 데이터 사용 (DB에 사용자가 여러명 있는데 그 중 특정 1사람 골라내기 위해 토큰을 일단 가져오면 그거에 해당하는 약들만 가져와짐)
				const data = [
					{
						title: "타이레놀",
						morning: "true",
						lunch: "true",
						dinner: "true",
						scheduleMedicineId: 1,
					},
					{
						title: "비타민C",
						morning: "true",
						lunch: "false",
						dinner: "false",
						scheduleMedicineId: 2,
					},
					{
						title: "고혈압약",
						morning: "false",
						lunch: "true",
						dinner: "false",
						scheduleMedicineId: 3,
					},
					{
						title: "유산균",
						morning: "false",
						lunch: "false",
						dinner: "true",
						scheduleMedicineId: 4,
					},
				];

				// true인 것만 필터링됨. 아침,점심,저녁 true인것만 띄워야하니까 이건 필요
				setMedicines({
					morning: data.filter(
						(med) => med.morning === "true"
					), // morining중 true인 약
					lunch: data.filter((med) => med.lunch === "true"),
					dinner: data.filter(
						(med) => med.dinner === "true"
					),
				});
			} catch (error) {
				console.error("데이터 못받아옴!! ", error);
			}
		};

		getMedicineData(); // 함수 호출돼서 async 함수 실행됨
	}, [Ltoken]);

	// // 체크한거 보내기
	const handleTakeMedicine = async (med, timeOfDay) => {
		try {
			await axios.post(
				"http://localhost:8080/api/medicine-check/toggle",
				{
					scheduleMedicineId: med.scheduleMedicineId,
					timeOfDay,
				},
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);
			setMedicines((prevState) => ({
				...prevState,
				[timeOfDay]: prevState[timeOfDay].map((item) =>
					item.scheduleMedicineId === med.scheduleMedicineId
						? {...item, taken: true}
						: item
				),
			}));
		} catch (error) {
			console.error("보내기 실패", error);
		}
	};

	// 화면에 렌더링 되는 부분 : renderGrid에 담음
	const renderGrid = (meds, timeOfDay) => {
		const bgColor =
			timeOfDay === "morning"
				? "bg-[#ff8540]"
				: timeOfDay === "lunch"
				? "bg-[#3b9ffc]"
				: "bg-[#3f72c1]";
		const textColor =
			timeOfDay === "morning"
				? "text-[#ff8540]"
				: timeOfDay === "lunch"
				? "text-[#3b9ffc]"
				: "text-[#3f72c1]";

		return (
			<div className='grid grid-cols-2 gap-4'>
				{meds.map((med) => (
					<div
						key={med.scheduleMedicineId} // 원래 key를 title로 했음.
						className={`flex flex-col items-start ${bgColor} text-black py-[20px] px-[30px] rounded-[10px] mx-[30px] my-[20px]`}
					>
						<h2 className={`text-xl mb-2 text-white`}>
							{timeOfDay === "morning"
								? "아침"
								: timeOfDay === "lunch"
								? "점심"
								: "저녁"}
						</h2>
						<span>{med.title}</span>
						<button
							className={`w-full bg-white rounded-lg ${textColor} px-4 py-2 mt-5 font-normal`}
							onClick={() =>
								handleTakeMedicine(med, timeOfDay)
							}
							disabled={med.taken} // 버튼 누르면 비활성화
						>
							{med.taken ? "V" : "먹었어요"}
						</button>
					</div>
				))}
			</div>
		);
	};

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

	// const hasMedicines = medicines.morning.length > 0 || medicines.lunch.length > 0 || medicines.dinner.length > 0;

	return (
		<div className='justify-items-center rounded-xl drop-shadow-xl bg-white w-[900px] h-[800px] m-10'>
			<div className='flex justify-center'>
				<button
					className={`px-4 py-[20px] mx-2 border-b-2 w-full font-bold text-[20px] ${
						activeTab === "tab1"
							? "border-b-red-500 text-blue-500"
							: "border-b-lightgray text-[#dddcde]"
					}`}
					onClick={() => setActiveTab("tab1")}
				>
					오늘 먹을 약
				</button>
				<button
					className={`px-4 py-[20px] mx-2 border-b-2 w-full font-bold text-[20px] ${
						activeTab === "tab2"
							? "border-b-red-500 text-blue-500"
							: "border-b-ligthgray text-[#dddcde]"
					}`}
					onClick={() => setActiveTab("tab2")}
				>
					약 섭취 현황
				</button>
			</div>

			{activeTab === "tab1" && (
				<div>
					{renderGrid(medicines.morning, "morning")}
					{renderGrid(medicines.lunch, "lunch")}
					{renderGrid(medicines.dinner, "dinner")}
				</div>
			)}

			{activeTab === "tab2" && (
				<div className='chart-container m-30 grid grid justify-items-center w-30'>
					<DonutChart />
				</div>
			)}
		</div>
	);
}
