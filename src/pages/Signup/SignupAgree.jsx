import React, {useEffect, useState} from "react";
import {list} from "../../constants/Signup_CheckList";
import {useNavigate} from "react-router-dom";

export default function Signup_Agree({setState}) {
	const navigation = useNavigate();
	const [agreements, setAgreements] = useState(
		new Array(list.length).fill(false)
	);

	const handleAgreement = (index) => {
		setAgreements(() => {
			let newAgreements = [...agreements];
			newAgreements[index] = !newAgreements[index];
			return newAgreements;
		});
	};

	const checkList = () => {
		const check = agreements.every((item) => item === true);
		if (check) {
			navigation("/SignupInfo");
		}
	};

	const allAccpet = () => {
		const allChecked = agreements.every(
			(item) => item === true
		);
		setAgreements(new Array(list.length).fill(!allChecked));
	};

	useEffect(() => {
		console.log("agreements: ", agreements);
	}, [agreements]);

	return (
		<div className='Mobile pt-[40px] pb-[20px]'>
			<div className='flex justify-center text-[25px] text-[#208DF9] font-bold'>
				헬스메이트
			</div>
			<div className='flex flex-col items-start mx-[50px] mt-[40px] mb-[30px]'>
				<div className='flex flex-col text-[18px] font-semibold'>
					<span>헬스메이트와 함께</span>
					<span>
						<b className='text-[#208DF9]'>건강한 순간</b>을
						만들어 가요! 💪🏻
					</span>
				</div>
				<span className='text-[13px] mt-[25px] mb-[50px]'>
					※ 서비스 가입을 위해 아래 약관에 동의가 필요해요.
				</span>
				<div className='font-semibold'>
					<input
						className='mr-[10px]'
						type='checkbox'
						onChange={allAccpet}
					/>
					모두 동의하기
				</div>
				<div className='w-full h-[1px] bg-[#dee1e6] my-[20px]'></div>
				{list.map((item, i) => (
					<div key={i} className='mb-[20px]'>
						<input
							className='mr-[10px]'
							type='checkbox'
							onChange={() => handleAgreement(i)}
							checked={agreements[i]}
						/>
						<span>{item}</span>
					</div>
				))}
				<button
					className='w-full h-[45px] rounded-[10px] bg-[#208df9] text-white font-medium mt-[40px]'
					onClick={checkList}
				>
					동의 후 가입하기
				</button>
			</div>
		</div>
	);
}
