import React, {useState} from "react";

function OneDay({count, count2, img, qs}) {
	const [selectedButton, setSelectedButton] = useState("");

	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	return (
		<div className='justify-items-center flex'>
			<div className='w-[320px] h-full p-4 rounded-lg bg-[#ffffff] drop-shadow-xl'>
				<div className='mb-3 flex items-center justify-center font-semibold text-[18px]'>
					<span className='text-[#276FFB]'>{count}</span>/4
				</div>
				<div className='text-xl p-3 flex flex-col items-center justify-center font-bold'>
					{qs}
					<div className='w-[60%] h-[1px] bg-[lightgrey] mt-[14px]'></div>
				</div>
				<div className='flex justify-center my-[30px]'>
					<img className='w-[120px]' src={img} alt=''></img>
				</div>
				<div className='Btn grid grid-cols-2 gap-3'>
					<div
						className={`BtnContainer rounded-lg font-extrabold text-5xl ${
							selectedButton === "O"
								? "bg-[#d3daf4]"
								: "bg-[#dddcde]"
						}`}
						onClick={() => handleButtonClick("O")}
					>
						<button
							className={`Obtn px-4 py-5  w-full ${
								selectedButton === "O"
									? "text-[#208df9]"
									: "text-[#7b7b7b]"
							}`}
						>
							O
						</button>
					</div>
					<div
						className={`BtnContainer rounded-lg font-extrabold text-5xl ${
							selectedButton === "X"
								? "bg-[#e4cccc]"
								: "bg-[#dddcde]"
						}`}
						onClick={() => handleButtonClick("X")}
					>
						<button
							className={`Xbtn px-4 py-5 w-full ${
								selectedButton === "X"
									? "text-[#e93c3c]"
									: "text-[#7b7b7b]"
							}`}
						>
							X
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OneDay;
