import React from 'react'
import Result from '../components/Result'

const page = () => {
  return (
    <div className="bg-[url('/assets/shootingGame/glaxy.jpg')] bg-center h-screen bg-cover aspect-[16/13] flex justify-center items-center">
        <Result/>
    </div>
  )
}

export default page