import React, {useState, useEffect} from "react";
import CheckedMedicine from "./CheckedMedicine";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Medicine() {
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
		// 사용자 이름 어떻게 연결 하지 ?
		<div className='bg-[#f0f7ff]'>
			<div className='flex justify-center'>
				{/* <div className='max-w-5xl py-10 mx-4 my-[50px] my-40 rounded-2xl bg-[#208df9] text-center'>
					<div className='mb-8 px-20 text-5xl text-white'>
						<div className='pb-3'>사자님,</div>
						<div className='pb-3'>
							오늘 먹을 약을 알려줄게요!
						</div>
						<div>다 먹은 약은 체크해주세요!</div>
					</div>
				</div> */}
				<div className='flex justify-center text-center py-[40px] px-[70px] mb-[40px] text-[25px] font-semibold bg-[#208DF9] text-[white] rounded-[20px] drop-shadow-xl my-[30px]'>
					{users.name}님 오늘 먹을 약을 알려드릴게요!
					<br />다 먹은 약은 체크해주세요!
				</div>
			</div>
			<div className='grid justify-items-center'>
				{/*가운데 정렬 필요-> 수정ok*/}
				<CheckedMedicine />
			</div>
		</div>
	);
}
