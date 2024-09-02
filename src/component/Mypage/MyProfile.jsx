import React, {useState, useEffect} from "react";
import axios from "axios";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {FaRegCopy} from "react-icons/fa";

const MyProfile = () => {
	const Ltoken = localStorage.getItem("token");
	const [child, setChild] = useState({
		name: "",
		gender: "",
		age: "",
		height: "",
		weight: "",
		uniqueKey: "",
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
				setChild(response.data);
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
		<div className='flex flex-col items-center bg-[white] h-[360px] pt-[30px] pb-[10px] px-[30px] rounded-[10px] overflow-hidden drop-shadow-md mb-[20px]'>
			<img
				className='w-[100px]'
				src={
					child.gender === "female"
						? "img/Woman2.png"
						: "img/Man2.png"
				}
				alt={child.gender === "female" ? "Woman" : "Man"}
			/>
			<div className='flex flex-col items-center my-[20px]'>
				<div className='text-[22px] font-bold pb-[5px]'>
					{child.name}
				</div>
				<div className='flex'>
					<div className='border-[1px] border-[#FF8540] rounded-[20px] px-[20px] py-[3px] text-[#FF8540] my-[8px] mr-[10px] font-medium'>
						{child.gender === "female" ? "여성" : "남성"}
					</div>
					<div className='flex border-[1px] border-[#FF8540] rounded-[20px] px-[20px] py-[3px] text-[#FF8540] my-[8px] font-medium'>
						<p>고유키 : {child.uniqueKey}</p>
						<CopyToClipboard
							text={child.uniqueKey}
							onCopy={() =>
								alert("고유키가 복사되었습니다.")
							}
						>
							<button className='ml-[5px]'>
								<FaRegCopy />
							</button>
						</CopyToClipboard>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-3'>
				<div className='flex flex-col items-center pr-[30px]'>
					<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
						나이
					</div>
					<div className='text-[black] font-medium'>
						{child.age} 세
					</div>
				</div>
				<div className='flex flex-col items-center px-[35px] border-x-[2px] border-[#D9D9D9]'>
					<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
						키
					</div>
					<div className='text-[black] font-medium'>
						{child.height} cm
					</div>
				</div>
				<div className='flex flex-col items-center pl-[30px]'>
					<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
						몸무게
					</div>
					<div className='text-[black] font-medium'>
						{child.weight} kg
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
