'use client'
import Image from "next/image";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdArrowDropright } from 'react-icons/io'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MazeInstruction = () => {
    const Params=useSearchParams();
    const level=Params.get('level')
  return (
    <div className="w-[43%] flex flex-col justify-center items-center gap-5">
      <div className="bg-[#00000052]  backdrop-blur-md w-[100%] text-white flex flex-col  justify-center items-center p-7  rounded-xl gap-3">
        <h1 className="font-bold text-[18px]">How to Play</h1>
        <div className="w-[95%] flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="font-bold">Eat the correct Item</p>
            <div className="flex gap-2 items-center">
              <div className="w-[36px] h-[20px]">
                <Image
                  src={"/assets/MazeGame/monkey.png"}
                  width={36}
                  height={36}
                  alt="monkey"
                />
              </div>
              <div className="w-[90px] h-[90px] bg-white border-3 border-[#021744] rounded-3xl flex justify-center items-center">
                <Image
                  src={"/assets/MazeGame/questionMark.png"}
                  width={60}
                  height={60}
                  alt="Question Mark"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-16 items-center ">
            <p className="font-bold">Move Up & Down</p>
            <div className="flex flex-col gap-2">
              <div className="bg-white border-x-1 border-t-1 border-b-4 border-[#1481B8] flex justify-center items-center w-[35px] h-[35px] rounded-lg">
                <TiArrowSortedUp className="text-[#009DEB] text-[30px]" />
              </div>
              <div className="bg-white border-x-1 border-t-1 border-b-4 border-[#1481B8] flex justify-center items-center w-[35px] h-[35px] rounded-lg">
                <TiArrowSortedDown className="text-[#009DEB] text-[30px]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <p className="font-bold">Move Left & Right</p>
            <div className="flex gap-2">
            <div className="bg-white border-x-1 border-t-1 border-b-4 border-[#1481B8] flex justify-center items-center w-[35px] h-[35px] rounded-lg">
              <BiSolidLeftArrow className="text-[#009DEB] text-[16px]" />
            </div>

            <div className="bg-white border-x-1 border-t-1 border-b-4 border-[#1481B8] flex justify-center items-center w-[35px] h-[35px] rounded-lg">
              <BiSolidRightArrow className="text-[#009DEB] text-[16px]" />
            </div>
            </div>

           
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">Beat the Time</p>
            <div className="w-[55%] h-[40px] border-x-1 border-t-1 border-b-4 border-[#1481B8] bg-white rounded-md flex justify-center items-center">
                <p className="text-black font-bold">00:02:00</p>
            </div>
          </div>
        </div>
      </div>
      <Link className='bg-[#009DEB] w-[140px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8] ' href={{pathname:'/MazeGame/Game',query:{level:level}}}>
          <p className='text-white  font-bold'>Start Play</p>
          <IoMdArrowDropright className='text-white text-[30px]' />
    </Link>
    </div>
  );
};

export default MazeInstruction;
