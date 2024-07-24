import React from "react";

export default function ChildHealthCare() {
	return (
		<div className='h-full'>
			<div className='w-full bg-white h-[250px] flex flex-col items-center justify-center'>
				<span className='text-[25px] mb-[20px] font-bold'>
					사자님의 건강 정보를 <br />
					한눈에 볼 수 있어요!
				</span>
				<span>
					사자님의 개인정보는 마이페이지에서 수정
					가능합니다.
				</span>
				<span className='udnerline underline-offset-1'>
					마이페이지 바로가기
				</span>
			</div>
			<div className='pt-[40px] px-[60px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					{/* 왼쪽 */}
					<div className='grid grid-rows-2m pr-[100px]'>
						<div className='flex flex-col items-center bg-[white] h-[360px] pt-[30px] pb-[10px] px-[30px] rounded-[10px] overflow-hidden drop-shadow-md mb-[20px]'>
							<img
								className='w-[100px] '
								src='img/Woman.png'
								alt=''
							/>
							<div className='flex flex-col items-center my-[20px]'>
								<div className='text-[22px] font-bold pb-[5px]'>
									김사자
								</div>
								<div className='border-[1px] border-[#FF8540] rounded-[20px] px-[20px] py-[3px] text-[#FF8540] my-[8px] font-medium'>
									여성
								</div>
							</div>
							<div className='grid grid-cols-3'>
								<div className='flex flex-col items-center pr-[30px]'>
									<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
										나이
									</div>
									<div className='text-[black] font-medium'>
										15세
									</div>
								</div>
								<div className='flex flex-col items-center px-[60px] border-x-[2px] border-[#D9D9D9]'>
									<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
										키
									</div>
									<div className='text-[black] font-medium'>
										65kg
									</div>
								</div>
								<div className='flex flex-col items-center pl-[30px]'>
									<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
										몸무게
									</div>
									<div className='text-[black] font-medium'>
										65kg
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center bg-[white] py-[30px] px-[10px] rounded-[10px] overflow-hidden drop-shadow-md'>
							{/* BMI 지수 제목 */}
							<div className='flex justify-center text-[23px] font-extrabold'>
								<div>BMI : 26.67</div>
								<div className='ml-[10px] text-[#FF8540]'>
									(비만)
								</div>
							</div>
							{/* BMI 지수 표 */}
							<div>
								<img src='img/BMI.png' alt='' />
							</div>
						</div>
					</div>
					{/* 오른쪽 */}
					<div className='grid grid-rows-2m'>
						<div className='flex flex-col items-start h-[360px] bg-[#208DF9] pt-[30px] rounded-[10px] overflow-hidden drop-shadow-md overflow-hidden'>
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
									<div className='text-[25px] text-white font-bold mb-[20px]'>
										7월 15일 화요일
									</div>
								</div>
							</div>
							<div className='grid grid-cols-2 w-full h-[370px] bg-[white] px-[40px] py-[10px] overflow-y-auto gap-x-8 font-bold'>
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
					</div>
				</div>
			</div>
		</div>
	);
}
