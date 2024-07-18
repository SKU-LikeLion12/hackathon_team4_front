import React from "react";

export default function HealthCare() {
	const menus = [
		{
			id: 1,
			name: "약복용",
			content: "오늘 하루 복용한 약을 체크해주세요!",
			img: {},
			link: <></>,
		},
		{
			id: 2,
			name: "운동기록",
			img: {},
			link: <></>,
		},
	];

	const menu = menus.map((Menu) => {
		return (
			<>
				<button
					ket={Menu.id}
					className='HealthCareBox bg-[white] w-[300px] h-[350px] drop-shadow-md pt-[10px] pl-[50px]'
				>
					<div className='flex flex-col items-start'>
						<span className='text-[#208DF9]'>
							{Menu.name}
						</span>
						<span>{Menu.content}</span>
					</div>
					<img src='' alt='' />
				</button>
			</>
		);
	});

	return (
		<>
			<div className='grid grid-cols-2 gap-4 place-content-center bg-[#F5F5F5]'>
				{menu}
			</div>
		</>
	);
}
