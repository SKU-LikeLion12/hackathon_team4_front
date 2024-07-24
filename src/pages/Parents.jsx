import React, {useState} from "react";
import ChildHealthCare from "../component/Parents/ChildHealthCare";
import ChildMedicine from "../component/Parents/ChildMedicine";

export default function Parents() {
	const [activebtn, setActiveBtn] = useState("health");

	return (
		<div className='h-full bg-[#F0F0F0] pb-[60px]'>
			<div className='bg-[#208DF9] w-full h-[300px]'>
				<div>배너내용</div>
				<button className='w-[30px] h-[30px] rounded-[100px] bg-white font-extrabold'>
					<img src='' alt='' />
				</button>
			</div>
			<div className='flex items-center justify-center my-[40px] drop-shadow-md'>
				<button
					id='health'
					className={
						activebtn === "health"
							? "w-[135px] bg-[#208df9] text-white px-[25px] py-[10px]"
							: "w-[135px] bg-white px-[25px] py-[10px]"
					}
					onClick={() => setActiveBtn("health")}
				>
					건강관리
				</button>
				<button
					id='medicine'
					className={
						activebtn === "medicine"
							? "w-[135px] bg-[#208df9] text-white px-[25px] py-[10px]"
							: "w-[135px] bg-white px-[25px] py-[10px]"
					}
					onClick={() => setActiveBtn("medicine")}
				>
					약 복용 관리
				</button>
			</div>
			{activebtn === "health" && <ChildHealthCare />}
			{activebtn === "medicine" && <ChildMedicine />}
		</div>
	);
}
