import Phaser from "phaser";
import fillData from "../data/gameData";

export default class EasyMazeScene extends Phaser.Scene{
    player:Phaser.Physics.Arcade.Image|null=null
    blocks: Phaser.Physics.Arcade.StaticGroup | null = null;
    cursors:Phaser.Types.Input.Keyboard.CursorKeys|null=null
    topLeftImage:Phaser.Physics.Arcade.Image|null=null
    topRightImage:Phaser.Physics.Arcade.Image|null=null
    topMidImage:Phaser.Physics.Arcade.Image|null=null
    botLeftImage:Phaser.Physics.Arcade.Image|null=null
    botRightImage:Phaser.Physics.Arcade.Image|null=null
    botMidImage:Phaser.Physics.Arcade.Image|null=null
    centerImage:Phaser.GameObjects.Image|null=null
    gameNo:number=0

    tLeftBox: Phaser.GameObjects.Graphics|null=null;
    tRightBox: Phaser.GameObjects.Graphics|null=null;
    tMidBox: Phaser.GameObjects.Graphics|null=null;
    bLeftBox: Phaser.GameObjects.Graphics|null=null;
    bRightBox: Phaser.GameObjects.Graphics|null=null;
    bMidBox: Phaser.GameObjects.Graphics|null=null;
    centerBox:Phaser.GameObjects.Graphics|null=null;
   




    constructor(){
        super('scene')
    }
    preload(){  
        for(let i=0;i<fillData.length;i++){
            const tleft=fillData[i].topLeft
            const tright=fillData[i].topRight
            const tmid=fillData[i].topMid
            const bleft=fillData[i].botLeft
            const bright=fillData[i].botRight
            const bmid=fillData[i].botMid
             const voice=fillData[i].sound
            
             const voiceName=fillData[i].soundName
     
            this.load.audio(voiceName,voice)
     
            const tleftname=fillData[i].topLeftName
            const trightname=fillData[i].topRightName
            const tmidname=fillData[i].topMidName
            const bleftname=fillData[i].botLeftName
            const brightname=fillData[i].botRightName
            const bmidname=fillData[i].botMidName
     
            const mainImage=fillData[i].main
            const mainImageName=fillData[i].mainName
           
            this.load.image(mainImageName,mainImage)
     
            if(tleft && tleftname){
             this.load.image(tleftname,tleft)
            }
     
            if(tright && trightname){
             this.load.image(trightname,tright)
            }
            if(tmid && tmidname){
                this.load.image(tmidname,tmid)
               }
            if(bleft && bleftname){
             this.load.image(bleftname,bleft)
            }
            if(bright && brightname){
             this.load.image(brightname,bright)
            }
            if(bmid && bmidname){
                this.load.image(bmidname,bmid)
               }
        
     
         }

     }

    create(){
        this.add.image(10,100,'gameBg').setOrigin(0,0)
        this.player=this.physics.add.image(471, 305, 'mazeAtlas', 'rightMonkey.png').setDisplaySize(34,34);

        //gameImages
        const tleftname=fillData[this.gameNo].topLeftName
        const trightname=fillData[this.gameNo].topRightName
        const tmidname=fillData[this.gameNo].topMidName
        const bleftname=fillData[this.gameNo].botLeftName
        const brightname=fillData[this.gameNo].botRightName
        const bmidname=fillData[this.gameNo].botMidName
        const mainName=fillData[this.gameNo].mainName


        this.centerImage=this.add.image(490,397,mainName).setDisplaySize(65,65)
        this.centerBox = this.add.graphics();
        this.centerBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
        this.centerBox .strokeRoundedRect(459, 365, 65, 65, 10);

        if(tleftname){
          
            this.topLeftImage=this.physics.add.image(83,173,tleftname).setDisplaySize(65,65).setImmovable(true)
            this.physics.add.collider(this.player,this.topLeftImage,(()=>this.collision(this.topLeftImage,this.tLeftBox)),undefined,this)
            this.tLeftBox = this.add.graphics();
            this.tLeftBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
            this.tLeftBox .strokeRoundedRect(50, 140, 65, 65, 10);
    
    
        }
    
        if(trightname){
            this.topRightImage=this.physics.add.image(897,173,trightname).setDisplaySize(65,65).setImmovable(true)
            this.physics.add.collider(this.player,this.topRightImage,(()=>this.collision(this.topRightImage,this.tRightBox)),undefined,this)
            this.tRightBox = this.add.graphics();
            this.tRightBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
            this.tRightBox .strokeRoundedRect(865, 140, 65, 65, 10);
    
    
        }

        if(tmidname){
            this.topMidImage=this.physics.add.image(490,173,tmidname).setDisplaySize(65,65).setImmovable(true)
            this.physics.add.collider(this.player,this.topMidImage,(()=>this.collision(this.topMidImage,this.tMidBox)),undefined,this)
            this.tMidBox = this.add.graphics();
            this.tMidBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
            this.tMidBox .strokeRoundedRect(459, 140, 65, 65, 10);
    
    
        }
    
        if(bleftname){
            this.botLeftImage=this.physics.add.image(83,617,bleftname).setDisplaySize(65,65).setImmovable(true)
            this.physics.add.collider(this.player,this.botLeftImage,(()=>this.collision(this.botLeftImage,this.bLeftBox)),undefined,this)
            this.bLeftBox = this.add.graphics();
            this.bLeftBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
            this.bLeftBox .strokeRoundedRect(50, 585, 65, 65, 10);
    
    
        }
    
        if(brightname){
            this.botRightImage=this.physics.add.image(897,617,brightname).setDisplaySize(65,65).setImmovable(true)
            this.physics.add.collider(this.player,this.botRightImage,(()=>this.collision(this.botRightImage,this.bRightBox)),undefined,this)
            this.bRightBox = this.add.graphics();
            this.bRightBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
            this.bRightBox .strokeRoundedRect(865, 585, 65, 65, 10);
    
    
        }

        if(bmidname){
            this.botMidImage=this.physics.add.image(490,617,bmidname).setDisplaySize(65,65).setImmovable(true)
            this.physics.add.collider(this.player,this.botMidImage,(()=>this.collision(this.botMidImage,this.bMidBox)),undefined,this)
            this.bMidBox = this.add.graphics();
            this.bMidBox .lineStyle(2, 0x1481B8); // 4px thickness, blue border
            this.bMidBox .strokeRoundedRect(459, 585, 65, 65, 10);
    
    
        }

        //keyborad
        if(this.input.keyboard){
            this.cursors=this.input.keyboard.createCursorKeys()
    
        }

        //creating Blocks function
        this.blocks = this.physics.add.staticGroup();
        // Reusable function to create blocks in a row or column
        const createBlocks = (
          startX: number,
          startY: number,
          count: number,
          incrementX: number,
          incrementY: number
        ) => {
          for (let i = 0; i < count; i++) {
            const block = this.blocks!.create(startX, startY,'mazeAtlas', 'block.png').setDisplaySize(35,35);
            block.refreshBody()
            
            startX += incrementX;
            startY += incrementY;
          }
        };

        //Using CreatBlocks function
        const space=37
        //First Row & twelveth
           createBlocks(139, 192, 1, 37, 0); 
           createBlocks(213, 192, 2, 37, 0); 
           createBlocks(324, 192, 2, 37, 0); 
           createBlocks(435, 192, 1, 37, 0); 
           createBlocks(546, 192, 1, 37, 0); 
           createBlocks(620, 192, 2, 37, 0); 
           createBlocks(731, 192, 2, 37, 0); 
           createBlocks(842, 192, 1, 37, 0); 

           createBlocks(139, 601, 1, 37, 0); 
           createBlocks(213, 601, 2, 37, 0); 
           createBlocks(324, 601, 2, 37, 0); 
           createBlocks(435, 601, 1, 37, 0); 
           createBlocks(546, 601, 1, 37, 0); 
           createBlocks(620, 601, 2, 37, 0); 
           createBlocks(731, 601, 2, 37, 0); 
           createBlocks(842, 601, 1, 37, 0); 

        //Second Row and eleventh
        createBlocks(102, 229, 1, 37, 0); 
        createBlocks(102+(37*10),229,2,37,0)
        createBlocks(102+(37*21), 229, 1, 37, 0); 

        createBlocks(102, 564, 1, 37, 0); 
        createBlocks(102+(37*10),564,2,37,0)
        createBlocks(102+(37*21), 564, 1, 37, 0); 

        //third Row & ten
        const thirdX=176;
        const thirdY=268
        const tenthY=527
        createBlocks(thirdX,thirdY,3,space,0)
        createBlocks(thirdX+(space*4),thirdY,3,space,0)
        createBlocks(thirdX+(space*8),thirdY,2,space,0)
        createBlocks(thirdX+(space*11),thirdY,3,space,0)
        createBlocks(thirdX+(space*15),thirdY,3,space,0)

        createBlocks(thirdX,tenthY,3,space,0)
        createBlocks(thirdX+(space*4),tenthY,3,space,0)
        createBlocks(thirdX+(space*8),tenthY,2,space,0)
        createBlocks(thirdX+(space*11),tenthY,3,space,0)
        createBlocks(thirdX+(space*15),tenthY,3,space,0)

//24
        //fourthRow & nine
        const fourthX=102
        const fourthY= 305
        const ninthY=490
        createBlocks(fourthX,fourthY,1,space,0)
        createBlocks(fourthX+(space*21),fourthY,1,space,0)

        createBlocks(fourthX,ninthY,1,space,0)
        createBlocks(fourthX+(space*21),ninthY,1,space,0)

        //fifthRow & eight
        const fifthX=102
        const fifthY= 342
        const eightY= 453
        createBlocks(fifthX,fifthY,1,space,0)
        createBlocks(fifthX+(space*3),fifthY,1,space,0)
        createBlocks(fifthX+(space*5),fifthY,1,space,0)
        createBlocks(fifthX+(space*7),fifthY,8,space,0)
        createBlocks(fifthX+(space*16),fifthY,1,space,0)
        createBlocks(fifthX+(space*18),fifthY,1,space,0)
        createBlocks(fifthX+(space*21),fifthY,1,space,0)

        createBlocks(fifthX,eightY,1,space,0)
        createBlocks(fifthX+(space*3),eightY,1,space,0)
        createBlocks(fifthX+(space*5),eightY,1,space,0)
        createBlocks(fifthX+(space*7),eightY,8,space,0)
        createBlocks(fifthX+(space*16),eightY,1,space,0)
        createBlocks(fifthX+(space*18),eightY,1,space,0)
        createBlocks(fifthX+(space*21),eightY,1,space,0)

        //sixthRow & seven
        const sixthX=139
        const sixthY= 379
        const seventhY=416
        createBlocks(sixthX,sixthY,1,space,0)
        createBlocks(sixthX+(space*2),sixthY,1,space,0)
        createBlocks(sixthX+(space*4),sixthY,1,space,0)
        createBlocks(sixthX+(space*6),sixthY,1,space,0)
        createBlocks(sixthX+(space*13),sixthY,1,space,0)
        createBlocks(sixthX+(space*15),sixthY,1,space,0)
        createBlocks(sixthX+(space*17),sixthY,1,space,0)
        createBlocks(sixthX+(space*19),sixthY,1,space,0)

        createBlocks(sixthX,seventhY,1,space,0)
        createBlocks(sixthX+(space*2),seventhY,1,space,0)
        createBlocks(sixthX+(space*4),seventhY,1,space,0)
        createBlocks(sixthX+(space*6),seventhY,1,space,0)
        createBlocks(sixthX+(space*13),seventhY,1,space,0)
        createBlocks(sixthX+(space*15),seventhY,1,space,0)
        createBlocks(sixthX+(space*17),seventhY,1,space,0)
        createBlocks(sixthX+(space*19),seventhY,1,space,0)


        //collision with block
        this.physics.add.collider(this.player,this.blocks);






    }

    update(){
        if(this.cursors && this.player){
            if(this.cursors.left.isDown && this.player.x >=65){
                this.player?.setTexture('mazeAtlas', 'leftMonkey.png')
                this.player?.setVelocityX(-200)
            }else if(this.cursors.right.isDown && this.player.x <=910){
                this.player?.setTexture('mazeAtlas', 'rightMonkey.png')
                this.player?.setVelocityX(200)
    
            }else if(this.cursors.up.isDown && this.player.y >=156){
                console.log(this.player.x)
                this.player?.setVelocityY(-200)
            }else if (this.cursors.down.isDown && this.player.y <=633){
                this.player?.setVelocityY(200)
            }else{
                this.player?.setVelocity(0)
            }
        }
    }


    collision(name:Phaser.Physics.Arcade.Image|null,border: Phaser.GameObjects.Graphics|null):void{
    
         name?.destroy()
         border?.destroy()
       
    
      }
}