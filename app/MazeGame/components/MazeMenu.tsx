import Link from 'next/link'
import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";


const MazeMenu = () => {
  return (
    <div className="bg-[#00000052]  backdrop-blur-md w-[80%] flex flex-col  justify-center items-center p-7 pt-9 gap-10 rounded-xl ">
    <h1 className=" text-[25px] text-white font-bold">
      Select Game Difficulty
    </h1>
    <div className="w-[90%] flex justify-between">
    <Link className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[30%] bg-[#009DEB] text-white p-2 rounded-xl flex justify-center items-center gap-2" href={{pathname:'/MazeGame/MazeInstruction',query:{level:'easy'}}}>
        <TiStarFullOutline className="text-white" />
        Easy
      </Link>
      <Link className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[30%] bg-[#009DEB] text-white p-2 rounded-xl flex justify-center items-center gap-2" href={{pathname:'/MazeGame/MazeInstruction',query:{level:'med'}}}>
        <TiStarFullOutline className="text-white" />
        <TiStarFullOutline className="text-white" />
        Medium
      </Link>
      <Link className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[30%] bg-[#009DEB] text-white p-2 rounded-xl flex justify-center items-center gap-2" href={{pathname:'/MazeGame/MazeInstruction',query:{level:'hard'}}}>
        <TiStarFullOutline className="text-white" />
        <TiStarFullOutline className="text-white" />
        <TiStarFullOutline className="text-white" />
        Hard
      </Link>
    </div>
  </div>  )
}

export default MazeMenu