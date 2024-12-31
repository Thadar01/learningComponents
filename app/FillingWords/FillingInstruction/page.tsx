import React from 'react'
import FillingInstruction from '../components/FillingInstruction'

const page = () => {
  return (
    <div className="bg-[url('/assets/FillingWords/Bg2.png')] bg-center h-screen bg-cover aspect-[16/13]">
    <div className='h-[100%] flex items-center justify-center '>
        <FillingInstruction/>
    </div>
</div>
  )
}

export default page