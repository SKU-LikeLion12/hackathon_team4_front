// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import DonutChart from "./DonutChart";

// export default function CheckedMedicine({Ltoken}) {
// 	const [activeTab, setActiveTab] = useState("tab1");
// 	const [medicines, setMedicines] = useState({
// 		morning: [],
// 		lunch: [],
// 		dinner: [],
// 	});
// 	const [plusMedicine, setPlusMedicine] = useState({
// 		title: " ",
// 		morning: false,
// 		lunch: false,
// 		dinner: false,
// 	});
// 	const [isFormSubmitted, setIsFormSubmitted] =
// 		useState(false);

// 	// 데이터 받아오기
// 	useEffect(() => {
// 		const getMedicineData = async () => {
// 			try {
// 				// const response = await axios.get('http://localhost:8080/schedule/get',
// 				//     {
// 				//         headers: {
// 				//             Authorization: `Bearer ${Ltoken}`,
// 				//         },
// 				//     });
// 				// 엔드포인트 수정하기

// 				// 임의 데이터 사용 (DB에 사용자가 여러명 있는데 그 중 특정 1사람 골라내기 위해 토큰을 일단 가져오면 그거에 해당하는 약들만 가져와짐)
// 				// const data = [
// 				// 	{
// 				// 		title: "타이레놀",
// 				// 		morning: "true",
// 				// 		lunch: "true",
// 				// 		dinner: "true",
// 				// 		scheduleMedicineId: 1,
// 				// 	},
// 				// 	{
// 				// 		title: "비타민C",
// 				// 		morning: "true",
// 				// 		lunch: "false",
// 				// 		dinner: "false",
// 				// 		scheduleMedicineId: 2,
// 				// 	},
// 				// 	{
// 				// 		title: "고혈압약",
// 				// 		morning: "false",
// 				// 		lunch: "true",
// 				// 		dinner: "false",
// 				// 		scheduleMedicineId: 3,
// 				// 	},
// 				// 	{
// 				// 		title: "유산균",
// 				// 		morning: "false",
// 				// 		lunch: "false",
// 				// 		dinner: "true",
// 				// 		scheduleMedicineId: 4,
// 				// 	},
// 				// ];

// 				// true인 것만 필터링됨. 아침,점심,저녁 true인것만 띄워야하니까 이건 필요
// 				setMedicines({
// 					morning: data.filter(
// 						(med) => med.morning === "true"
// 					), // morining중 true인 약
// 					lunch: data.filter((med) => med.lunch === "true"),
// 					dinner: data.filter(
// 						(med) => med.dinner === "true"
// 					),
// 				});
// 			} catch (error) {
// 				console.error("데이터 못받아옴!! ", error);
// 			}
// 		};

// 		getMedicineData(); // 함수 호출돼서 async 함수 실행됨
// 	}, [Ltoken, isFormSubmitted]);

// 	const handleInputChange = (e, index) => {
// 		const {name, value, checked, type} = e.target;
// 		const newPlusMedicines = [...plusMedicines];
// 		newPlusMedicines[index][name] =
// 			type === "checkbox" ? checked : value;
// 		setPlusMedicine(newPlusMedicines);
// 		// setPlusMedicine((prevState) => ({
// 		//     ...prevState,
// 		//     [name]: type === 'checkbox' ? checked : value,
// 		// }));
// 	};

// 	//버튼 클릭하면 post 되는거
// 	const handleFormSubmit = async (e, index) => {
// 		e.preventDefault();
// 		try {
// 			const newMedicine = plusMedicines[index];
// 			await axios.post(
// 				"http://localhost:8080/schedule/add",
// 				newMedicine,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${Ltoken}`,
// 						"Content-Type": "application/json",
// 					},
// 				}
// 			);
// 			setIsFormSubmitted(true);
// 		} catch (error) {
// 			console.error("약을 등록하는데 실패했습니다.", error);
// 		}
// 	};

// 	const addNewForm = () => {
// 		setPlusMedicine([
// 			...plusMedicines,
// 			{
// 				title: "",
// 				morning: false,
// 				lunch: false,
// 				dinner: false,
// 			},
// 		]);
// 	};

// 	// // 약 복용 유무 보내기 (근데 안보내짐..)
// 	const handleTakeMedicine = async (med, timeOfDay) => {
// 		try {
// 			await axios.post(
// 				"http://localhost:8080/api/medicine-check/toggle",
// 				{
// 					scheduleMedicineId: med.scheduleMedicineId,
// 					timeOfDay,
// 				},
// 				{
// 					headers: {
// 						Authorization: `Bearer ${Ltoken}`,
// 					},
// 				}
// 			);
// 			//     id: 1,
// 			//     title: 'foo',
// 			//     body: 'bar',
// 			//     userId: 1,
// 			//   }, {
// 			//     headers: {
// 			//       'Content-type': 'application/json; charset=UTF-8',
// 			//     },

// 			//     // },
// 			// });
// 			setMedicines((prevState) => ({
// 				...prevState,
// 				[timeOfDay]: prevState[timeOfDay].map((item) =>
// 					item.scheduleMedicineId === med.scheduleMedicineId
// 						? {...item, taken: true}
// 						: item
// 				),
// 			}));
// 		} catch (error) {
// 			console.error("복용유무 보내기 실패", error);
// 		}
// 	};

// 	// 화면에 렌더링 되는 부분 : renderGrid에 담음
// 	const renderGrid = (meds, timeOfDay) => {
// 		const bgColor =
// 			timeOfDay === "morning"
// 				? "bg-[#ff8540]"
// 				: timeOfDay === "lunch"
// 				? "bg-[#3b9ffc]"
// 				: "bg-[#3f72c1]";
// 		const textColor =
// 			timeOfDay === "morning"
// 				? "text-[#ff8540]"
// 				: timeOfDay === "lunch"
// 				? "text-[#3b9ffc]"
// 				: "text-[#3f72c1]";

// 		return (
// 			<div className='grid grid-cols-2 gap-4  '>
// 				{meds.map((med) => (
// 					<div
// 						key={med.scheduleMedicineId} // 원래 key를 title로 했음.
// 						className={`flex flex-col items-start ${bgColor} text-black py-[20px] px-[30px] rounded-[10px] mx-[30px] my-[20px]`}
// 					>
// 						<h2 className={`text-xl mb-2 text-white`}>
// 							{timeOfDay === "morning"
// 								? "아침"
// 								: timeOfDay === "lunch"
// 								? "점심"
// 								: "저녁"}
// 						</h2>
// 						<span>{med.title}</span>
// 						<button
// 							className={`w-full bg-white rounded-lg ${textColor} px-4 py-2 mt-5 font-normal`}
// 							onClick={() =>
// 								handleTakeMedicine(med, timeOfDay)
// 							}
// 							disabled={med.taken} // 버튼 누르면 비활성화
// 						>
// 							{med.taken ? "V" : "먹었어요"}
// 						</button>
// 					</div>
// 				))}
// 			</div>
// 		);
// 	};

// 	return (
// 		<div className='justify-items-center rounded-xl drop-shadow-xl bg-white w-[900px] h-[800px] m-10'>
// 			<div className='flex justify-center'>
// 				<button
// 					className={`px-4 py-2 mx-2 border-b-2 w-full ${
// 						activeTab === "tab1"
// 							? "border-b-red-500 text-blue-500"
// 							: "border-b-lightgray text-[#dddcde]"
// 					}`}
// 					onClick={() => setActiveTab("tab1")}
// 				>
// 					오늘 먹을 약
// 				</button>
// 				<button
// 					className={`px-4 py-2 mx-2 border-b-2 w-full ${
// 						activeTab === "tab2"
// 							? "border-b-red-500 text-blue-500"
// 							: "border-b-ligthgray text-[#dddcde]"
// 					}`}
// 					onClick={() => setActiveTab("tab2")}
// 				>
// 					약 섭취 현황
// 				</button>
// 			</div>

// 			{activeTab === "tab1" && !isFormSubmitted && (
// 				<div className='grid justify-items-center'>
// 					{plusMedicine.map((plusMedicine, index) => (
// 						<form
// 							onSubmit={(e) => handleFormSubmit(e, index)}
// 							className='flex w-auto p-4'
// 							key={index}
// 						>
// 							<div className='mb-4'>
// 								<label className='flex block text-gray-700 pb-5'>
// 									약 이름
// 								</label>
// 								<input
// 									type='text'
// 									name='title'
// 									value={plusMedicine.title}
// 									onChange={(e) =>
// 										handleInputChange(e, index)
// 									}
// 									className='w-full px-3 py-2 border rounded'
// 									required
// 								/>
// 							</div>
// 							<div className='flex p-10 mb-5'>
// 								<label className='px-3 block text-gray-700'>
// 									아침
// 								</label>
// 								<input
// 									type='checkbox'
// 									name='morning'
// 									checked={plusMedicine.morning}
// 									onChange={(e) =>
// 										handleInputChange(e, index)
// 									}
// 								/>
// 							</div>
// 							<div className='flex p-10 mb-5'>
// 								<label className='px-3 block text-gray-700'>
// 									점심
// 								</label>
// 								<input
// 									type='checkbox'
// 									name='lunch'
// 									checked={plusMedicine.lunch}
// 									onChange={(e) =>
// 										handleInputChange(e, index)
// 									}
// 								/>
// 							</div>
// 							<div className='flex p-10 mb-5'>
// 								<label className='px-3 block text-gray-700'>
// 									저녁
// 								</label>
// 								<input
// 									type='checkbox'
// 									name='dinner'
// 									checked={plusMedicine.dinner}
// 									onChange={(e) =>
// 										handleInputChange(e, index)
// 									}
// 								/>
// 							</div>
// 							<button
// 								type='submit'
// 								className='w-[full] px-4 py-2  bg-blue-500 text-white rounded-lg'
// 							>
// 								추가 완료!
// 							</button>
// 						</form>
// 					))}
// 					<button
// 						onClick={addNewForm}
// 						className='w-[full] px-4 py-2  bg-blue-500 text-white rounded-lg mt-4'
// 					>
// 						추가하기
// 					</button>
// 				</div>
// 			)}
// 			{activeTab === "tab1" && isFormSubmitted && (
// 				<div>
// 					{renderGrid(medicines.morning, "morning")}
// 					{renderGrid(medicines.lunch, "lunch")}
// 					{renderGrid(medicines.dinner, "dinner")}
// 				</div>
// 			)}

// 			{activeTab === "tab2" && (
// 				<div className='chart-container m-30 grid grid justify-items-center w-30'>
// 					<DonutChart />
// 				</div>
// 			)}
// 		</div>
// 	);
// }
