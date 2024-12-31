import Phaser from "phaser";
import { MedfruitList,Medquestions } from "../data/fruitData";
import Laser from "../entities/Laser";
import { sharedData } from "../data/sharedData";

export default class HardScene extends Phaser.Scene {
    bg: Phaser.GameObjects.Image | null=null;
    scoreText: Phaser.GameObjects.Text | null=null;
    easyScore: number;
    lifeText: Phaser.GameObjects.Text | null=null;
    life: number;
    player: Phaser.Physics.Arcade.Image | null;
    cursor: Phaser.Types.Input.Keyboard.CursorKeys| null=null;
    box1: Phaser.Physics.Arcade.Image| null=null;
    box2: Phaser.Physics.Arcade.Image| null=null;
    box3: Phaser.Physics.Arcade.Image| null=null;
    gameNumber: number;
    inputEnabled: boolean;
    laserGroup: Phaser.Physics.Arcade.Group| null=null;
    collisionHandled: boolean; // Prevent multiple collision handling
     currentSound: Phaser.Sound.WebAudioSound | Phaser.Sound.HTML5AudioSound | null = null;
    explore:Phaser.GameObjects.Image|null=null
     
   

    constructor() {
        super('scene');
        this.bg
        this.easyScore = 0;
        this.life = 3;
        this.player = null;
        this.gameNumber = 0;
        this.inputEnabled = true;
        this.collisionHandled = false;
    }

    preload() {
    
        for (let i = 0; i < MedfruitList.length; i++) {
            for (let j = 0; j < 2; j++) {
                const fruitName = MedfruitList[i][j].name;
                const fruitSrc = MedfruitList[i][j].src;

                this.load.image(fruitName, fruitSrc);
            }
        }

            for (let k = 0; k < Medquestions.length; k++) {
                const sound = Medquestions[k].sound;
                const name = Medquestions[k].name;


                this.load.audio(name,sound);
            }
       
    }

    create() {
        this.bg = this.add.image(0, 0, "bg").setOrigin(0, 0);


         
   

const graphics = this.add.graphics();
graphics.fillStyle(0x000000, 0.3);
const padding = this.scoreText?.padding;
graphics.fillRoundedRect(
    40,  // X position
    40,  // Y position
    160, // Width (fixedWidth)
    50,  // Height (calculated from fontSize + padding)
    10   // Border radius for rounded corners
);

// Add the text on top of the rectangle
this.scoreText = this.add.text(40, 45, `Score: ${this.easyScore.toString()}`, {
    color: '#FFFFFF',
    fontStyle:'bold',
    fontSize: '18px',
    padding: { left: 20, right: 0, top: 10, bottom: 10 },
});

// Ensure the text is rendered on top of the rectangle
this.scoreText.setDepth(1); // This ensures the text is on top of the rectangle

        // Life
        this.lifeText = this.add.text(895, 45, `${this.life.toString()}`, {
            color: '#FFFFFF',
            fontStyle:'bold',
            fontSize: '18px',
            padding: { left: 20, right: 0, top: 10, bottom: 10 },
        });

        

        const lifebox=this.add.graphics();
        lifebox.fillStyle(0x000000,0.7);
        lifebox.fillRoundedRect(
            850,
            40,
            100,
            45,
            10
        )
        this.lifeText.setDepth(1)
        this.add.image(890,65,'heart')

        // Player
        if(sharedData.plane==='bluejet'){
            this.player = this.physics.add.image(50, 350, "bluejet").setScale(0.2,0.2);

        }else if(sharedData.plane==='pinkjet'){
            this.player = this.physics.add.image(50, 350, "pinkjet").setScale(0.2,0.2);

        }
        if (this.input.keyboard) {
            this.cursor = this.input.keyboard.createCursorKeys();
        }
        this.player?.setCollideWorldBounds(true);
        this.player?.setImmovable(true);

        // Boxes
        this.createBoxes();

        // Laser Group
        this.laserGroup = this.physics.add.group({
            classType: Laser,
            maxSize: 1,
            runChildUpdate: true,
        });

        const choose = [this.box1, this.box2,this.box3];
for (let i = 0; i < choose.length; i++) {
    if (choose[i]) {
        this.physics.add.overlap(this.laserGroup, choose[i]!, (laser, meteor) => {
            if (this.collisionHandled) return; // Prevent multiple collision triggers
            this.collisionHandled = true;

            const laserInstance = laser as Laser;
            const meteorInstance = meteor as Phaser.Physics.Arcade.Image;

            meteorInstance.setVisible(false);
            laserInstance.setVisible(false);

            this.box1?.setVelocity(0);
            this.box2?.setVelocity(0);
            this.box3?.setVelocity(0);

            // Add the explore image at the position of choose[i]
            const x = choose[i]!.x; // Safely access x
            const y = choose[i]!.y; // Safely access y
            let exploreimage='blueExplore'

            if(sharedData.plane==='pinkjet'){
                exploreimage='pinkExplore'
            }
            this.explore = this.add.image(x, y, exploreimage).setScale(0.2,0.2); // Use the correct texture key for 'blueExplore'

            setTimeout(() => {
                this.box1?.setVisible(false);
                this.box2?.setVisible(false);
                this.box3?.setVisible(false)
                this.explore?.destroy()
            }, 800);
            setTimeout(() => this.hitBox(), 2000);

            setTimeout(() => {
                this.collisionHandled = false; // Reset collision handling
            }, 500);

            if (choose[i]?.texture.key === Medquestions[this.gameNumber].name) {
                this.easyScore = this.easyScore + 100;
                this.scoreText?.setText(`Score: ${this.easyScore.toString()}`);
            } else {
                if (this.life > 0) {
                    this.life--;
                    this.lifeText?.setText(`${this.life.toString()}`);
                } else if (this.life === 0) {
                    this.goResult();
                }
            }
        });
    }
}


        // Player-Box Collisions
        if(this.box1 && this.box2 && this.box3 && this.player){
            this.physics.add.collider(this.player, this.box1, () => this.destroyPlayer());
            this.physics.add.collider(this.player, this.box2, () => this.destroyPlayer());
            this.physics.add.collider(this.player, this.box3, () => this.destroyPlayer());

    
        }

   
    
        // Play sound immediately
       this. playSound();
    
       
        
    
    }

    update() {
        // Box Movement Logic
        if(this.box1 && this.box3 && this.box2){
            if (this.box1.y < 150) {
                this.box1.setVelocity(-35, 250);
                this.box2.setVelocity(-35,250)
                this.box3.setVelocity(-35, 250);
            } else if (this.box3.y > 650) {
                this.box1.setVelocity(-35, -250);
                this.box2.setVelocity(-35,-250)

                this.box3.setVelocity(-35, -250);
            }
            this.box2.y = this.box1.y + 100;
            this.box3.y=this.box2.y+100
        }


        // Player Movement
        if (this.player) {
            if (this.cursor?.down.isDown) {
                this.player.setVelocityY(200);
            } else if (this.cursor?.up.isDown) {
                this.player.setVelocityY(this.player.y < 150 ? 0 : -200);
            } else {
                this.player.setVelocityY(0);
            }

            // Laser Firing
            if (this.cursor?.space.isDown) {
                const shoot = this.laserGroup?.get();
                if (shoot) {
                    shoot.fire(this.player.x + 60, this.player.y, this.player.rotation);
                }
            }
        }

        if (this.life===0){
           this.goResult()
            

        }

     
    }

    createBoxes(): void {
        this.box1 = this.physics.add.image(1025, 250, MedfruitList[this.gameNumber][0].name);
        this.box2 = this.physics.add.image(1025, 350, MedfruitList[this.gameNumber][1].name);
        this.box3 = this.physics.add.image(1025, 450, MedfruitList[this.gameNumber][2].name);

        

        this.box1.setScale(0.25, 0.25);
        this.box2.setScale(0.25, 0.25);
        this.box3.setScale(0.25, 0.25);


        this.box1.setVelocity(-35, 250);
        this.box2.setVelocity(-35, 250);
        this.box3.setVelocity(-35, 250);


        this.box1.setCollideWorldBounds(true);
        this.box2.setCollideWorldBounds(true);
        this.box3.setCollideWorldBounds(true)

        this.physics.add.collider(this.box1, this.box2);
        this.physics.add.collider(this.box2,this.box3)

      
    }

    destroyPlayer(): void {
        if (this.player && this.box1 && this.box2 && this.box3) {
            
            this.player.setVisible(false);
            this.player = null;
            this.box1.setVelocity(0);
            this.box2.setVelocity(0);
            this.box3.setVelocity(0);


            setTimeout(() => {
                this.box1?.setVisible(true);
                this.box2?.setVisible(true);
                this.box3?.setVisible(true)
            }, 800);

            setTimeout(() => {
                this.restoreBoxPosition();
            }, 2000);
        }

        if(this.life>0){
            this.life--
            this.lifeText?.setText(`${this.life.toString()}`)
        }else{
           this.goResult()

        }
    }

    restoreBoxPosition(): void {
        if (!this.player) {
            if(sharedData.plane==='bluejet'){
                this.player = this.physics.add.image(50, 350, "bluejet").setScale(0.2,0.2);
    
            }else if(sharedData.plane==='pinkjet'){
                this.player = this.physics.add.image(50, 350, "pinkjet").setScale(0.2,0.2);
    
            }            this.player?.setCollideWorldBounds(true);
        }
        
        this.box1?.setPosition(1030, 250);
        this.box2?.setPosition(1030, 350);
        this.box3?.setPosition(1030,450)

        this.box1?.setVelocity(-35, 250);
        this.box2?.setVelocity(-35, 250);
        this.box3?.setVelocity(-35,250)
    }

    hitBox(): void {
      

       
            this.restoreBoxPosition();
            this.box1?.setVisible(true);
            this.box2?.setVisible(true);
            this.box3?.setVisible(true)
        

        if (this.gameNumber < MedfruitList.length - 1 && this.life !==0) {
            this.gameNumber += 1;
            console.log(this.gameNumber);

            this.box1?.setTexture(MedfruitList[this.gameNumber][0].name)
            this.box2?.setTexture(MedfruitList[this.gameNumber][1].name)
            this.box3?.setTexture(MedfruitList[this.gameNumber][2].name)

            this.playSound()
            

        }else{
            this.goResult()
        }

    }

     playSound():void  {
        this.sound.play(Medquestions[this.gameNumber].name, {
            loop: false,
        });
    };

    stopSound():void{
        this.sound.stopAll()
    }

    goResult(): void {
        this.sound.stopAll();
    
        // Get the current score
        const score = this.easyScore;
    
        // Check if there is an existing score in localStorage
        const storedScore = Number(localStorage.getItem('hardhighestScore'));
    
        // If there is no stored score or if the current score is higher, update the localStorage
        if (isNaN(storedScore) || storedScore < score) {
            localStorage.setItem('hardhighestScore', score.toString());
        }
    
        // Stop the scene and navigate to the result page with the score in the URL
        this.scene.stop();
        window.location.href = `/ShootingGame/Result?score=${score}&difficulty=hard`;
    }
    
  
}
