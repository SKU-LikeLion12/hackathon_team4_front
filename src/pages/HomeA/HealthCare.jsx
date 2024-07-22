import React from "react";

// import Nav from "../component/Nav";

export default function HealthCare() {
	return (
		<div className='bg-[#F0F7FF] py-[60px]'>
			<div className='flex justify-center mb-[60px]'>
				<div className='bg-[#208DF9] w-[700px] h-[250px] rounded-[20px]'>
					dfsa
				</div>
			</div>
			<div className='flex justify-center'>
				<button className='HealthCareBox bg-[white] w-[300px] h-[350px] drop-shadow-xl overflow-hidden mr-[75px] pl-[20px] pr-[20px]'>
					<div className='flex flex-col items-start justify-start'>
						<span className='text-[#208DF9] font-bold text-[30px] mb-[3px]'>
							운동 기록
						</span>
						<span className='text-[18px]'>
							열심히 한 운동들을
						</span>
						<span className='text-[18px]'>
							기록해보세요!
						</span>
					</div>
					<div className='flex justify-end mt-[20px]'>
						<img
							className='w-[170px]'
							src='img/Runboy.png'
							alt=''
						/>
					</div>
				</button>
				<button className='HealthCareBox bg-[white] w-[300px] h-[350px] drop-shadow-xl overflow-hidden ml-[75px] pl-[20px] pr-[20px]'>
					<div className='flex flex-col items-start justify-start'>
						<span className='text-[#208DF9] font-bold text-[30px] mb-[3px]'>
							약 체크하기
						</span>
						<span className='text-[18px]'>
							먹어야하는 약을
						</span>
						<span className='text-[18px]'>
							기록해보세요!
						</span>
					</div>
					<div className='flex justify-end mt-[20px]'>
						<img
							className='w-[170px]'
							src='img/Medicine.png'
							alt=''
						/>
					</div>
				</button>
			</div>
		</div>
	);
}
