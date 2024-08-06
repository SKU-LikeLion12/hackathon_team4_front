import React, {useState, useEffect} from "react";
import axios from "axios";

function OneDayCheck() {
	const Ltoken = localStorage.getItem("token");

	const [users, setUsers] = useState({
		name: "",
	});

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/child/uniqueKey`,
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);
			if (response.status === 200) {
				// 데이터 상태 업데이트
				setUsers(response.data);
				console.log("data get: ", response);
			} else {
				console.error(
					"조건이 충족되지 않음",
					response.data
				);
			}
		} catch (error) {
			console.error("오류", error);
			console.log("실패");
		}
	};

	const [selectedButtons, setSelectedButtons] = useState({
		niceSleepDay: null,
		hardWorkout: null,
		takingMedicine: null,
		niceDailyMood: null,
	});
	const [isSubmitEnabled, setIsSubmitEnabled] =
		useState(false);

	const handleButtonClick = (key, value) => {
		setSelectedButtons((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const handleSubmit = async () => {
		const today = new Date().toISOString().split("T")[0];
		const dataToSend = {
			checkedDay: today,
			niceSleepDay: selectedButtons.niceSleepDay,
			hardWorkout: selectedButtons.hardWorkout,
			takingMedicine: selectedButtons.takingMedicine,
			niceDailyMood: selectedButtons.niceDailyMood,
		};

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/dailycheck/add`,
				dataToSend,
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`, // 헤더에 토큰 포함
					},
				}
			);
			console.log("Response:", response.data);
			// 상태 초기화
			setSelectedButtons({
				niceSleepDay: null,
				hardWorkout: null,
				takingMedicine: null,
				niceDailyMood: null,
			});
			setIsSubmitEnabled(false);
		} catch (error) {
			console.error("Error submitting data:", error);
		}
	};

	useEffect(() => {
		const allAnswered = Object.keys(selectedButtons).every(
			(key) => selectedButtons[key] !== null
		);
		setIsSubmitEnabled(allAnswered);
	}, [selectedButtons]);

	useEffect(() => {
		fetchData();
	}, []);

	const questions = [
		{
			key: "niceSleepDay",
			count: 1,
			img: "img/sleep.png",
			qs: "충분한 수면을 취했나요?",
		},
		{
			key: "hardWorkout",
			count: 2,
			img: "img/sick.png",
			qs: "특별하게 아픈 곳은 없었나요?",
		},
		{
			key: "takingMedicine",
			count: 3,
			img: "img/exercise1.png",
			qs: "활동적으로 움직였나요?",
		},
		{
			key: "niceDailyMood",
			count: 4,
			img: "img/happy.png",
			qs: "오늘 하루 행복한가요?",
		},
	];

	return (
		<div className='flex flex-col items-center bg-[#f0f7ff] py-[60px] px-[60px]'>
			<div className='text flex items-center justify-center bg-[#276FFB] mb-[50px] px-[120px] py-[50px] rounded-[10px]'>
				<div className='text-5xl font-extrabold text-white'>
					<p>{users.name}님의 건강상태를</p>
					<br />
					<p>체크해보아요!</p>
				</div>
				<div className='ml-0'>
					<img
						className='w-[150px] ml-[30px]'
						src='img\medicine.png'
						alt='약'
					></img>
				</div>
			</div>
			<div className='grid grid-cols-2 gap-10 place-items-center m-[10px]'>
				{questions.map((q) => (
					<div
						key={q.key}
						className='w-[320px] h-full p-4 rounded-lg bg-[#ffffff] drop-shadow-xl'
					>
						<div className='mb-3 flex items-center justify-center font-semibold text-[18px]'>
							<span className='text-[#276FFB]'>
								{q.count}
							</span>
							/4
						</div>
						<div className='text-xl p-3 flex flex-col items-center justify-center font-bold'>
							{q.qs}
						</div>
						<div className='flex justify-center my-[30px]'>
							<img
								className='w-[120px]'
								src={q.img}
								alt=''
							></img>
						</div>
						<div className='Btn grid grid-cols-2 gap-3'>
							<div
								className={`BtnContainer rounded-lg font-extrabold text-5xl ${
									selectedButtons[q.key] === true
										? "bg-[#d3daf4]"
										: "bg-[#dddcde]"
								}`}
								onClick={() =>
									handleButtonClick(q.key, true)
								}
							>
								<button
									className={`Obtn px-4 py-5 w-full ${
										selectedButtons[q.key] === true
											? "text-[#208df9]"
											: "text-[#7b7b7b]"
									}`}
								>
									O
								</button>
							</div>
							<div
								className={`BtnContainer rounded-lg font-extrabold text-5xl ${
									selectedButtons[q.key] === false
										? "bg-[#e4cccc]"
										: "bg-[#dddcde]"
								}`}
								onClick={() =>
									handleButtonClick(q.key, false)
								}
							>
								<button
									className={`Xbtn px-4 py-5 w-full ${
										selectedButtons[q.key] === false
											? "text-[#e93c3c]"
											: "text-[#7b7b7b]"
									}`}
								>
									X
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='grid justify-items-center pt-10'>
				<button
					className='Submit-btn bg-[#68aefe] text-white font-bold px-6 py-3 rounded-md shadow-md disabled:bg-[#dadada] disabled:text-white'
					onClick={handleSubmit}
					disabled={!isSubmitEnabled}
				>
					체크완료
				</button>
			</div>
		</div>
	);
}

export default OneDayCheck;
