import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {FaRegCopy} from "react-icons/fa";

export default function SignupKey() {
	return (
		<div className='Mobile pt-[40px] pb-[20px]'>
			<div className='flex justify-center text-[25px] text-[#208DF9] font-bold'>
				ID FIT
			</div>
			<div className='flex flex-col items-center mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col'>
					<span className='text-center text-[20px] font-bold leading-[40px]'>
						<b className='text-[#208DF9]'>ID FIT</b>과
						함께하는 건강 동반자, <br />
						username님의 고유키는 <br />
						<div className='flex border-[1px] border-[#FF8540] rounded-[20px] px-[20px] py-[3px] text-[#FF8540] my-[8px] font-medium'>
							<p>고유키 : {}</p>
							<CopyToClipboard
								text='djflkjslf'
								onCopy={() =>
									alert("고유키가 복사되었습니다.")
								}
							>
								<button className='ml-[5px]'>
									<FaRegCopy />
								</button>
							</CopyToClipboard>
						</div>{" "}
						입니다 !
						<br />
					</span>
				</div>
				<div className='mt-[50px] mb-[60px]'>
					<img
						className='w-[280px]'
						src='img/mainpage.png'
						alt=''
					/>
				</div>
				<button
					to='/'
					className='w-[80%] bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
				>
					보호자 페이지로 이동
				</button>
			</div>
		</div>
	);
}
