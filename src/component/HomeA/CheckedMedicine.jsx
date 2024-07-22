import React,{useState}from 'react'

export default function CheckedMedicine() {
    const [activeTab, setActiveTab] = useState('tab1');
 


  return (
    <div className="rounded-lg border-2 border-[#68aefe] w-[70%] text-center m-auto">
        <button
          className={`px-4 py-2 mx-2 border-b-2 ${
            activeTab === 'tab1' ? 'border-b-red-500 text-blue-500' : 'border-b-lightgray text-[#dddcde]'
          }`}
          onClick={() => setActiveTab('tab1')}
        >
          오늘 먹을 약
        </button>
        <button
          className={`px-4 py-2 mx-2 border-b-2 ${
            activeTab === 'tab2' ? 'border-b-red-500 text-blue-500' : 'border-b-ligthgray text-[#dddcde]'
          }`}
          onClick={() => setActiveTab('tab2')}
        >
          약 섭취 현황
        </button>
    

      {activeTab === 'tab1' && ( // 일단 나중에 수정 
        <div className=" mt-5 grid grid-rows-3 gap-4 justify-center">
          <div className="p-4 m-5 bg-gray-100 rounded-lg">약 1</div>
          <div className="p-4 m-5 bg-gray-100 rounded-lg">약 2</div>
          <div className="p-4 m-5 bg-gray-100 rounded-lg">약 3</div>
        </div>
        )}
    </div>
  )
}
