import React from "react";
import {Link} from "react-router-dom";

const Muscle = () => {
	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-3 px-[200px] pt-[20px] pb-[50px]'>
				{/* 운동1 */}
				<div className='w-[220px] h-full bg-[#D3E7FE] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop shadow-md'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='w-[130px]'
								src='img/fit1-1.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#387EFF] text-white text-[15px] font-medium rounded-[10px] px-[6px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							옆구리 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#787474] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								한 쪽 팔씩 천천히
								<br />
								반대 방향으로 늘려줍니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동2 */}
				<div className='w-[220px] h-full bg-[#D3E7FE] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop shadow-md'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='w-[130px]'
								src='img/fit1-1.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#387EFF] text-white text-[15px] font-medium rounded-[10px] px-[6px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							옆구리 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#787474] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								한 쪽 팔씩 천천히
								<br />
								반대 방향으로 늘려줍니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동3 */}
				<div className='w-[220px] h-full bg-[#D3E7FE] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop shadow-md'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='w-[130px]'
								src='img/fit1-1.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#387EFF] text-white text-[15px] font-medium rounded-[10px] px-[6px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							옆구리 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#787474] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								한 쪽 팔씩 천천히
								<br />
								반대 방향으로 늘려줍니다.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Muscle;
