import React, {useState, useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import CheckedMedicine from "./../Medicine/CheckedMedicine";

export default function ChildMedicine() {
	const Ltoken = localStorage.getItem("token");

	const [users, setUsers] = useState({
		name: "",
	});

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/parents/child`,
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
	const navigate = useNavigate();
	return (
		<div className='h-full'>
			<div className='w-full bg-white h-[250px] flex flex-col items-center justify-center'>
				<span className='text-[25px] mb-[20px] font-bold text-center'>
					{users.name}님,
					<br />
					오늘 복용하실 약을 안내해드릴게요.
				</span>
				<span>
					복용하실 약 등록은 약 체크하기 페이지에서
					가능합니다.
				</span>
				<span className='underline underline-offset-1'>
					<NavLink to='/Login'>
						서비스 바로 이용하기
					</NavLink>
				</span>
			</div>
			<div className='flex justify-center'>
				<CheckedMedicine />
			</div>
		</div>
	);
}
