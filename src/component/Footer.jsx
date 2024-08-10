import React from "react";

export default function Footer() {
	return (
		<>
			<div className='Noto flex flex-col items-center justify-cneter bg-white w-full h-full py-[20px] border-[#eee] border-t-[1px] text-[#838691]'>
				<div className='flex flex-col items-center text-[13px] mb-[10px]'>
					<span className='font-bold'>
						@ 2024 SKU LIKELION Team4 Id Fit.
					</span>
					<span className=''>All rights reserved.</span>
				</div>
				<div className='text-[13px] flex'>
					<span>
						<b className='text-[#208DF9]'>
							Planning / Design
						</b>
						&nbsp;기하은
					</span>
					&nbsp;&nbsp;
					<span>
						<b className='text-[#208DF9]'>Frontend</b>&nbsp;
						강지영, 노은아
					</span>
					&nbsp;&nbsp;
					<span>
						<b className='text-[#208DF9]'>Backend</b>&nbsp;
						권민욱, 박준범
					</span>
				</div>
			</div>
		</>
	);
}
