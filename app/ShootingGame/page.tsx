import React from 'react'
import DifficultyMenu from './components/DifficultyMenu'

const page = () => {
  return (
    <div className="bg-[url('/assets/shootingGame/shootingBackground.png')] bg-center h-screen bg-cover aspect-[16/13]">
        <div className='h-[600px] flex items-end justify-center '>
        <DifficultyMenu/>

        </div>
    </div>

  )
}

export default page