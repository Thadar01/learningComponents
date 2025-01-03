'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import EasyScene from './scene/EasyScene';
import PreLoaderScene from './scene/PreLoaderScene';
import { sharedData } from './data/sharedData';
import MediumScene from './scene/MediumScene';
import HardScene from './scene/HardScene';

interface ShootingGameProps {
  level: string | null;
  plane:string | null
}

const MainShootingGame: React.FC<ShootingGameProps> = ({ level,plane }) => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) {
      return; // Prevent reinitialization//
    }

    sharedData.plane = plane || '';

    const scenes = [PreLoaderScene];
    if (level === 'easy') {
      scenes.push(EasyScene);
    }else if(level==='med'){
      scenes.push(MediumScene)
    }else if(level=='hard'){
      scenes.push(HardScene)
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 1000,
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

export default MainShootingGame;
