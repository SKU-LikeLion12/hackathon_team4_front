import React from "react";

const Exercise = () => {
	return (
		<div className='flex flex-col items-start h-[360px] bg-[white] pt-[30px] rounded-[10px] mb-[20px] overflow-hidden drop-shadow-md overflow-hidden'>
			<div className='pl-[30px]'>
				<div className='flex flex-col'>
					<div className='flex items-end justify-start font-bold mb-[10px]'>
						<img
							className='w-[30px]'
							src='img/logo.png'
							alt=''
						/>
						<div className='ml-[5px]'>
							3일째 연속 운동 중
						</div>
					</div>
					<div className='text-[25px] text-black font-bold mb-[20px]'>
						7월 15일 화요일
					</div>
				</div>
			</div>
			<div className='grid grid-cols-2 w-full h-[370px] bg-[#F0F7FF] px-[40px] py-[10px] overflow-y-auto gap-x-8 font-bold border-t-[1px] border-[#D9D9D9]'>
				<div className='flex flex-col items-start bg-[#FF8540] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'>
					<span>중요근육</span>
					<span>옆구리 스트레칭</span>
					<button className='w-full bg-white rounded-[10px] text-[#FF8540] px-[10px] py-[5px] mt-[20px] font-normal'>
						해당영상 보러가기
					</button>
				</div>
				<div className='flex flex-col items-start bg-[#FF8540] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'>
					<span>중요근육</span>
					<span>옆구리 스트레칭</span>
					<button className='w-full bg-white rounded-[10px] text-[#FF8540] px-[10px] py-[5px] mt-[20px] font-normal'>
						해당영상 보러가기
					</button>
				</div>
				<div className='flex flex-col items-start bg-[#3B9FFC] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'>
					<span>중요근육</span>
					<span>옆구리 스트레칭</span>
					<button className='w-full bg-white rounded-[10px] text-[#3B9FFC] px-[10px] py-[5px] mt-[20px] font-normal'>
						해당영상 보러가기
					</button>
				</div>
				<div className='flex flex-col items-start bg-[#3B9FFC] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'>
					<span>중요근육</span>
					<span>옆구리 스트레칭</span>
					<button className='w-full bg-white rounded-[10px] text-[#3B9FFC] px-[10px] py-[5px] mt-[20px] font-normal'>
						해당영상 보러가기
					</button>
				</div>
				<div className='flex flex-col items-start bg-[#3F72C1] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'>
					<span>중요근육</span>
					<span>옆구리 스트레칭</span>
					<button className='w-full bg-white rounded-[10px] text-[#3F72C1] px-[10px] py-[5px] mt-[20px] font-normal'>
						해당영상 보러가기
					</button>
				</div>
				<div className='flex flex-col items-start bg-[#3F72C1] text-white py-[20px] px-[30px] rounded-[10px] my-[20px]'>
					<span>중요근육</span>
					<span>옆구리 스트레칭</span>
					<button className='w-full bg-white rounded-[10px] text-[#3F72C1] px-[10px] py-[5px] mt-[20px] font-normal'>
						해당영상 보러가기
					</button>
				</div>
			</div>
		</div>
	);
};

export default Exercise;
