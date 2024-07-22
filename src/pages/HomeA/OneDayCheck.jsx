import React from "react";
import OneDay from "./OneDay";

const dates = [
	{
		count: "1",
		img: "img/sleep.png",
		qs: "충분한 수면을 취했나요?",
	},

	{
		count: "2",
		img: "img/sick.png",
		qs: "특별하게 아픈 곳은 없었나요?",
	},

	{
		count: "3",
		img: "img/exercise1.png",
		qs: "활동적으로 움직였나요?",
	},
	{
		count: "4",
		img: "img/exercise2.png",
		qs: " 질문미정",
	},
];

function OneDayCheck() {
	return (
		<div className='bg-[#f0f7ff] py-[60px]'>
			<div className='text flex items-center justify-center'>
				<div className='text-5xl font-extrabold'>
					<p>사자님의 건강상태를</p>
					<br />
					<p>체크해보아요!</p>
				</div>
				<div className='ml-0'>
					<img
						className='w-30 h-30'
						src='img\medicine2.png'
						alt='약'
					></img>
				</div>
			</div>
			<div className='OneDayCheckBox'>
				{dates.map((date) => {
					return (
						<OneDay
							count={date.count}
							count2={date.count2}
							img={date.img}
							qs={date.qs}
							className='w-[100px]'
						/>
					);
				})}
			</div>
		</div>
	);
}

export default OneDayCheck;
