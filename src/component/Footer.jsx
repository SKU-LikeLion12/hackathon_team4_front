import React from "react";

export default function Footer() {
	return (
		<>
			<div className='flex flex-col items-center justify-cneter bg-white w-full h-full py-[30px] border-[#eee] border-t-[1px]'>
				<div className='text-[20px] mb-[6px] font-bold'>
					Hackathon_team4_IDFIT
				</div>
				<div className='flex items-center justify-cneter'>
					<span>
						<b className='text-[#208DF9]'>
							Planning / Design
						</b>
						기하은
					</span>
					<span>
						<b className='text-[#208DF9]'>Frontend</b> _
						강지영, 노은아
					</span>
					<span>
						<b className='text-[#208DF9]'>Backend</b> _
						권민욱, 박준범
					</span>
				</div>
			</div>
		</>
	);
}
