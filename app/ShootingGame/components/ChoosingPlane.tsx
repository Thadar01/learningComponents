'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useSearchParams } from "next/navigation";

const ChoosingPlane = () => {
  const Params=useSearchParams();
  const name=Params.get('name')

  const [choosePlane,setChoosePlane]=useState('bluejet')
  return (
    <div className="w-[60%] flex flex-col justify-center items-center gap-3">
      <div className="bg-black bg-opacity-50 w-[100%] flex flex-col justify-center items-center p-7 rounded-xl gap-10">
        <h1 className="text-white font-bold text-[20px]">Select Jet Plane</h1>
        <div className="w-[100%] flex justify-between">
          <button className="bg-white bg-opacity-50 w-[45%] flex flex-col justify-center items-center h-[200px] gap-3 relative rounded-xl" onClick={()=>setChoosePlane('bluejet')}>
           {choosePlane==='bluejet' && <IoIosCheckmarkCircle className="absolute top-3 right-4 text-white text-[25px]" />}
            <Image
              src={"/assets/shootingGame/blueplane.png"}
              alt="blueplane"
              width={100}
              height={100}
            />
            <p className="text-white font-bold">Blue Jet</p>
          </button>
          <button className="bg-white bg-opacity-50 w-[45%] flex flex-col justify-center items-center h-[200px] gap-3 relative rounded-xl" onClick={()=>setChoosePlane('pinkjet')}>
          {choosePlane==='pinkjet' && <IoIosCheckmarkCircle className="absolute top-3 right-4 text-white text-[25px]" />}
          <Image
              src={"/assets/shootingGame/pinkplane.png"}
              alt="pinkplane"
              width={100}
              height={100}
            />
            <p className="text-white font-bold">Pink Jet</p>
          </button>
        </div>
      </div>
      <Link className='bg-[#009DEB] w-[140px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8] ' href={{pathname:'/ShootingGame/Game',query:{name:name,jet:choosePlane}}}>
          <p className='text-white  font-bold'>Start Play</p>
          <IoMdArrowDropright className='text-white text-[30px]' />
    </Link>
    </div>
  );
};

export default ChoosingPlane;
