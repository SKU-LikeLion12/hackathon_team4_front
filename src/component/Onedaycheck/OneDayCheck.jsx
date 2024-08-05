import React, {useState, useEffect} from "react";
import OneDay from "./OneDay";
import axios from "axios";

function OneDayCheck() {
	const [selectedButtons, setSelectedButtons] = useState(
		{}
	);
	const [isSubmitEnabled, setIsSubmitEnabled] =
		useState(false); // 버튼 상태 값 판단

	const handleButtonClick = (count, value) => {
		setSelectedButtons((prev) => ({
			...prev,
			[count]: value,
		}));
	};

	// 백으로 보내는 부분
	const handleSubmit = async () => {
		try {
			const response = await axios.post("url", {
				selectedButtons,
			});
			console.log("Response:", response.data);
			// 제출완료된 후 상태 초기화
			setSelectedButtons({});
		} catch (error) {
			console.error("Error submitting data:", error);
		}
	};

	useEffect(() => {
		// 모든 질문에 응답이 있는지 CK
		const allAnswered = ["1", "2", "3", "4"].every(
			(key) => selectedButtons[key]
		);
		setIsSubmitEnabled(allAnswered);
	}, [selectedButtons]);

	const dates = [
		{
			count: "1",
			img: "img/sleep.png",
			qs: "충분한 수면을 취했나요?",
		},

		{
			count: "2",
			img: "img/sick.png",
			qs: "특별하게 아픈 곳은 없었나요?",
		},

		{
			count: "3",
			img: "img/exercise1.png",
			qs: "활동적으로 움직였나요?",
		},
		{
			count: "4",
			img: "img/happy.png",
			qs: " 오늘 하루 행복한가요?",
		},
	];

	// 렌더링 되는 부분
	return (
		<div className='bg-[#f0f7ff] py-[60px] '>
			<div className='text flex items-center justify-center'>
				<div className='text-5xl font-extrabold'>
					<p>사자님의 건강상태를</p>
					<br />
					<p>체크해보아요!</p>{" "}
					{/*사용자이름 props로 받아야하나? */}
				</div>
				<div className='ml-0'>
					<img
						className='w-30 h-30'
						src='img\medicine.png'
						alt='약'
					></img>
				</div>
			</div>
			{/* <div className="bg-[#f0f7ff] py-[60px]"> */}
			<div className='OneDayCheckBox'>
				{dates.map((date) => (
					<OneDay
						key={date.count}
						count={date.count}
						img={date.img}
						qs={date.qs}
						selectedButton={selectedButtons[date.count]}
						handleButtonClick={handleButtonClick}
					/>
				))}
			</div>
			<div className='grid justify-items-center pt-10'>
				<button
					className='Submit-btn bg-[#68aefe] text-white font-bold px-6 py-3 rounded-md shadow-md disabled:bg-[#dadada] disabled:text-white font-bold'
					onClick={handleSubmit}
					disabled={!isSubmitEnabled}
				>
					{/*handleSubmit버튼 클릭시 selectedButtons데이터를 백으로 보냄*/}
					체크완료
				</button>
			</div>
		</div>
	);
}

export default OneDayCheck;
