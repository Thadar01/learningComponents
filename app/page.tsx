'use client'


import Avatar from '@/app/components/Avatar'
import Link from 'next/link';





export default function Home() {
  return (
    <div className='text-white flex flex-col gap-3'>
          <Link href={'/ShootingGame'}>Shooting Game</Link>
          <Link href={'/FillingWords'}>Filling Words</Link>
          <Link href={'/MazeGame'}>MazeGame</Link>


    </div>
    
  );
}
