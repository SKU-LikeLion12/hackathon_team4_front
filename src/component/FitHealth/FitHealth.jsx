import React, {useState} from "react";
import LowerBody from "./LowerBody";
import UpperBody from "./UpperBody";
import Muscle from "./Muscle";

const FitHealth = () => {
	const [activebtn, setActiveBtn] = useState("1");
	return (
		<div className='h-full bg-[#F0F7FF]'>
			<div className='flex justify-center pt-[80px] pb-[40px] text-[25px] font-semibold'>
				사자님을 위한 맞춤형 운동을 추천해드릴게요!
			</div>
			<div className='flex items-center justify-center py-[40px] font-bold text-[18px] drop-shadow-xl'>
				<div className='px-[60px]'>
					<button
						id='1'
						className={
							activebtn === "1"
								? "w-[170px] bg-[#FF8540] text-white px-[10px] py-[10px] rounded-[10px] flex items-center justify-center"
								: "w-[170px] bg-[#BFBFBF] px-[10px] py-[10px] rounded-[10px] text-white flex items-center justify-center"
						}
						onClick={() => setActiveBtn("1")}
					>
						<div>중요근육</div>
						<img
							className='w-[25px] ml-[5px]'
							src='img/logo.png'
							alt=''
						/>
					</button>
				</div>
				<div className='px-[60px]'>
					<button
						id='2'
						className={
							activebtn === "2"
								? "w-[170px] bg-[#3B9FFC] text-white px-[10px] py-[10px] rounded-[10px] flex items-center justify-center"
								: "w-[170px] bg-[#BFBFBF] px-[10px] py-[10px] rounded-[10px] text-white flex items-center justify-center"
						}
						onClick={() => setActiveBtn("2")}
					>
						<div>상체</div>
						<img
							className='w-[25px] ml-[5px]'
							src='img/logo.png'
							alt=''
						/>
					</button>
				</div>
				<div className='px-[60px]'>
					<button
						id='3'
						className={
							activebtn === "3"
								? "w-[170px] bg-[#3F72C1] text-white px-[10px] py-[10px] rounded-[10px] flex items-center justify-center"
								: "w-[170px] bg-[#BFBFBF] px-[10px] py-[10px] rounded-[10px] text-white flex items-center justify-center"
						}
						onClick={() => setActiveBtn("3")}
					>
						<div>하체</div>
						<img
							className='w-[25px] ml-[5px]'
							src='img/logo.png'
							alt=''
						/>
					</button>
				</div>
			</div>
			{activebtn === "1" && <Muscle />}
			{activebtn === "2" && <UpperBody />}
			{activebtn === "3" && <LowerBody />}
		</div>
	);
};

export default FitHealth;
