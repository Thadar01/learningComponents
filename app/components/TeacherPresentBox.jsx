import Image from "next/image";
import React from "react";

const TeacherPresentBox = () => {
  return (
    <div className="bg-white w-[513px] flex flex-col justify-center items-center rounded-lg gap-4">
      <div className="flex justify-center items-center gap-3 p-4">
        <div className="bg-red-600 w-[44px] h-[44px] rounded-full flex justify-center items-center">
          <p className="font-bold">AY</p>
        </div>
        <p className="text-black font-bold">Daw Aye Aye</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black font-bold text-[24px] text-center">The teacher is in the calssroom!</p>
        <p className="text-[#5A6A72] text-[20px] text-center">Click 'Join Now' to enter Basic English Class</p>
      </div>

      <button className=" bg-[#009DEB] w-[90%] flex gap-2 justify-center items-center p-3 m-4 rounded-xl border-b-4 border-[#1481B8]">
        <p className="text-white text-[24px] font-bold">Join Now</p> <Image width={18} height={12} src='/assets/rightarrow.svg'/>
      </button>
    </div>
  );
};

export default TeacherPresentBox;
