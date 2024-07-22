import React, {useState} from 'react'


function OneDay ({ count, count2, img, qs }) {
    const [selectedButton, setSelectedButton] = useState('');
    

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div className="justify-items-center flex">
                <div className="p-4 rounded-lg border-2 border-[#68aefe] bg-[#ffffff]">
                    <div className="mb-3 flex items-center justify-center font-semibold text-2xl">
                        <span className="text-[#68aefe]">{count}</span>
                        <span>{count2}</span>
                    </div>
                    <div className="text-xl p-3 border-b border-b-[lightgray] border-b-2 flex items-center justify-center font-bold">
                         {qs}
                    </div>
                    <div className="flex justify-center">
                        <img className="w-50 h-70" src={img} alt=''></img>
                    </div>
                    
                    <div className="Btn grid grid-cols-2 gap-3">
                        <div className={`BtnContainer rounded-lg font-extrabold text-5xl ${
                            selectedButton === 'O' ? 'bg-[#d3daf4]' : 'bg-[#dddcde]'
                        }`}
                        onClick={() => handleButtonClick('O')}
                        >
                            <button className={`Obtn px-4 py-5  w-full ${
                                selectedButton ==='O'? 'text-[#208df9]' : 'text-[#7b7b7b]'
                            }`}
                            >
                            O
                            </button>
                        </div>
                        <div className={`BtnContainer rounded-lg font-extrabold text-5xl ${
                            selectedButton === 'X' ? 'bg-[#e4cccc]' : 'bg-[#dddcde]'
                        }`}
                        onClick={() => handleButtonClick('X')}
                        >
                            <button className={`Xbtn px-4 py-5 w-full ${
                                selectedButton ==='X' ? 'text-[#e93c3c]' : 'text-[#7b7b7b]'
                            }`}
                            >
                            X
                            </button>
                        </div>



                    </div>
                    
                </div>
        </div>

        

    );
};

export default OneDay;