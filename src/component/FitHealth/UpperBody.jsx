import React from "react";
import {Link} from "react-router-dom";

const UpperBody = () => {
	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-3 px-[200px] pt-[20px] pb-[50px]'>
				{/* 운동1 */}
				<div className='w-[250px] h-full bg-[#D7ECFB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='h-[130px]'
								src='img/fit2-1.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#3B9FFC] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							팔 스트레칭
						</div>
						<div className='h-[1px] w-[80%] bg-[#3B9FFC] my-[5px] '></div>
						<div className='text-center text-[#787474]'>
							<span>
								손 깍지를 낀 상태로
								<br />
								팔을 위로 쭉 뻗습니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동2 */}
				<div className='w-[250px] h-full bg-[#D7ECFB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='h-[130px]'
								src='img/fit2-2.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#3B9FFC] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							팔굽혀펴기
						</div>
						<div className='h-[1px] w-[80%] bg-[#3B9FFC] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								손과 다리를 어깨너비로
								<br />
								벌린 후 팔을 굽혔다 핍니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동3 */}
				<div className='w-[250px] h-full bg-[#D7ECFB] py-[15px] px-[20px] mx-[80px] rounded-[8px] drop-shadow-xl'>
					<Link
						className=' flex flex-col bg-white px-[10px] py-[15px] rounded-[8px]'
						to='/'
					>
						<div className='flex justify-center'>
							<img
								className='h-[130px]'
								src='img/fit2-3.png'
								alt=''
							/>
						</div>
						<div className='flex justify-end'>
							<div className='flex justify-center bg-[#3B9FFC] text-white text-[15px] font-medium rounded-[10px] px-[10px] py-[5px] mt-[8px]'>
								영상보기
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-center'>
						<div className='font-bold text-center text-[20px] my-[6px]'>
							춤 추기
						</div>
						<div className='h-[1px] w-[80%] bg-[#3B9FFC] my-[5px]'></div>
						<div className='text-center text-[#787474]'>
							<span>
								자신이 즐겨듣는 노래를
								<br />
								재생해 춤을 춥니다.
							</span>
						</div>
					</div>
				</div>
				{/* 운동 체크 1 */}
				<div className='flex justify-center'>
					<button className='bg-[#D7ECFB] mx-[80px] my-[40px] py-[10px] px-[60px] text-white rounded-[30px] font-bold'>
						운동 완료
					</button>
				</div>
				<div className='flex justify-center'>
					<button className='bg-[#D7ECFB] mx-[80px] my-[40px] py-[10px] px-[60px] text-white rounded-[30px] font-bold'>
						운동 완료
					</button>
				</div>
				<div className='flex justify-center'>
					<button className='bg-[#D7ECFB] mx-[80px] my-[40px] py-[10px] px-[60px] text-white rounded-[30px] font-bold'>
						운동 완료
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpperBody;
