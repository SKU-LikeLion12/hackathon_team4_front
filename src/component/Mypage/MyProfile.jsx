import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {FaRegCopy} from "react-icons/fa";

const MyProfile = () => {
	return (
		<div className='flex flex-col items-center bg-[white] h-[360px] pt-[30px] pb-[10px] px-[30px] rounded-[10px] overflow-hidden drop-shadow-md mb-[20px]'>
			<img
				className='w-[100px] '
				src='img/Woman2.png'
				alt=''
			/>
			<div className='flex flex-col items-center my-[20px]'>
				<div className='text-[22px] font-bold pb-[5px]'>
					김사자
				</div>
				<div className='flex'>
					<div className='border-[1px] border-[#FF8540] rounded-[20px] px-[20px] py-[3px] text-[#FF8540] my-[8px] mr-[10px] font-medium'>
						여성
					</div>
					<div className='flex border-[1px] border-[#93969F] rounded-[20px] px-[20px] py-[3px] text-[#93969F] my-[8px] font-medium'>
						<p>고유키 : djflkjslf</p>
						<CopyToClipboard
							text='djflkjslf'
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
						15세
					</div>
				</div>
				<div className='flex flex-col items-center px-[60px] border-x-[2px] border-[#D9D9D9]'>
					<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
						키
					</div>
					<div className='text-[black] font-medium'>
						65kg
					</div>
				</div>
				<div className='flex flex-col items-center pl-[30px]'>
					<div className='text-[20px] text-[#208DF9] font-bold mb-[8px]'>
						몸무게
					</div>
					<div className='text-[black] font-medium'>
						65kg
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
