import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav() {
	const navs = [
		{
			id: 1,
			navname: "건강관리",
			src: "<>",
		},
		{
			id: 2,
			navname: "맞춤운동",
			src: "<>",
		},
		{
			id: 3,
			navname: "하루건강",
			src: "<>",
		},
		{
			id: 1,
			navname: "마이페이지",
			src: "<>",
		},
	];
	const nav = navs.map((Nav) => {
		return (
			<NavLink
				key={Nav.id}
				to={Nav.src}
				className={({isActive}) =>
					`mx-[10px] ${
						isActive
							? "text-[#208DF9]"
							: "text-[black] hover:text-[#208DF9]"
					}`
				}
			>
				{Nav.navname}
			</NavLink>
		);
	});

	return (
		<nav className='flex flex-row items-center justify-evenly'>
			<div className='title text-[30px] text-[#208DF9] font-medium'>
				💪🏻 헬스메이트
			</div>
			<div className='flex flex-1 justify-between items-center ml-[20px]'>
				<div className='flex'>{nav}</div>
				<div>
					<NavLink
						to='/Signup'
						className='bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[15px] py-[5px] ml-[5px]'
					>
						회원가입
					</NavLink>
					<NavLink
						to='/Login'
						className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[10px] text-white font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[15px] py-[5px] ml-[12px]'
					>
						로그인
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
