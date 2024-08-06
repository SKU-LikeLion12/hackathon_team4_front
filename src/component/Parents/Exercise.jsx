import React, {useState, useEffect} from "react";
import axios from "axios";

const Exercise = () => {
	const today = new Date();

	const [upperBody, setUpperBody] = useState([]);
	const [lowerBody, setLowerBody] = useState([]);
	const [mainMuscle, setMainMuscle] = useState([]);

	const formattedDate = `${today.getFullYear()}년 ${
		today.getMonth() + 1
	}월 ${today.getDate()}일`;

	const Ltoken = localStorage.getItem("token");

	const fetchData = async () => {
		const today = new Date().toISOString().split("T")[0];
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/child-workoutcheck-checkedDay`,
				{
					params: {
						checkedDay: today,
					},
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);
			if (response.status === 200) {
				const data = response.data;
				// 각 운동 타입별로 데이터를 필터링하여 상태에 저장
				setUpperBody(
					data.filter((item) => item.workoutType === "상체")
				);
				setLowerBody(
					data.filter((item) => item.workoutType === "하체")
				);
				setMainMuscle(
					data.filter(
						(item) => item.workoutType === "중요근육"
					)
				);
			} else {
				console.error(
					"조건이 충족되지 않음",
					response.data
				);
			}
		} catch (error) {
			console.error("오류", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='flex flex-col items-start h-[360px] bg-[white] pt-[30px] rounded-[10px] mb-[20px] overflow-hidden drop-shadow-md'>
			<div className='pl-[30px]'>
				<div className='flex flex-col'>
					<div className='flex items-end justify-start font-bold mb-[10px]'>
						<img
							className='w-[30px]'
							src='img/logo.png'
							alt=''
						/>
						<div className='ml-[5px]'>운동 파이팅~!</div>
					</div>
					<div className='text-[25px] text-black font-bold mb-[20px]'>
						{formattedDate}
					</div>
				</div>
			</div>
			<div className='grid grid-cols-2 w-full h-[370px] bg-[#F0F7FF] px-[40px] py-[10px] overflow-y-auto gap-x-8 font-bold border-t-[1px] border-[#D9D9D9]'>
				{/* 상체 */}
				{upperBody.map((exercise, index) => (
					<div
						key={index}
						className='flex flex-col items-start bg-[#3B9FFC] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'
					>
						<span>{exercise.workoutType}</span>
						<span>{exercise.workoutName}</span>
					</div>
				))}
				{/* 하체 */}
				{lowerBody.map((exercise, index) => (
					<div
						key={index}
						className='flex flex-col items-start bg-[#FF90A8] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'
					>
						<span>{exercise.workoutType}</span>
						<span>{exercise.workoutName}</span>
					</div>
				))}
				{/* 중요근육 */}
				{mainMuscle.map((exercise, index) => (
					<div
						key={index}
						className='flex flex-col items-start bg-[#FDCF61] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'
					>
						<span>{exercise.workoutType}</span>
						<span>{exercise.workoutName}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Exercise;
