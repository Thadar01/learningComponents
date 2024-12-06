'use client'
import Image from "next/image";
import { useState } from "react";

const StudentEdit = ({onClose}) => {
    const [name,setName]=useState("Kaung Htike San")
    console.log(name)
  return (
    <div className="bg-white w-[100%] flex flex-col justify-center items-center p-7 rounded-xl shadow-sm gap-7">
      <p className="font-bold text-[24px]">Edit Profile Information</p>
      <div className="relative">
        <Image width={100} height={100} src="/assets/profile.svg" alt='student profile' />
        <button className="bg-white border-1 border-sky-400 rounded-full  w-[24px] h-[24px] flex justify-center items-center absolute bottom-0 right-1">
          <div className="bg-[#009DEB] rounded-t-[4px] rounded-br-[4px] p-1 r w-[14px] h-[14px] ">
            <Image width={10} height={10} src="/assets/whiteEditPen.svg" alt='edit icon'/>
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <p className="text-[18px] font-bold">Name</p>
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full p-2 border-b-5 border-t-2 border-x-2 border-[#1481B8] rounded-xl outline-none focus:none text-[#5A6A72] font-bold text-[18px]"
          />
          <button className="absolute top-4 right-3" onClick={()=>setName("")}>
            <Image width={10} height={10} src="/assets/cross.svg" alt='Student Profile'/>
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full">
            <button className="w-[47%] border-b-4 border-t-1 border-x-1 border-[#1481B8] h-[60px] rounded-xl font-bold text-[18px] text-[#009DEB]">Cancle</button>
            <button className="w-[47%] h-[60px] border-b-4 border-t-1 border-x-1 border-[#1481B8] rounded-xl bg-[#009DEB] font-bold text-[18px] text-white" onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default StudentEdit;
