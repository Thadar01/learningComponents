import React from 'react'
import ShootingInstraction from '../components/ShootingInstraction'

const page = () => {
  return (
    <div className="bg-[url('/assets/shootingGame/glaxy.jpg')] bg-center h-screen bg-cover aspect-[16/13] flex justify-center items-center">
            <ShootingInstraction/>

    </div>
  )
}

export default page