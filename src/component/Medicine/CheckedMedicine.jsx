import React, {useState, useEffect} from "react";
import axios from "axios";
import DonutChart from "./DonutChart";

export default function CheckedMedicine() {
	const Ltoken = localStorage.getItem("token");

	// useEffect(() => {
	//   const token = localStorage.getItem('token');
	//   const Token = localStorage.getItem('Token');
	//   setToken(token);
	// }, []);

	const [activeTab, setActiveTab] = useState("tab1");
	const [medicines, setMedicines] = useState({
		morning: [],
		lunch: [],
		dinner: [],
	});
	const [plusMedicines, setPlusMedicines] = useState([
		{
			title: " ",
			morning: false,
			lunch: false,
			dinner: false,
		},
	]);
	const [isFormSubmitted, setIsFormSubmitted] =
		useState(false);

	const getMedicineData = async () => {
		try {
			const response = await axios.get(
				"http://13.209.29.41:8080/schedule/get",
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);
			// 엔드포인트 수정하기

			console.log(response, "get 응답");

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
				dinner: data.filter((med) => med.dinner === "true"),
			});
		} catch (error) {
			console.error("데이터 못받아옴!! ", error);
		}
	};

	// 데이터 받아오기
	useEffect(() => {
		getMedicineData(); // 함수 호출돼서 async 함수 실행됨
	}, [Ltoken, isFormSubmitted]);

	// input의 데이터를 업데이트
	const handleInputChange = (e, index) => {
		const {name, value, checked, type} = e.target;
		console.log(name, value, checked, type, "ㅎㅇ");
		const newPlusMedicines = [...plusMedicines];
		newPlusMedicines[index][name] =
			type === "checkbox" ? checked : value;
		setPlusMedicines(newPlusMedicines);
		// setPlusMedicine((prevState) => ({
		//     ...prevState,
		//     [name]: type === 'checkbox' ? checked : value,
		// }));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log(plusMedicines);
		console.log(`Bearer ${Ltoken}`);

		try {
			const response = await axios.post(
				"http://13.209.29.41:8080/schedule/add",
				plusMedicines, // 전송할 데이터
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);

			console.log(response, "응답");
			setIsFormSubmitted(true);
		} catch (error) {
			console.error("약을 등록하는데 실패했습니다.", error);
		}
	};

	const addNewForm = () => {
		setPlusMedicines([
			...plusMedicines,
			{
				title: "",
				morning: false,
				lunch: false,
				dinner: false,
			},
		]);
	};

	// // 약 복용 유무 보내기 (근데 안보내짐..)
	const handleTakeMedicine = async (med, timeOfDay) => {
		try {
			await axios.post(
				"http://13.209.29.41:8080/api/medicine-check/toggle",
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
			//     id: 1,
			//     title: 'foo',
			//     body: 'bar',
			//     userId: 1,
			//   }, {
			//     headers: {
			//       'Content-type': 'application/json; charset=UTF-8',
			//     },
			//     // },
			// });
			setMedicines((prevState) => ({
				...prevState,
				[timeOfDay]: prevState[timeOfDay].map((item) =>
					item.scheduleMedicineId === med.scheduleMedicineId
						? {...item, taken: true}
						: item
				),
			}));
		} catch (error) {
			console.error("복용유무 보내기 실패", error);
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
			<div className='grid grid-cols-2 gap-4  '>
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
		<div className='justify-items-center rounded-xl drop-shadow-xl bg-white w-[900px] min-h-0 m-10'>
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

			{activeTab === "tab1" && !isFormSubmitted && (
				<div className='grid justify-items-center'>
					<form
						onSubmit={handleFormSubmit}
						className='flex flex-col w-auto p-4'
					>
						{plusMedicines.map((plusMedicines, index) => (
							<div
								key={index}
								className='mb-4 border p-4 rounded-lg'
							>
								<div className='mb-4'>
									<label className='flex block text-gray-700 pb-5'>
										약 이름
									</label>
									<input
										type='text'
										name='title'
										value={plusMedicines.title}
										onChange={(e) =>
											handleInputChange(e, index)
										}
										className='w-full px-3 py-2 border rounded'
										required
									/>
								</div>
								<div className='flex items-center mb-4'>
									<label className='px-3 block text-gray-700'>
										아침
									</label>
									<input
										type='checkbox'
										name='morning'
										checked={plusMedicines.morning}
										onChange={(e) =>
											handleInputChange(e, index)
										}
									/>
								</div>
								<div className='flex items-center mb-4'>
									<label className='px-3 block text-gray-700'>
										점심
									</label>
									<input
										type='checkbox'
										name='lunch'
										checked={plusMedicines.lunch}
										onChange={(e) =>
											handleInputChange(e, index)
										}
									/>
								</div>
								<div className='flex items-center mb-4'>
									<label className='px-3 block text-gray-700'>
										저녁
									</label>
									<input
										type='checkbox'
										name='dinner'
										checked={plusMedicines.dinner}
										onChange={(e) =>
											handleInputChange(e, index)
										}
									/>
								</div>
							</div>
						))}
						<button
							type='button'
							onClick={addNewForm}
							className='w-full px-4 py-2 bg-blue-500 text-white rounded-lg mt-4'
						>
							추가하기
						</button>
						<button
							type='submit'
							className='w-full px-4 py-2 bg-blue-500 text-white rounded-lg mt-4'
						>
							등록 완료!
						</button>
					</form>
				</div>
			)}
			{activeTab === "tab1" && isFormSubmitted && (
				<div>
					{renderGrid(medicines.morning, "morning")}
					{renderGrid(medicines.lunch, "lunch")}
					{renderGrid(medicines.dinner, "dinner")}
				</div>
			)}
			{activeTab === "tab1" && isFormSubmitted && (
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
