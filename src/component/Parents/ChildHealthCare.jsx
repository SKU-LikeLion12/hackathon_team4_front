import React, {useState, useEffect} from "react";
import MyProfile from "../Mypage/MyProfile";
import BMIChart from "../Mypage/BMIChart";
import Exercise from "./Exercise";
import Banner from "./Banner";
import ParentsCheck from "./ParentsCheck";
import axios from "axios";

export default function ChildHealthCare() {
	const [userData, setUserData] = useState({
		name: "노은아",
		gender: "",
		age: "",
		id: 0,
		bmi: 33,
	});
	const {bmi} = userData;

	// 데이터 로드를 위한 useEffect
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8080/parents/add"
				);

				if (response.status === 200) {
					setUserData(response.data);
				}
			} catch (error) {
				console.error("오류", error);
				console.log("실패");
			}
		};

		fetchData();
	}, []);

	return (
		<div className='h-full'>
			<div className='w-full bg-[#208DF9] h-[250px] flex flex-col items-center justify-center text-white'>
				<span className='text-[25px] mb-[20px] font-bold'>
					사자님의 건강 정보를 <br />
					한눈에 볼 수 있어요!
				</span>
				<span>
					사자님의 개인정보는 마이페이지에서 수정
					가능합니다.
				</span>
				<span className='underline underline-offset-1'>
					마이페이지 바로가기
				</span>
			</div>
			<div className='pt-[40px] px-[60px]'>
				<div className='grid grid-cols-2 px-[60px]'>
					{/* 왼쪽 */}
					<div className='grid grid-rows-2 pr-[100px]'>
						<div>
							<MyProfile userData={userData} />
						</div>
						<div>
							<BMIChart bmi={bmi} />
						</div>
					</div>
					{/* 오른쪽 */}
					<div className='grid grid-rows-2'>
						{/* 오른쪽 위: 운동 기록 */}
						<Exercise />
						{/* 오른쪽 아래 */}
						<div className='flex flex-col items-center bg-[white] py-[30px] px-[10px] rounded-[10px] overflow-hidden drop-shadow-md h-[240px]'>
							<Banner />
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center px-[60px] py-[40px]'>
					<ParentsCheck />
				</div>
			</div>
		</div>
	);
}
