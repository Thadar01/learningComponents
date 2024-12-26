import Link from "next/link";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const DifficultyMenu = () => {
  return (
    <div className="bg-black bg-opacity-50 w-[80%] flex flex-col  justify-center items-center p-7 pt-9 gap-10 rounded-xl ">
      <h1 className="text-white text-[25px] font-bold">
        Select Game Difficulty
      </h1>
      <div className="w-[90%] flex justify-between">
        <Link className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[30%] bg-[#009DEB] text-white p-2 rounded-xl flex justify-center items-center gap-2" href={'/ShootingGame/ShootingInstruction'}>
          <TiStarFullOutline className="text-white" />
          Easy
        </Link>
        <button className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[30%] bg-[#009DEB] text-white p-2 rounded-xl flex justify-center items-center gap-2">
          <TiStarFullOutline className="text-white" />
          <TiStarFullOutline className="text-white" />
          Medium
        </button>
        <button className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[30%] bg-[#009DEB] text-white p-2 rounded-xl flex justify-center items-center gap-2">
          <TiStarFullOutline className="text-white" />
          <TiStarFullOutline className="text-white" />
          <TiStarFullOutline className="text-white" />
          Hard
        </button>
      </div>
    </div>
  );
};

export default DifficultyMenu;
