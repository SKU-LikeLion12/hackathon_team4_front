import React from "react";
import {useCookies} from "react-cookie";
import {NavLink, useNavigate} from "react-router-dom";

export default function Navbar({
	isChildLoggedIn,
	isParentLoggedIn,
	handleLogout,
}) {
	const navigate = useNavigate();
	const [cookies] = useCookies(["jwtToken"]);

	const handleNavClick = (path) => {
		// if (!isChildLoggedIn && !isParentLoggedIn) {
		// 	navigate("/Login");
		// } else {
		// 	navigate(path);
		// }
		if (cookies.jwtToken) {
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
					<div
						onClick={() => handleNavClick("/Medicine")}
						className='text-black text-[17px] font-semibold hover:text-[#208DF9] focus:text-[#208DF9] mx-[20px] cursor-pointer'
					>
						약 체크하기
					</div>
					<div
						onClick={() => handleNavClick("/FitHealth")}
						className='text-black text-[17px] font-semibold hover:text-[#208DF9] focus:text-[#208DF9] mx-[20px] cursor-pointer'
					>
						맞춤운동
					</div>
					<div
						onClick={() => handleNavClick("/OneDayCheck")}
						className='text-black text-[17px] font-semibold hover:text-[#208DF9] focus:text-[#208DF9] mx-[20px] cursor-pointer'
					>
						하루건강
					</div>
					<div
						onClick={() => handleNavClick("/Mypage")}
						className='text-black text-[17px] font-semibold hover:text-[#208DF9] focus:text-[#208DF9] mx-[20px] cursor-pointer'
					>
						마이페이지
					</div>
					<NavLink
						to='/'
						className='text-black text-[17px] font-semibold hover:text-[#208DF9] focus:text-[#208DF9] mx-[20px]'
					>
						About
					</NavLink>
				</div>
				<div>
					{isParentLoggedIn ? (
						<button
							onClick={handleLogout}
							className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[25px] text-white hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] font-semibold px-[18px] py-[8px] ml-[5px]'
						>
							로그아웃
						</button>
					) : isChildLoggedIn ? (
						<div className='flex items-center'>
							<div
								onClick={() => handleNavClick("/Parents")}
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
