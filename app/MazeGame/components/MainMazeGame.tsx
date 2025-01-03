import React, { useEffect, useRef } from 'react'
import PreLoader from './scenes/PreloaderScene';
import EasyMazeScene from './scenes/EasyMazeScene';
import PreLoaderScene from './scenes/PreloaderScene';
import MedMazeScene from './scenes/MedMazeScene';
import HardMazeScene from './scenes/HardMazeScene';
import next from 'next';

interface gameType{
    level:string|null
}
const MainMazeGame:React.FC<gameType> = ({level}) => {
  const gameRef=useRef<Phaser.Game|null>(null);

  useEffect(()=>{
    if(gameRef.current){
      return;
    }

    const scenes=[PreLoaderScene]
    if(level==='easy'){
      scenes.push(EasyMazeScene)
    }else if(level==='med'){
      scenes.push(MedMazeScene)
    }else if(level==='hard'){
      scenes.push(HardMazeScene)
    }

    const config:Phaser.Types.Core.GameConfig={
      type:Phaser.AUTO,
      width:984,
      height:700,
      scene:scenes,
      physics:{
        default:'arcade',
        arcade:{
          gravity:{x:0,y:0},
          debug:false
        }
      },
      parent:'phaser-container',
      backgroundColor:'#FFFFFF',

    }

    gameRef.current=new Phaser.Game(config)

    return()=>{
      if(gameRef.current){
        gameRef.current.destroy(true);
        gameRef.current=null
      }
    }
  },[level])


  return (
    <div>
    <div id="phaser-container"></div>
  </div>
  )
}

export default MainMazeGame