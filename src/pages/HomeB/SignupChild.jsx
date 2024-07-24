import React from "react";

export default function SignupChild() {
	return (
		<div className='Mobile pt-[40px] pb-[20px]'>
			<div className='flex justify-center text-[25px] text-[#208DF9] font-bold'>
				헬스메이트
			</div>
			<div className='flex flex-col mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col items-start'>
					<span className='text-[20px] font-semibold'>
						사용자 등록하기
					</span>
					<span className='text-[13px] mt-[25px] mb-[50px]'>
						※ 헬스메이트의 보호자 모니터링 서비스를
						이용하려면, 모니터링할 사용자(자녀)의 정보를
						입력해주세요. 입력된 정보는 보호자가 사용자의
						건강을 효율적으로 관리할 수 있도록 돕기 위해
						사용되며, 개인정보는 안전하게 보호됩니다.
					</span>
				</div>
				<form className='' action=''>
					<div className='flex flex-col items-start'>
						<label
							htmlFor='username'
							className='text-[13px]'
						>
							이름
						</label>
						<input
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='이름'
							type='text'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-[13px]'>성별</span>
						<ul
							className='flex flex flex-row items-start w-[50%]'
							name='gender'
						>
							<li>
								<input
									className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									key='남'
									value='남자'
									type='radio'
								/>
								<label>남자</label>
							</li>
							<li>
								<input
									className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									key=''
									value='여자'
									type='radio'
								/>
								<label htmlFor=''>여자</label>
							</li>
						</ul>
						<input
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='휴대전화번호'
							type='text'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>생년월일</label>
						<input
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							type='date'
						/>
					</div>
					<div className='flex flex-row items-start'>
						<div className='flex flex-col items-start'>
							<label className='text-[13px]'>키</label>
							<input
								className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mr-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								type='height'
							/>
						</div>
						<div className='flex flex-col items-start'>
							<label className='text-[13px]'>몸무게</label>
							<input
								className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] ml-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								type='text'
							/>
						</div>
					</div>
					<div className='flrx flex-row items-start'>
						<div className='flex flex-col items-start'>
							<span className='text-[13px]'>
								복용하는 약
							</span>
							<input
								className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								type='text'
							/>
						</div>
					</div>
					<div className='flex '>
						<button className='flex items-center justify-center w-full h-[45px] rounded-[10px] bg-[#208df9] text-white font-mediumm mt-[40px]'>
							다음
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
