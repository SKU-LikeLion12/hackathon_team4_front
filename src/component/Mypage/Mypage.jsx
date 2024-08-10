import React, {useState} from "react";
// import BMI from "../Mypage/BMI";
import BMIChart from "./BMIChart";
import MyProfile from "../Parents/ParentsProfile";
import axios from "axios";

export default function Mypage() {
	return (
		<>
			<div className='bg-[#F0F7FF] py-[60px] px-[90px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					<div className='grid grid-rows-2m pr-[100px]'>
						<div className='bg-[#208DF9] pt-[30px] pb-[10px] px-[30px] rounded-[10px] mb-[30px] drop-shadow-md text-white'>
							<div>오늘 하루도 힘내세요!</div>
						</div>
						<div>
							<BMIChart />
						</div>
					</div>
					<div className='pl-[60px]'>
						<MyProfile />
					</div>
				</div>
			</div>
		</>
	);
}
