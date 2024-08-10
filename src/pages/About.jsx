import React from "react";
import Lottie from "react-lottie-player";
import About1 from "../component/Json/About1.json";
import About3 from "../component/Json/About2.json";
import About2 from "../component/Json/About3.json";

const About = () => {
	return (
		<div className=''>
			{/* section1 */}
			<div className='Main grid grid-cols-2 place-items-center px-[160px] py-[70px]'>
				<div className='flex flex-col items-start'>
					<span className='font-bold text-[55px] text-[#486AFF] mb-[30px]'>
						건강 동반자, <br />
						Id Fit과 함께 하세요!
					</span>
					<span className='font-medium text-[25px] text-[#535F76]'>
						지적∙발달 장애인을 위한 맞춤형 운동 서비스
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
			<div className='flex flex-col items-center justify-center text-white text-[20px] bg-[#5A6CFF] px-[160px] py-[70px] font-light'>
				<span>맞춤형 운동 서비스와</span>
				<span>
					보호자 모니터링 서비스로 자녀의 건강을 체크하세요!
				</span>
			</div>
			{/* section3 */}
			<div className='bg-white px-[160px] py-[70px]'>
				<div className='flex flex-col items-center mb-[70px]'>
					<span className='text-[40px] font-bold text-[black]'>
						<strong className='text-[#5A6CFF]'>
							{/* border-b-[#486AFF] */}
							Id Fit
						</strong>
						은 언제 필요할까요 ?
					</span>
					<span className='text-[17px] font-medium text-[#535F76] mt-[20px]'>
						Id Fit이 제공하는 서비스를 소개합니다.
					</span>
					<div className='grid grid-cols-3 gap-x-20 mt-[60px]'>
						<div className='flex flex-col items-center px-[10px]'>
							<div
								id='Aboutbox'
								className='Aboutbox1 w-[280px] bg-[#6EA0FF] py-[15px] font-bold text-white text-[20px] text-center'
							>
								1. 맞춤형 운동
							</div>
							<div className='mt-[20px]'>
								<Lottie
									className='w-[300px]'
									loop
									animationData={About1}
									play
								/>
							</div>
							<div className='w-[300px] text-center font-light'>
								BMI에 따라 chatgpt를 활용해 <br />
								맞춤형 운동 추천 서비스를 제공합니다.
							</div>
						</div>
						<div className='flex flex-col items-center px-[10px]'>
							<div
								id='Aboutbox'
								className='Aboutbox2 w-[280px] bg-[#5A6CFF] py-[15px] font-bold text-white text-[20px] text-center'
							>
								2. 보호자 모니터링
							</div>
							<div className='mt-[20px]'>
								<Lottie
									className='w-[300px]'
									loop
									animationData={About2}
									play
								/>
							</div>
							<div className='w-[300px] text-center font-light'>
								보호자와 사용자의 계정을 구분하여 <br />
								사용자의 운동기록 및 건강결과를 제공합니다.
							</div>
						</div>
						<div className='flex flex-col items-center px-[10px]'>
							<div
								id='Aboutbox'
								className='Aboutbox3 w-[280px] bg-[#856BFF] py-[15px] font-bold text-white text-[20px] text-center'
							>
								3. 하루 건강 체크
							</div>
							<div className='mt-[20px]'>
								<Lottie
									className='w-[300px]'
									loop
									animationData={About3}
									play
								/>
							</div>
							<div className='w-[300px] text-center font-light'>
								매일 간단한 건강 질문을 제공하여
								<br />
								수면, 기분, 활동 등을 파악합니다
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section4 */}
			<div className='bg-[#E3E7FF] px-[160px] py-[50px]'>
				<div className='flex flex-col items-center'>
					<span className='text-[35px] font-bold text-[#856BFF] drop-shadow-xl'>
						Id FiT과 함께 건강한 습관을 길러요!
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
