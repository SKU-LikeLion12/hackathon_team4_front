import React, {useState} from "react";
import ChildHealthCare from "./ChildHealthCare";
import ChildMedicine from "./ChildMedicine";
import {useNavigate} from "react-router-dom";

export default function Parents() {
	const [activebtn, setActiveBtn] = useState("health");
	const navigate = useNavigate();
	return (
		<div className='h-full bg-[#F0F0F0] pb-[60px]'>
			<div className='flex items-center justify-center py-[40px] drop-shadow-md'>
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
