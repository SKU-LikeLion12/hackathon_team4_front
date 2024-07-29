import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import SignupChild from "./SignupChild";

export default function Signup_Info() {
	const navigate = useNavigate();
	const [userinputs, setInputs] = useState({
		id: "",
		pw: "",
		username: "",
		phone: "",
		email: "",
	});

	const handleChange = (e) => {
		setInputs({
			...userinputs,
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault(); // 폼의 기본 동작을 막음
		try {
			const response = await axios.post("", {
				id: "",
				pw: "",
				username: "",
				phone: "",
				email: "",
			});
			console.log("백엔드에 잘 보냄", response.data);
			// 백엔드에 잘 보내졌으면 실행되는 코드
			if (response.data.length > 0) {
				navigate(<SignupChild />); // 요청이 성공하면 페이지 이동
			}
		} catch (error) {
			console.error("오류", error);
			console.log("실패");
		}
	};

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
				<form onSubmit={handleSubmit} method='post'>
					{/* id/pw 정보확인 */}
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>아아디</label>
						<input
							name='id'
							value={userinputs.id}
							onChange={handleChange}
							className='input w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='아이디'
							type='text'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>비밀번호</label>
						<input
							name='pw'
							value={userinputs.pw}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='비밀번호'
							type='text'
						/>
					</div>
					{/* 이름/번호/보호자생년월일/email form post */}
					<div className='flex flex-col items-start'>
						<label htmlFor='' className='text-[13px]'>
							이름
						</label>
						<input
							name='username'
							value={userinputs.username}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='이름'
							type='text'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label htmlFor='' className='text-[13px]'>
							휴대전화번호
						</label>
						<input
							name='phone'
							value={userinputs.phone}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='휴대전화번호'
							type='text'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>이메일</label>
						<input
							name='email'
							value={userinputs.email}
							onChange={handleChange}
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
