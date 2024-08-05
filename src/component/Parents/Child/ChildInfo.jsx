import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";

export default function SignupChild() {
	const navigate = useNavigate();
	const [cookies, setCookies] = useCookies(["token"]);
	const [childinputs, setInputs] = useState({
		name: "",
		gender: "",
		birthDate: "",
		height: "",
		weight: "",
	});

	const handleChange = (e) => {
		console.log(e.target.value);
		const {name, value} = e.target;
		setInputs({
			...childinputs,
			[name]: value,
		});
		console.log(e.target.value);
	};

	const loginSubmit = async (e) => {
		e.preventDefault(); // 폼의 기본 동작을 막음
		try {
			const response = await axios.post(
				"http://localhost:8080/child/add",
				// {
				// 	name: "",
				// 	gender: "",
				// 	birthDate: "",
				// 	height: "",
				// 	weight: "",
				// },
				// {
				// 	header: {
				// 		Authorization: `Bearer ${cookies.token}`,
				// 	},
				// }
				childinputs // 상태값을 요청  본문에 포함
			);
			console.log("백엔드에 잘 보냄", response.data);
			if (response.status === 200) {
				setCookies("token", response.data.token, {
					path: "/",
					sameSite: "None",
					secure: true,
					domain: process.env.REACT_APP_COOKIE_DOMAIN,
				});
				navigate("/ChildKey");
			} else {
				console.error(
					"조건이 충족되지 않음",
					response.data
				);
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
				<form onSubmit={loginSubmit}>
					<div className='flex flex-col items-start'>
						<label
							htmlFor='username'
							className='text-[13px]'
						>
							이름
						</label>
						<input
							name='name'
							value={childinputs.name}
							onChange={handleChange}
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
									name='gender'
									value={childinputs.gender}
									onChange={handleChange}
									className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									key='남'
									type='radio'
								/>
								<label>남자</label>
							</li>
							<li>
								<input
									name='gender'
									value={childinputs.gender}
									onChange={handleChange}
									className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
									key=''
									type='radio'
								/>
								<label htmlFor=''>여자</label>
							</li>
						</ul>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>생년월일</label>
						<input
							name='birthDate'
							value={childinputs.birthDate}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							type='date'
						/>
					</div>
					<div className='flex flex-row items-start'>
						<div className='flex flex-col items-start'>
							<label className='text-[13px]'>키</label>
							<input
								name='height'
								value={childinputs.height}
								onChange={handleChange}
								className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mr-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								type='height'
							/>
						</div>
						<div className='flex flex-col items-start'>
							<label className='text-[13px]'>몸무게</label>
							<input
								name='weight'
								value={childinputs.weight}
								onChange={handleChange}
								className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] ml-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								type='text'
							/>
						</div>
					</div>
					{/* <div className='flrx flex-row items-start'>
						<div className='flex flex-col items-start'>
							<span className='text-[13px]'>
								복용하는 약
							</span>
							<input
								value={childinputs.weight}
								onChange={handleChange}
								className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								type='text'
							/>
						</div>
					</div> */}
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
