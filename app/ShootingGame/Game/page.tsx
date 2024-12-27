'use client'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const PhaserGame=dynamic(()=>import('../components/MainShootingGame'),{ssr: false});
const page = () => {
    const Params=useSearchParams();
    const level=Params.get('name')
    const plane=Params.get('jet')
  return (
    <div>
        <PhaserGame level={level} plane={plane}/>
    </div>
  )
}

export default page