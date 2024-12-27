

export default class PreLoaderScene extends Phaser.Scene {
    constructor() {
      super('preloader');
    }
  
    preload() {
    
        this.load.image('bg','/assets/shootingGame/glaxy.jpg')
            this.load.image('bluejet','/assets/shootingGame/blueplane.png')
            this.load.image('pinkjet','/assets/shootingGame/pinkplane.png')

            this.load.image('bluerocket','/assets/shootingGame/bluerocket.png')
            this.load.image('pinkrocket','/assets/shootingGame/pinkrocker.png')

            this.load.image('blueExplore','/assets/shootingGame/blueExplore.png')
            this.load.image('pinkExplore','/assets/shootingGame/pinkExplore.png')

            this.load.image('heart','/assets/shootingGame/heart.png')

    }
  
    create() {
      // Transition to the next scene after loading completes
      this.scene.start('scene');
    }
  }
  