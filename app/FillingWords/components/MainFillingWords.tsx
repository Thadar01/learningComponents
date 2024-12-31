'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import EasyFilling from './scenes/EasyFilling';


interface FillingGameProps {
  level: string | null;
}

const MainFillingWords: React.FC<FillingGameProps> = ({ level }) => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) {
      return; // Prevent reinitialization
    }

    // sharedData.plane = plane || '';

    const scenes = [];
    if (level === 'easy') {
      scenes.push(EasyFilling);}
    // }else if(level==='med'){
    //   scenes.push(MediumScene)
    // }else if(level=='hard'){
    //   scenes.push(HardScene)
    // }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 984,
      height: 700,
      scene: scenes,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      parent: 'phaser-container',
      backgroundColor: '#FFFFFF',
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [level]);

  return (
    <div>
      <div id="phaser-container"></div>
    </div>
  );
};

export default MainFillingWords;
