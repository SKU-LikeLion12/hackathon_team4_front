import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";

export default function Login() {
	const navigate = useNavigate();
	const [, setCookies] = useCookies(["token"]);
	const [logininputs, setLogInputs] = useState({
		id: "",
		pw: "",
		uniqueKey: "",
	});

	const {id, pw, uniqueKey} = logininputs;

	const handleChange = (e) => {
		setLogInputs({
			...logininputs,
			[e.target.name]: e.target.value,
		});
	};

	const loginParents = async (e) => {
		e.preventDefault(); // 폼의 기본 동작을 막음
		if (!id || !pw) {
			alert("아이디와 비밀번호를 입력해주세요.");
			return;
		}
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/parents/login`,
				{
					userId: id,
					password: pw,
				}
			);
			console.log("백엔드 응답: ", response);
			if (response.status === 200 && response.data) {
				localStorage.setItem("token", response.data);
				navigate("/Parents");
			} else {
				alert(
					"로그인 실패: " +
						(response.data.message || "토큰이 없습니다.")
				);
			}
		} catch (error) {
			console.error("오류: ", error);
			alert(
				"로그인 실패: " +
					(error.response
						? error.response.data.message
						: error.message)
			);
		}
	};

	const loginChild = async (e) => {
		e.preventDefault(); // 폼의 기본 동작을 막음
		if (!uniqueKey) {
			alert("고유키를 입력해주세요.");
			return;
		}
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/child/login`,
				{
					uniqueKey,
				}
			);
			console.log("백엔드 응답: ", response);
			if (response.status === 200 && response.data) {
				setCookies("token", response.data, {
					path: "/",
					sameSite: "None",
					secure: true,
					domain: process.env.REACT_APP_COOKIE_DOMAIN,
				});
				localStorage.setItem("token", response.data);
				navigate("/");
			} else {
				alert(
					"로그인 실패: " +
						(response.data.message || "토큰이 없습니다.")
				);
			}
		} catch (error) {
			console.error("오류: ", error);
			alert(
				"로그인 실패: " +
					(error.response
						? error.response.data.message
						: error.message)
			);
		}
	};

	useEffect(() => {
		console.log("logininputs: ", logininputs);
	}, [logininputs]);

	const [activeForm, setActiveForm] = useState("guardian");
	return (
		<div className='Mobile flex flex-col items-center bg-[#F0F7FF] pt-[40px] pb-[20px]'>
			<div className='title flex justify-center text-[30px] text-[#208DF9] font-bold'>
				Id FiT
			</div>
			<div className='flex flex-col mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col items-start'>
					<span className='text-[20px] font-bold'>
						로그인
					</span>
					<span className='text-[15px] mt-[25px] mb-[50px]'>
						※<b className='text-[#208DF9]'>보호자 로그인</b>
						은 모니터링을 할 수 있는 계정이며&nbsp;
						<b className='text-[#208DF9]'>고유키 로그인</b>
						은 운동추천 및 건강관리 서비스를 이용하실 수
						있습니다.
					</span>
				</div>
			</div>
			<div className='flex flex-col itmes-center justify-center bg-white rounded-[10px] pt-[30px] pb-[50px] px-[20px] drop-shadow w-[80%]'>
				<div className='flex justify-evenly itmes-center bg-[#F5F7F9] rounded-[10px] mb-[40px] mx-[22px]'>
					<button
						className={
							activeForm === "guardian"
								? "w-full bg-[#208df9] rounded-[10px] text-white px-[25px] py-[8px]"
								: "w-full px-[12px] py-[8px]"
						}
						onClick={() => setActiveForm("guardian")}
					>
						보호자 로그인
					</button>
					<button
						className={
							activeForm === "uniqueKey"
								? "w-full bg-[#208df9] rounded-[10px] text-white px-[25px] py-[8px]"
								: "w-full px-[12px] py-[8px]"
						}
						onClick={() => setActiveForm("uniqueKey")}
					>
						고유키 로그인
					</button>
				</div>
				{activeForm === "guardian" && (
					<form onSubmit={loginParents} method='post'>
						{/* 보호자(모니터링) 로그인 */}
						<div className='flex flex-col items-center'>
							<input
								name='id'
								className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] px-[16px] py-[5px]'
								placeholder='아이디'
								type='text'
								value={logininputs.id}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='flex flex-col items-center'>
							<input
								name='pw'
								className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								placeholder='비밀번호'
								type='password'
								value={logininputs.pw}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='flex flex-col items-center'>
							<button
								className='flex items-center justify-center w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'
								type='submit'
							>
								로그인
							</button>
						</div>
					</form>
				)}
				{activeForm === "uniqueKey" && (
					<form onSubmit={loginChild} method='post'>
						{/* 고유키 로그인 */}
						<div className='flex flex-col items-center'>
							<input
								name='uniqueKey'
								className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								placeholder='고유키'
								type='text'
								value={logininputs.uniqueKey}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='flex flex-col items-center'>
							<button
								className='flex items-center justify-center w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'
								type='submit'
							>
								로그인
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}
