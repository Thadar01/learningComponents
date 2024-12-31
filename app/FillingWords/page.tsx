import React from 'react'
import FillingMenu from './components/FillingMenu'

const page = () => {
  return (
    <div className="bg-[url('/assets/FillingWords/FillingWordBg.png')] bg-center h-screen bg-cover aspect-[16/13]">
    <div className='h-[600px] flex items-end justify-center '>
        <FillingMenu/>
    </div>
</div>
  )
}

export default page