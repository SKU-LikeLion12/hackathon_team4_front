import React, {useState, useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import MyProfile from "./ParentsProfile";
import BMIChart from "../Mypage/BMIChart";
import Exercise from "./Exercise";
import ParentsCheck from "./ParentsCheck";
import axios from "axios";

export default function ChildHealthCare() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [
		"img/banner1.png",
		"img/banner2.png",
		"img/banner3.png",
	];

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};
	const navigate = useNavigate();
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

	return (
		<div className='h-full'>
			<div className='w-full bg-[#208DF9] h-[250px] flex flex-col items-center justify-center text-white'>
				<span className='text-[25px] mb-[20px] font-bold text-center'>
					{users.name}님의 건강 정보를 <br />
					한눈에 볼 수 있어요!
				</span>
				<span>
					{users.name}님의 건강정보와 운동기록을
					확인해보세요!
				</span>
				<span className='underline underline-offset-1'>
					<NavLink to='/Login'>
						서비스 바로 이용하기
					</NavLink>
				</span>
			</div>
			<div className='pt-[40px] px-[60px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					{/* 왼쪽 */}
					<div className='grid grid-rows-2 pr-[100px]'>
						<div>
							<MyProfile />
						</div>
						<div>
							<BMIChart />
						</div>
					</div>
					{/* 오른쪽 */}
					<div className='grid grid-rows-2'>
						{/* 오른쪽 위: 운동 기록 */}
						<Exercise />
						{/* 오른쪽 아래 */}
						<div className='banner flex flex-col items-center bg-[white] py-[30px] px-[10px] rounded-[10px] overflow-hidden drop-shadow-md h-[294px]'></div>
					</div>
				</div>
				<div className='flex flex-col items-center px-[60px] py-[40px]'>
					<ParentsCheck />
				</div>
			</div>
		</div>
	);
}
