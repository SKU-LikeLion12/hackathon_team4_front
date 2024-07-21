import React from "react";
import {useCookies} from "react-cookie";
import {NavLink} from "react-router-dom";

export default function Nav() {
	const [cookies] = useCookies(["token"]);
	const navs = [
		{
			id: 1,
			navname: "건강관리",
			src: "/HealthCare",
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
			id: 4,
			navname: "마이페이지",
			src: "<>",
		},
		{
			id: 5,
			navname: "About",
			src: "<>",
		},
	];

	return (
		<nav className='flex flex-row items-center justify-between bg-white border-b-[1px] border-[#DEDEDE] py-[20px] px-[40px]'>
			<NavLink
				to='/'
				className='title text-[30px] text-[#208DF9] font-medium'
			>
				Id FiT
			</NavLink>
			<div className='flex flex-1 justify-between items-center ml-[20px]'>
				<div className='flex'>
					{navs.map((n) => (
						<NavLink
							key={n.id}
							to={n.src}
							className={({isActive}) =>
								`mx-[40px] text-[18px] font-medium ${
									isActive
										? "text-[#208DF9]"
										: "text-[black] hover:text-[#208DF9]"
								}`
							}
						>
							{n.navname}
						</NavLink>
					))}
				</div>
				<div>
					{cookies.token ? (
						<div>
							<button
								to='/'
								className='bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
							>
								모니터링
							</button>
							<button
								to='/'
								className='bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
							>
								로그아웃
							</button>
						</div>
					) : (
						<div>
							<button
								to='/'
								className='bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
							>
								모니터링
							</button>
							<button
								to='/'
								className='bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
							>
								로그아웃
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
