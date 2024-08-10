import React from "react";
import {Link} from "react-router-dom";
import Lottie from "react-lottie-player";
import Fit21 from "../Json/Fit21.json";
import Fit22 from "../Json/Fit22.json";
import Fit23 from "../Json/Fit23.json";
import axios from "axios";

const UpperBody = () => {
	const Ltoken = localStorage.getItem("token");
	const upperOnclick = async (e, workoutName) => {
		e.preventDefault();
		const today = new Date().toISOString().split("T")[0];
		const dataToSend = {
			checkedDay: today,
			workoutType: "상체",
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
				<div className='w-[250px] h-full bg-[#D7ECFB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-[#F5F5F5] px-[10px] py-[15px] rounded-[8px]'
						to='https://youtu.be/TtRm5QGFOZE?si=ih3fM35iAbQ4b-lA'
					>
						<div className='flex justify-center'>
							<Lottie
								className='w-[300px]'
								loop
								animationData={Fit21}
								play
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#3B9FFC] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							팔 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#3B9FFC] my-[5px] '></div>
						<div className='text-center text-[#787474]'>
							<span>
								손 깍지를 낀 상태로
								<br />
								팔을 위로 쭉 뻗습니다.
							</span>
						</div>
					</div>
					<div className='flex justify-center mt-[20px]'>
						<button
							onClick={(e) =>
								upperOnclick(e, "팔 스트레칭")
							}
							className='bg-[#3B9FFC] py-[10px] px-[60px] text-white rounded-[30px] font-bold drop-shadow-md'
						>
							운동 완료
						</button>
					</div>
				</div>
				{/* 운동2 */}
				<div className='w-[250px] h-full bg-[#D7ECFB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-[#F5F5F5] px-[10px] py-[15px] rounded-[8px]'
						to='https://youtu.be/7COhQIHunHI?si=k5CsuBnTDfjcCVoH'
					>
						<div className='flex justify-center'>
							<Lottie
								className='w-[300px]'
								loop
								animationData={Fit22}
								play
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#3B9FFC] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							팔굽혀펴기
						</div>
						<div className='h-[1px] w-[80%] bg-[#3B9FFC] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								손과 다리를 어깨너비로
								<br />
								벌린 후 팔을 굽혔다 핍니다.
							</span>
						</div>
					</div>
					<div className='flex justify-center mt-[20px]'>
						<button
							onClick={(e) => upperOnclick(e, "팔굽혀펴기")}
							className='bg-[#3B9FFC] py-[10px] px-[60px] text-white rounded-[30px] font-bold drop-shadow-md'
						>
							운동 완료
						</button>
					</div>
				</div>
				{/* 운동3 */}
				<div className='w-[250px] h-full bg-[#D7ECFB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-[#F5F5F5] px-[10px] py-[15px] rounded-[8px]'
						to='https://youtu.be/ie0_egRsJhc?si=oYgXT1u0y1P5eExW'
					>
						<div className='flex justify-center bg-[#F5F5F5]'>
							<Lottie
								className='w-[300px]'
								loop
								animationData={Fit23}
								play
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#3B9FFC] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							춤 추기
						</div>
						<div className='h-[1px] w-[80%] bg-[#3B9FFC] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								자신이 즐겨듣는 노래를
								<br />
								재생해 춤을 춥니다.
							</span>
						</div>
					</div>
					<div className='flex justify-center mt-[20px]'>
						<button
							onClick={(e) => upperOnclick(e, "춤 추기")}
							className='bg-[#3B9FFC] py-[10px] px-[60px] text-white rounded-[30px] font-bold drop-shadow-md'
						>
							운동 완료
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpperBody;
