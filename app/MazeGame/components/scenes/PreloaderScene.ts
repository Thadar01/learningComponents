


export default class PreLoaderScene extends Phaser.Scene {
    constructor() {
      super('mazepreloader');
    }
  
    preload() {
    
      this.load.atlas('mazeAtlas', '/assets/MazeGame/mazeTexture.png', '/assets/MazeGame/mazeTexture.json');
      this.load.image('gameBg','/assets/MazeGame/gameBg.png')
        
      

    }
  
    create() {
      this.scene.start('scene');
    }
  }
  