import React from "react";
import CheckedMedicine from "./CheckedMedicine";
import {Link} from "react-router-dom";

export default function Medicine() {
	return (
		// 사용자 이름 어떻게 연결 하지 ?
		<div className='bg-[#f0f7ff]'>
			<div className='flex justify-center'>
				<div className='max-w-5xl py-10 mx-4 my-[50px] my-40 rounded-2xl bg-[#208df9] text-center'>
					<div className='mb-8 px-20 text-5xl text-white'>
						<div className='pb-3'>사자님,</div>
						<div className='pb-3'>
							오늘 먹을 약을 알려줄게요!
						</div>
						<div>다 먹은 약은 체크해주세요!</div>
					</div>
				</div>
			</div>
			<div className='grid justify-items-center'>
				{/*가운데 정렬 필요-> 수정ok*/}
				<CheckedMedicine />
			</div>
		</div>
	);
}
