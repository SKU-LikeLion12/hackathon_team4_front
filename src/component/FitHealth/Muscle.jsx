import React from "react";
import {Link} from "react-router-dom";
import Lottie from "react-lottie-player";
import Fit11 from "../Json/Fit11.json";
import Fit12 from "../Json/Fit12.json";
import Fit13 from "../Json/Fit13.json";
import axios from "axios";

const Muscle = () => {
	const Ltoken = localStorage.getItem("token");
	const muscleOnclick = async (e, workoutName) => {
		e.preventDefault();
		const today = new Date().toISOString().split("T")[0];
		const dataToSend = {
			checkedDay: today,
			workoutType: "중요근육",
			workoutName: workoutName,
		};

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/workoutcheck/add`,
				dataToSend,
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`, // 헤더에 토큰 포함
					},
				}
			);
			console.log("잘보냄", response.data);
		} catch (error) {
			console.error("오류", error);
			console.log("실패");
		}
	};
	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-3 px-[200px] pt-[20px] pb-[50px]'>
				{/* 운동1 */}
				<div className='w-[250px] h-full bg-[#FDF3DB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-[#F5F5F5] px-[10px] py-[15px] rounded-[8px]'
						to='https://youtu.be/Emnamb_vRkM?si=gkljAoikJ8PF8gCw'
					>
						<div className='flex justify-center'>
							<Lottie
								className='w-[300px]'
								loop
								animationData={Fit11}
								play
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#FDCF61] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							옆구리 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#FDCF61] my-[5px] '></div>
						<div className='text-center text-[#787474]'>
							<span>
								한 쪽 팔씩 천천히
								<br />
								반대 방향으로 늘려줍니다.
							</span>
						</div>
					</div>
					<div className='flex justify-center mt-[20px]'>
						<button
							onClick={(e) =>
								muscleOnclick(e, "옆구리 스트레칭")
							}
							className='bg-[#FDCF61] py-[10px] px-[60px] text-white rounded-[30px] font-bold drop-shadow-md'
						>
							운동 완료
						</button>
					</div>
				</div>
				{/* 운동2 */}
				<div className='w-[250px] h-full bg-[#FDF3DB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='https://youtu.be/_FhgkNZkxcY?si=ligsZYb3ok1iGSnG'
					>
						<div className='flex justify-center'>
							<Lottie
								className='w-[300px]'
								loop
								animationData={Fit12}
								play
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#FDCF61] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							플랭크
						</div>
						<div className='h-[1px] w-[80%] bg-[#FDCF61] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								팔꿈치를 바닥에 대고
								<br />
								몸이 일자가 되도록 유지합니다.
							</span>
						</div>
					</div>
					<div className='flex justify-center mt-[20px]'>
						<button
							onClick={(e) => muscleOnclick(e, "플랭크")}
							className='bg-[#FDCF61] py-[10px] px-[60px] text-white rounded-[30px] font-bold drop-shadow-md'
						>
							운동 완료
						</button>
					</div>
				</div>
				{/* 운동3 */}
				<div className='w-[250px] h-full bg-[#FDF3DB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-[#F5F5F5] px-[10px] py-[15px] rounded-[8px]'
						to='https://youtu.be/VZx4Ynp2aT0?si=Ple5VT__FDDL_W8o'
					>
						<div className='flex justify-center'>
							<Lottie
								className='w-[300px]'
								loop
								animationData={Fit13}
								play
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#FDCF61] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							제자리 뛰기
						</div>
						<div className='h-[1px] w-[80%] bg-[#FDCF61] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								제자리에서 자신의
								<br />
								컨디션에 맞춰서 뜁니다.
							</span>
						</div>
					</div>
					<div className='flex justify-center mt-[20px]'>
						<button
							onClick={(e) =>
								muscleOnclick(e, "제자리 뛰기")
							}
							className='bg-[#FDCF61] py-[10px] px-[60px] text-white rounded-[30px] font-bold drop-shadow-md'
						>
							운동 완료
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Muscle;
