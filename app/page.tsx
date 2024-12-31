'use client'


import Avatar from '@/app/components/Avatar'
import Link from 'next/link';





export default function Home() {
  return (
    <div>
          <Link href={'/ShootingGame'}>Shooting Game</Link>
          <Link href={'/FillingWords'}>Filling Words</Link>

    </div>
    
  );
}
