import React from "react";

const About = () => {
	return (
		<div className=''>
			{/* section1 */}
			<div className='Main grid grid-cols-2 place-items-center px-[160px] py-[70px]'>
				<div className='flex flex-col items-start'>
					<span className='font-medium text-[30px] text-[#535F76]'>
						지적 발달 장애인을 위한 맞춤 운동 서비스
					</span>
					<span className='font-bold text-[60px] text-[#486AFF]'>
						건강 동반자, <br />
						ID Fit과 함께 하세요!
					</span>
				</div>
				<div>
					<img
						className='w-[550px]'
						src='img/mainpage.png'
						alt=''
					/>
				</div>
			</div>
			{/* section2 */}
			<div className='flex flex-col items-center justify-center text-white text-[20px] bg-[#5A6CFF] px-[160px] py-[50px]'>
				<span>맞춤형 운동 서비스와</span>
				<span>
					보호자 모니터링 서비스로 자녀의 건강을 체크하세요!
				</span>
			</div>
			{/* section3 */}
			<div></div>
		</div>
	);
};

export default About;
