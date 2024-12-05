import Image from 'next/image'
import React from 'react'

const StudentProfile = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5 gap-7'>
        <p className='text-[28px] font-bold'>Profile Information</p>
        <div className='bg-white w-[40%] shadow-lg rounded-lg flex flex-col gap-5 justify-center items-center p-5'>
        <Image width={100} height={100} src="/assets/profile.svg" />
        <p className='text-[24px] font-bold'>Kaung Htike San</p>
        <button className="bg-[#009DEB] w-[208px] h-[68px] rounded-xl border-b-4 border-t-1 border-x-1 border-[#1481B8] flex justify-center items-center gap-2 hover:bg-[#3992bf]">
          <div className="bg-white rounded-t-lg rounded-br-lg p-1 rounded-bl-sm">
            <Image width={20} height={20} src="/assets/editPen.svg" />
          </div>
          <p className="text-[20px] text-white font-bold">Edit Profile</p>
        </button>
        </div>
    </div>
  )
}

export default StudentProfile