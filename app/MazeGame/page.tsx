import React from 'react'
import MazeMenu from './components/MazeMenu'

const page = () => {
  return (
    <div className="bg-[url('/assets/MazeGame/menuBg.png')] bg-center h-screen bg-cover aspect-[16/13]">
    <div className='h-[600px] flex items-end justify-center '>
        <MazeMenu/>
    </div>
</div>
  )
}

export default page