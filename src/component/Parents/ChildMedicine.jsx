import React from "react";

export default function ChildMedicine() {
	return (
		<div className='h-full'>
			<div className='w-full bg-white h-[250px] flex flex-col items-center justify-center'>
				<span className='text-[25px] mb-[20px] font-bold text-center'>
					사자님,
					<br />
					오늘 복용하실 약을 안내해드릴게요.
				</span>
				<span>
					복용하실 약의 정보 수정은 마이페이서 가능합니다.
				</span>
				<span className='udnerline'>
					마이페이지 바로가기
				</span>
			</div>
		</div>
	);
}
