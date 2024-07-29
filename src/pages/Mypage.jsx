import React from "react";
import BMI from "../component/Mypage/BMI";
import Profile from "../component/Mypage/Profile";

const MyPage = () => {
	return (
		<>
			<div className='pt-[40px] px-[60px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					<div>마잏페이지</div>
					<div className='grid grid-rows-2m pr-[100px]'>
						<BMI />
					</div>
				</div>
			</div>
		</>
	);
};

export default MyPage;
