import React, {useState, useEffect} from "react";
import LowerBody from "./LowerBody";
import UpperBody from "./UpperBody";
import Muscle from "./Muscle";
import axios from "axios";

const FitHealth = () => {
	const [activebtn, setActiveBtn] = useState("1");
	const Ltoken = localStorage.getItem("token");

	const [users, setUsers] = useState({
		name: "",
	});

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/child/uniqueKey`,
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);
			if (response.status === 200) {
				// 데이터 상태 업데이트
				setUsers(response.data);
				console.log("data get: ", response);
			} else {
				console.error(
					"조건이 충족되지 않음",
					response.data
				);
			}
		} catch (error) {
			console.error("오류", error);
			console.log("실패");
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='h-full flex flex-col items-center bg-[white] py-[80px]'>
			<div className='flex justify-center py-[40px] px-[20px] mb-[40px] text-[25px] font-semibold bg-[white] text-white rounded-[20px] drop-shadow-xl'>
				{users.name}님을 위한 맞춤형 운동을 추천해드릴게요!
			</div>
			<div className='flex items-center justify-center py-[40px] font-bold text-[18px] drop-shadow-md'>
				<div className='px-[60px]'>
					<button
						id='1'
						className={
							activebtn === "1"
								? "w-[170px] bg-[#FDCF61] text-white px-[10px] py-[10px] rounded-[10px] flex items-center justify-center"
								: "w-[170px] bg-[#BFBFBF] px-[10px] py-[10px] rounded-[10px] text-white flex items-center justify-center"
						}
						onClick={() => setActiveBtn("1")}
					>
						<div>중요근육</div>
						<img
							className='w-[25px] ml-[5px]'
							src='img/exercise1.png'
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
								? "w-[170px] bg-[#FF90A8] text-white px-[10px] py-[10px] rounded-[10px] flex items-center justify-center"
								: "w-[170px] bg-[#BFBFBF] px-[10px] py-[10px] rounded-[10px] text-white flex items-center justify-center"
						}
						onClick={() => setActiveBtn("3")}
					>
						<div>하체</div>
						<img
							className='w-[25px] ml-[5px]'
							src='img/leg.png'
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
