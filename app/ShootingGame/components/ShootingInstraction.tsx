import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";
const ShootingInstraction = () => {
  return (
    <div  className='w-[40%] flex flex-col  justify-center items-center gap-5'>
    <div className="bg-black bg-opacity-50 w-[100%] flex flex-col  justify-center items-center p-7 rounded-xl gap-6 ">

      <h1 className='text-white text-[24px] font-bold'>How to Play</h1>
      <div className='w-[70%] flex justify-between items-center'>
        <p  className='text-white font-bold'>Move Up</p>
        <div className='bg-white w-[55px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8]'>
        <BiSolidUpArrow className='text-[#009DEB] text-[18px]'/>

        </div>
      </div>
      <div className='w-[70%] flex justify-between items-center'>
        <p  className='text-white font-bold '>Move Down</p>
        <div className='bg-white w-[55px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8]'>
        <BiSolidDownArrow className='text-[#009DEB] text-[18px]'/>
        </div>
      </div>
      <div className='w-[90%] flex justify-between items-center'>
        <p  className='text-white font-bold ml-8'>Fire/Shot</p>
        <div className='bg-white w-[140px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8]'>
          <p className='text-[#009DEB] text-[18px] font-bold'>Space</p>
        </div>
      </div>
    </div>
    <div className='bg-[#009DEB] w-[140px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8] gap-2'>
          <p className='text-white  font-bold'>Next</p>
          <BiSolidRightArrowCircle className='text-white text-[25px]'/>
                  </div>
    </div>
  )
}

export default ShootingInstraction