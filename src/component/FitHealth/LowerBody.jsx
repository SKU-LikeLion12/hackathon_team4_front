import React from "react";
import {Link} from "react-router-dom";

const LowerBody = () => {
	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-3 px-[200px] pt-[20px] pb-[50px]'>
				{/* 운동1 */}
				<div className='w-[250px] h-full bg-[#FFE0E6] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='h-[130px]'
								src='img/fit3-1.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#FF90A8] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							다리 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#FF90A8] my-[5px] '></div>
						<div className='text-center text-[#787474]'>
							<span>
								다리를 쭉 핀 상태에서
								<br />
								상체를 숙입니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동2 */}
				<div className='w-[250px] h-full bg-[#FFE0E6] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='h-[130px]'
								src='img/fit3-2.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#FF90A8] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							스쿼트
						</div>
						<div className='h-[1px] w-[80%] bg-[#FF90A8] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								발을 어깨너비로 벌린 후
								<br />
								천천히 앉았다, 일어납니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동3 */}
				<div className='w-[250px] h-full bg-[#FFE0E6] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='h-[130px]'
								src='img/fit3-3.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#FF90A8] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							무릎들어 걷기
						</div>
						<div className='h-[1px] w-[80%] bg-[#FF90A8] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								무릎을 가슴쪽으로
								<br />
								끌어올리며 걷습니다.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LowerBody;
