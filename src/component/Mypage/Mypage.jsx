import React from "react";
// import BMI from "../Mypage/BMI";
import BMIChart from "./BMIChart";
import MyProfile from "./MyProfile";

export default function Mypage() {
	return (
		<>
			<div className='bg-[#F0F7FF] py-[60px] px-[60px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					<div className='pr-[100px]'>
						<BMIChart />
					</div>
					<div>
						{/* <div className='grid grid-rows-2m pr-[100px]'> */}
						<MyProfile />
					</div>
				</div>
			</div>
		</>
	);
}
