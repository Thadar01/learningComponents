import React from 'react'

const LogOutModal = () => {
  return (
    <div className='bg-white w-[40%] rounded-lg flex flex-col gap-4 justify-center p-5'>
        <p className='text-[24px] text-[#6E190C] font-bold'>Log Out</p>
        <p className='text-[18px]'>"Are you sure you want to log out"</p>
        <div className='flex gap-3 mt-6'>
            <button className='border-b-4 border-t-1 border-x-1 border-[#1481B8] w-[45%] h-[50px] rounded-xl text-[#009DEB] text-[18px] font-bold hover:bg-blue-50'>Cancel</button>
            <button className='bg-[#E8452C] border-b-4 border-t-1 border-x-1 border-[#B82A14] w-[45%]  h-[50px] rounded-xl text-white text-[18px] font-bold hover:bg-red-600'>Log Out</button>

        </div>
    </div>
  )
}

export default LogOutModal