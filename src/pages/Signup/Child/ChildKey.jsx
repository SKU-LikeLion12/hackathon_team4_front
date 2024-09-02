import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {FaRegCopy} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export default function SignupKey() {
	const navigation = useNavigate();
	const LuniqueKey = localStorage.getItem("uniqueKey");

	console.log("유니크키 존재 유무 확인: ", LuniqueKey);
	return (
		<div className='Mobile pt-[40px] pb-[20px]'>
			<div className='title flex justify-center text-[30px] text-[#208DF9] font-bold'>
				Id FiT
			</div>
			<div className='flex flex-col items-center mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col'>
					<span className='text-center text-[20px] font-bold leading-[40px]'>
						<b className='text-[#208DF9]'>Id FiT</b>과
						함께하는 건강 동반자, <br />
						님의 고유키는 <br />
						<div className='flex justify-center bg-[#FF8540] border-[2px] border-[#FF8540] rounded-[20px] px-[20px] py-[3px] text-[white] my-[8px] font-bold'>
							<p>고유키 : {LuniqueKey}</p>
							<CopyToClipboard
								text={LuniqueKey}
								onCopy={() =>
									alert("고유키가 복사되었습니다.")
								}
							>
								<button className='ml-[5px]'>
									<FaRegCopy />
								</button>
							</CopyToClipboard>
						</div>
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
					onClick={() => navigation("/Parents")}
					className='w-[80%] bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
				>
					보호자 페이지로 이동
				</button>
			</div>
		</div>
	);
}
