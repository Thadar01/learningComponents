'use client'
import React from 'react'
import MazeInstruction from '../components/MazeInstruction'

const page = () => {
  return (
    <div className="bg-[url('/assets/MazeGame/instructionBg.png')] bg-center h-screen bg-cover aspect-[16/13]">
    <div className='h-[100%] flex items-center justify-center '>
        <MazeInstruction/>
    </div>
</div>
  )
}

export default page