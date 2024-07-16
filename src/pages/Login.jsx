import React, {useState} from "react";

export default function Login() {
	const [logininputs, setLogInputs] = useState({
		id: "",
		pw: "",
		key: "",
	});

	const handleChange = (e) => {
		setLogInputs({
			...logininputs,
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("로그인이 완료되었습니다!");
	};
	const [activeForm, setActiveForm] = useState("guardian");
	return (
		<div className='Mobile flex flex-col items-center bg-[#F0F7FF] pt-[40px] pb-[20px]'>
			<div className='flex justify-center text-[25px] text-[#208DF9] font-bold'>
				헬스메이트
			</div>
			<div className='flex flex-col mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col items-start'>
					<span className='text-[20px] font-bold'>
						로그인
					</span>
					<span className='text-[15px] mt-[25px] mb-[50px]'>
						※<b className='text-[#208DF9]'>보호자 로그인</b>
						은 모니터링을 할 수 있는 계정이며
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
					<form onSubmit={handleSubmit} method='post'>
						{/* 보호자(모니터링) 로그인 */}
						<div className='flex flex-col items-center'>
							<input
								name='id'
								className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] px-[16px] py-[5px]'
								placeholder='아이디'
								type='text'
								value={logininputs.id}
								onChange={handleChange}
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
							/>
						</div>
						<div className='flex flex-col items-center'>
							<button
								to='/HomeA'
								className='flex items-center justify-center w-[90%] h-[40px] rounded-[10px] bg-[#208df9] text-white font-medium'
								type='submit'
							>
								로그인
							</button>
						</div>
					</form>
				)}
				{activeForm === "uniqueKey" && (
					<form onSubmit={handleSubmit} method='post'>
						{/* 고유키 로그인 */}
						<div className='flex flex-col items-center'>
							<input
								name='key'
								className='w-[90%] bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
								placeholder='고유키'
								type='text'
								value={logininputs.key}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col items-center'>
							<button
								to='/HomeA'
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
