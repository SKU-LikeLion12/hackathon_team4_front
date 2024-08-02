import React from "react";
import MyProfile from "../Mypage/MyProfile";
import BMIChart from "../Mypage/BMIChart";
import Exercise from "./Exercise";
import Banner from "./Banner";
import ParentsCheck from "./ParentsCheck";

export default function ChildHealthCare() {
	return (
		<div className='h-full'>
			<div className='w-full bg-[#208DF9] h-[250px] flex flex-col items-center justify-center text-white'>
				<span className='text-[25px] mb-[20px] font-bold'>
					사자님의 건강 정보를 <br />
					한눈에 볼 수 있어요!
				</span>
				<span>
					사자님의 개인정보는 마이페이지에서 수정
					가능합니다.
				</span>
				<span className='udnerline underline-offset-1'>
					마이페이지 바로가기
				</span>
			</div>
			<div className='pt-[40px] px-[60px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					{/* 왼쪽 */}
					<div className='grid grid-rows-2m pr-[100px]'>
						<div>
							<MyProfile />
						</div>
						<div>
							{/* <div className='grid grid-rows-2m pr-[100px]'> */}
							<BMIChart />
						</div>
					</div>
					{/* 오른쪽 */}
					<div className='grid grid-rows-2m'>
						{/* 오른쪽 위: 운동 기록 */}
						<Exercise />
						{/* 오른쪽 아래 */}
						<div className='flex flex-col items-center bg-[white] py-[30px] px-[10px] rounded-[10px] overflow-hidden drop-shadow-md'>
							<Banner />
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center px-[60px] py-[40px]'>
					<ParentsCheck />
				</div>
			</div>
		</div>
	);
}
