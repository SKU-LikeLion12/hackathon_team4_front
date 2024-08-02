import React from "react";
import {GrFormPrevious} from "react-icons/gr";
import {GrFormNext} from "react-icons/gr";

const ParentsCheck = () => {
	return (
		<>
			<div className='w-[70%] flex justify-between items-center bg-[#E9F4FD] border-[2px] border-[#ABD8F7] rounded-[10px] drop-shadow-md px-[50px] py-[30px] mb-[10px]'>
				<button>
					<GrFormPrevious size={50} />
				</button>
				<div className='flex flex-col items-center'>
					<div className='fontBold text-[25px]'>
						님의 월 일 하루 건강 체크
					</div>
					<div className='text-[16px] text-[grey]'>
						님이 체크한 건강 상태입니다!
					</div>
				</div>
				<button>
					<GrFormNext size={50} />
				</button>
			</div>
			<div className='w-[90%] grid grid-cols-4 place-items-center rounded-[10px py-[20px] px-[50px] mt-[20px] rounded-[10px]'>
				{/* 수면 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						수면
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/sleep.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div className='flex justify-center mt-[10px]'>
							<img
								className='w-[120px]'
								src='img/OIcon.png'
								alt=''
							/>
						</div>
					</div>
				</div>
				{/* 활동 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						활동
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/exercise1.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div className='flex justify-center mt-[10px]'>
							<img
								className='w-[120px]'
								src='img/XIcon.png'
								alt=''
							/>
						</div>
					</div>
				</div>
				{/* 약 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						약
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/sick.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
						<div></div>
					</div>
				</div>
				{/* 행복 */}
				<div className='flex flex-col items-center'>
					<div className='text-[25px] text-[#3D3C3C] flex justify-center font-bold mb-[10px]'>
						행복
					</div>
					<div className='bg-white px-[20px] py-[20px] rounded-[15px] drop-shadow-md'>
						<img
							className='w-[150px] px-[20px] pb-[20px]'
							src='img/happy.png'
							alt=''
						/>
						<div className='w-full bg-[#D9DADD] h-[1px]'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ParentsCheck;
