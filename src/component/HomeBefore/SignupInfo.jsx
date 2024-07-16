import React from "react";

export default function Signup_Info() {
	return (
		<div className='Mobile pt-[40px] pb-[20px]'>
			<div className='flex justify-center text-[25px] text-[#208DF9] font-bold'>
				헬스메이트
			</div>
			<div className='flex flex-col mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col items-start'>
					<span className='text-[20px] font-bold'>
						회원가입
					</span>
					<span className='text-[13px] mt-[25px] mb-[50px]'>
						※ 보호자 본인의 이름과 휴대전화번호 및 이메일을
						모두 정확하게 입력해 주세요.
					</span>
				</div>
				<form className='' action=''>
					{/* 회원가입 정보 등록 form post */}
					<div className='flex flex-col items-start'>
						<span className='text-[13px]'>이름</span>
						<input
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='이름'
							type='text'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-[13px]'>
							휴대전화번호
						</span>
						<input
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='휴대전화번호'
							type='text'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<span className='text-[13px]'>이메일</span>
						<input
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='이메일'
							type='text'
						/>
					</div>
					<div className=''>
						<button
							to='/SignupChild'
							className='flex items-center justify-center w-full h-[45px] rounded-[10px] bg-[#208df9] text-white font-mediumm mt-[40px]'
						>
							다음
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
