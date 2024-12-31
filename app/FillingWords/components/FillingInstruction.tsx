'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const FillingInstruction = () => {
  const Params=useSearchParams();
  const level=Params.get('name')
  return (
    <div className='w-[40%] flex flex-col justify-center items-center gap-5'>
    <div className="bg-[#A6BBC9] bg-opacity-50 backdrop-blur-sm w-[100%] flex flex-col  justify-center items-center p-7  rounded-xl gap-3">
            <Image src={'/assets/FillingWords/HotAirBalloon.png'} width={150} height={150} alt='Hot Air Balloon'/>
            <h1 className='font-bold text-[25px]'>How to play</h1>
            <p className='font-bold text-[18px] mt-4'>Spell the word</p>
            <p className='text-center font-bold text-[15px] leading-relaxed mt-3'>Make sure the boy doesn't fall into the water.</p>
     </div>
     <Link className='bg-[#009DEB] w-[140px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8] ' href={{pathname:'/FillingWords/Game',query:{name:level}}}>
          <p className='text-white  font-bold'>Start Play</p>
          <IoMdArrowDropright className='text-white text-[30px]' />
    </Link>
    </div>
  )
}

export default FillingInstruction