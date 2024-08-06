import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

export default function Navbar({handleLogout}) {
	const navigate = useNavigate();
	const Ltoken = localStorage.getItem("token");
	const LuniqueKey = localStorage.getItem("uniqueKey");

	const handleNavClick = (path) => {
		// 로그인 여부를 체크하고 로그인 상태가 아니면 로그인 페이지로 리다이렉트
		if (!Ltoken && !LuniqueKey) {
			navigate("/Login");
		} else {
			navigate(path);
		}
	};

	return (
		<nav className='flex flex-row items-center justify-between bg-white border-b-[1px] border-[#DEDEDE] py-[15px] px-[40px]'>
			<div
				onClick={() => navigate("/")}
				className='title text-[30px] text-[#208DF9] font-medium cursor-pointer'
			>
				Id FiT
			</div>
			<div className='flex flex-1 justify-between items-center ml-[20px]'>
				<div className='flex'>
					<NavLink
						to='/'
						className='text-black text-[18px] font-medium hover:text-[#208DF9] focus:text-[#208DF9] mx-[30px]'
					>
						About
					</NavLink>
					<div
						onClick={() => handleNavClick("/Medicine")}
						className='text-black text-[18px] font-medium hover:text-[#208DF9] focus:text-[#208DF9] mx-[30px] cursor-pointer'
					>
						약 체크하기
					</div>
					<div
						onClick={() => handleNavClick("/FitHealth")}
						className='text-black text-[18px] font-medium hover:text-[#208DF9] focus:text-[#208DF9] mx-[30px] cursor-pointer'
					>
						맞춤운동
					</div>
					<div
						onClick={() => handleNavClick("/OneDayCheck")}
						className='text-black text-[18px] font-medium hover:text-[#208DF9] focus:text-[#208DF9] mx-[30px] cursor-pointer'
					>
						하루건강
					</div>
				</div>
				<div>
					{Ltoken && Ltoken.length > 0 ? (
						<button
							onClick={handleLogout}
							className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[25px] text-white hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
						>
							로그아웃
						</button>
					) : LuniqueKey && LuniqueKey.length > 0 ? (
						<div className='flex items-center'>
							<div
								onClick={() => navigate("/Parents")}
								className='bg-transparent border-[#208DF9] border-[1px] rounded-[25px] text-[#208DF9] hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px] cursor-pointer'
							>
								모니터링
							</div>
							<button
								onClick={handleLogout}
								className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[25px] text-white hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
							>
								로그아웃
							</button>
						</div>
					) : (
						<>
							<NavLink
								to='/SignupAgree'
								className='bg-transparent border-[#208DF9] border-[1px] rounded-[25px] text-[#208DF9] hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
							>
								회원가입
							</NavLink>
							<NavLink
								to='/Login'
								className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[25px] text-white hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
							>
								로그인
							</NavLink>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
