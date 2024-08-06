import React, {useState, useEffect} from "react";
import {GrFormPrevious, GrFormNext} from "react-icons/gr";
import axios from "axios";

const ParentsCheck = () => {
	// 토큰과 상태 초기화
	const Ltoken = localStorage.getItem("token");
	const [qss, setUsers] = useState({
		niceSleepDay: null,
		hardWorkout: null,
		takingMedicine: null,
		niceDailyMood: null,
	});

	// 데이터 가져오기
	const fetchData = async () => {
		const today = new Date().toISOString().split("T")[0];
		// const today = "2024-08-05";
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/child-daily-check`,
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
				setUsers({
					niceSleepDay: response.data.niceSleepDay ?? null,
					hardWorkout: response.data.hardWorkout ?? null,
					takingMedicine:
						response.data.takingMedicine ?? null,
					niceDailyMood:
						response.data.niceDailyMood ?? null,
				});
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

	// 아이콘 결정 함수
	const getIcon = (value) => {
		if (value === null) return "img/QuestionIcon.png"; // 데이터가 없는 경우
		return value ? "img/OIcon.png" : "img/XIcon.png"; // true/false에 따른 아이콘
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='bg-white'>
			<div className='w-[70%] flex justify-between items-center bg-[#E9F4FD] border-[2px] border-[#ABD8F7] rounded-[10px] drop-shadow-md px-[50px] py-[30px] mb-[10px]'>
				<button>
					<GrFormPrevious size={50} />
				</button>
				<div className='flex flex-col items-center font-bold'>
					<div className='fontBold text-[25px]'>
						님의 오늘 하루 건강 체크
					</div>
					<div className='text-[16px] text-[grey]'>
						님이 체크한 건강 상태입니다!
					</div>
				</div>
				<button>
					<GrFormNext size={50} />
				</button>
			</div>
			<div className='w-[90%] grid grid-cols-4 place-items-center rounded-[10px py-[20px] px-[50px] mt-[20px] rounded-[10px]'>
				{/* 수면 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						수면
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/sleep.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div className='flex justify-center mt-[10px]'>
							<img
								className='w-[120px]'
								src={getIcon(qss.niceSleepDay)}
								alt=''
							/>
						</div>
					</div>
				</div>
				{/* 활동 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						활동
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/exercise1.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div className='flex justify-center mt-[10px]'>
							<img
								className='w-[120px]'
								src={getIcon(qss.hardWorkout)}
								alt=''
							/>
						</div>
					</div>
				</div>
				{/* 약 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						약
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/sick.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div className='flex justify-center mt-[10px]'>
							<img
								className='w-[120px]'
								src={getIcon(qss.takingMedicine)}
								alt=''
							/>
						</div>
					</div>
				</div>
				{/* 행복 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						행복
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/happy.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div className='flex justify-center mt-[10px]'>
							<img
								className='w-[120px]'
								src={getIcon(qss.niceDailyMood)}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParentsCheck;
