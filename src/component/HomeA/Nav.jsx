import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav() {
	return (
		<nav className='flex flex-row items-center justify-evenly'>
			<div className='text-[25px] text-[#208DF9] font-medium'>
				💪🏻 헬스메이트
			</div>
			<div className='flex flex-1 justify-between items-center ml-[20px]'>
				<div className='flex'>
					<NavLink
						to='#'
						className={({isActive}) =>
							`mx-[10px] ${
								isActive
									? "text-[black] hover:text-[#208DF9]"
									: "text-[#208DF9]"
							}`
						}
					>
						헬스메이트란?
					</NavLink>
					<NavLink
						to='#'
						className={({isActive}) =>
							`mx-[10px] ${
								isActive
									? "text-[black] hover:text-[#208DF9]"
									: "text-[#208DF9]"
							}`
						}
					>
						서비스
					</NavLink>
				</div>
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
