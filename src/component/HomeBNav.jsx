import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav() {
	return (
		<nav className='flex flex-row items-center justify-between py-[20px] px-[80px] overflow-hidden border-b-[1px] border-[#E8E8E8]'>
			<div className='title text-[30px] text-[#208DF9] font-medium'>
				💪🏻 헬스메이트
			</div>
			<div className='flex flex-1 justify-between items-center ml-[20px]'>
				<div className='flex'>
					<NavLink
						to='#'
						className={({isActive}) =>
							`mx-[40px] text-[18px] ${
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
							`mx-[40px] text-[18px] ${
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
						className='bg-transparent border-[#208DF9] border-[1px] rounded-[10px] text-[#208DF9] font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[5px]'
					>
						회원가입
					</NavLink>
					<NavLink
						to='/Login'
						className='bg-[#208DF9] border-[#208DF9] border-[1px] rounded-[10px] text-white font-medium hover:bg-[#57A9FB] hover:text-[white] hover:border-[#57A9FB] px-[18px] py-[8px] ml-[12px]'
					>
						로그인
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
