'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

const MazeGame=dynamic(()=>import('../components/MainMazeGame').then((mod) => mod.default),{ssr:false})

const page = () => {
    const Param=useSearchParams();
    const level=Param.get('level')
  return (
    <div>
        <MazeGame level={level}/>
    </div>
  )
}

export default page