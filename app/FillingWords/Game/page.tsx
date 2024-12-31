'use client'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const PhaserGame=dynamic(()=>import('../components/MainFillingWords'),{ssr: false});
const page = () => {
    const Params=useSearchParams();
    const level=Params.get('name')
  return (
    <div>
        <PhaserGame level={level}/>
    </div>
  )
}

export default page