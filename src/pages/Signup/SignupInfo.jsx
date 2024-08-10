import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";

export default function Signup_Info() {
	const navigate = useNavigate();
	const [, setCookies] = useCookies(["token"]);

	const [userinputs, setInputs] = useState({
		user_id: "",
		password: "",
		nickname: "",
		phone_number: "",
		email: "",
	});

	const handleChange = (e) => {
		console.log(e.target.value);
		const {name, value} = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault(); // 폼의 기본 동작을 막음
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/parents/add`,
				// {
				// 	header: {
				// 		Authorization: `Bearer ${cookies.token}`,
				// 	},
				// },
				userinputs // 상태값을 요청 본문에 포함
			);
			console.log("백엔드에 잘 보냄", response);
			if (response.status === 200) {
				console.log(
					"조건이 충족되어 ChildInfo로 이동합니다."
				); // 상태가 성공적으로 업데이트 되었는지 확인

				localStorage.setItem("token", response.data); //연결하면 response.data.token로
				navigate("/ChildInfo");
			} else {
				console.error(
					"조건이 충족되지 않음",
					response.data
				);
			}
		} catch (error) {
			console.log(error);
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
				<form onSubmit={onSubmit}>
					{/* id/pw 정보확인 */}
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>아이디</label>
						<input
							name='user_id'
							value={userinputs.user_id}
							onChange={handleChange}
							className='input w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='아이디'
							type='text'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>비밀번호</label>
						<input
							name='password'
							value={userinputs.password}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='비밀번호'
							type='password'
							required
						/>
					</div>
					{/* 이름/번호/보호자생년월일/email form post */}
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>이름</label>
						<input
							name='nickname'
							value={userinputs.nickname}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='이름'
							type='text'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>
							휴대전화번호
						</label>
						<input
							name='phone_number'
							value={userinputs.phone_number}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='휴대전화번호'
							type='text'
							required
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
							type='email'
							required
						/>
					</div>
					<div className=''>
						<button className='flex items-center justify-center w-full h-[45px] rounded-[10px] bg-[#208df9] text-white font-mediumm mt-[40px]'>
							다음
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
