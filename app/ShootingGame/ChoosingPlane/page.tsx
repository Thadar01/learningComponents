import React from 'react'
import ChoosingPlane from '../components/ChoosingPlane'

const page = () => {
  return (
    <div className="bg-[url('/assets/shootingGame/glaxy.jpg')] bg-center h-screen bg-cover aspect-[16/13] flex justify-center items-center">
        <ChoosingPlane/>
    </div>
  )
}

export default page