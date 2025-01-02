import Phaser from "phaser";
import fillingData from "../data/fillingData";

export default class HardFilling extends Phaser.Scene {
  // dataWords: string[] = ['run', 'yellow', 'green', 'apple', 'orange', 'cup'];
  currentWordIndex: number = 0;
  matchedLetters: string[] = [];
  clickedButtons: Set<string> = new Set();
  wordSlots: Phaser.GameObjects.Text[] = [];
  wordCon: Phaser.GameObjects.Container[] = [];
  alphabetButtons: Phaser.GameObjects.Container[] = [];
  balloon: Phaser.Physics.Arcade.Image | null = null;
  isDown: boolean = false;
  isClicked: boolean = false;
  timerText: Phaser.GameObjects.Text | null = null;
  remainingTime: number = 60; // 1 minute in seconds
  timerEvent: Phaser.Time.TimerEvent | null = null;
  life:number=3;
  lifeText:Phaser.GameObjects.Text|null=null
 score:number=0
 scoreText:Phaser.GameObjects.Text|null=null
 image:Phaser.GameObjects.Image|null=null
 soundIcon:Phaser.GameObjects.Image|null=null
 slotBg:Phaser.GameObjects.Graphics|null=null
 water:Phaser.GameObjects.Image|null=null
 crying:Phaser.GameObjects.Image|null=null


 

  constructor() {
    super('scene');
  }

  preload() {
    this.load.image('bg','/assets/FillingWords/Bg2.png')
    this.load.image('balloon', '/assets/FillingWords/HotAirBalloon.png');

    this.load.image('sound', '/assets/FillingWords/sound.png');
    this.load.image('heart','/assets/ShootingGame/heart.png')
    this.load.image('water','/assets/FillingWords/Water.png')
    this.load.image('crying','/assets/FillingWords/crying.png')



    for (let i = 0; i < fillingData.length; i++) {
      this.load.audio(fillingData[i].name, fillingData[i].sound);
    }
  }

  create() {
    const bg = this.add.image(-40, -20, 'bg').setDisplaySize(1150,750);
    bg.setOrigin(0, 0); // Set origin to top-left corner
  
       
    this.balloon = this.physics.add.image(150, 200, 'balloon').setScale(0.8,0.8);


    

   
    this.lifeText=this.add.text(910,40,`${this.life}`,{
      color:'#FFFFFF',
      fontSize:'20px',
      fontFamily:'Arial Bold'
    })
    const lifebox=this.add.graphics();
    lifebox.fillStyle(0x000000,0.4);
    lifebox.fillRoundedRect(
        850,
        30,
        100,
        45,
        10
    )
    this.add.image(880,55,'heart').setDepth(1)
    this.lifeText.setDepth(1)

    this.scoreText=this.add.text(100,35,`Score: ${this.score}`,{
      color:'#FFFFFF',
      fontSize:'26px',
      fontFamily:'Arial Bold'
    })
    const scoreBox=this.add.graphics();
    scoreBox.fillStyle(0x000000,0.4);
    scoreBox.fillRoundedRect(
        80,
        30,
        170,
        45,
        10
    )
    this.scoreText.setDepth(1)

    
 


    this.soundIcon=this.add.image(720,220,'sound').setScale(1.3,1.3)
    this.soundIcon.setInteractive().on('pointerdown', this.playCurrentSound, this);


    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const buttonStyle = { fontSize: '20px', color: '#FFFFFF', fontFamily: 'Arial Bold' };

// Button dimensions and spacing
const buttonWidth = 40;
const buttonHeight = 40;
const buttonSpacing = 10;

// Maximum buttons per row
const maxButtonsPerRow = 9;

// Initial X and Y positions
const buttonXStart = 500;
const buttonYStart = 400;

alphabet.forEach((letter, index) => {
  const row = Math.floor(index / maxButtonsPerRow);
  const col = index % maxButtonsPerRow;

  // Calculate X and Y positions for the button
  let x = buttonXStart + col * (buttonWidth + buttonSpacing);
  const y = buttonYStart + row * (buttonHeight + buttonSpacing +10);

  // Center the last row horizontally
  const totalRows = Math.ceil(alphabet.length / maxButtonsPerRow);
  if (row === totalRows - 1) {
     x = 530 + col * (buttonWidth + buttonSpacing);
  }

  // Create button background
  const buttonBg = this.add.graphics();
  buttonBg.fillStyle(0x009DEB, 1);
  buttonBg.lineStyle(4, 0x1481B8);
  buttonBg.strokeRoundedRect(0, 1, buttonWidth, buttonHeight, 10);
  buttonBg.fillRoundedRect(0, 0, buttonWidth, buttonHeight, 10);

  // Create button text
  const buttonText = this.add.text(buttonWidth / 2, buttonHeight / 2, letter, buttonStyle)
    .setOrigin(0.5);

  // Create interactive container for button
  const button = this.add.container(x, y, [buttonBg, buttonText])
    .setSize(buttonWidth,buttonHeight)
    .setInteractive()
    .on('pointerdown', () => this.handleLetterClick(letter, button));

    

  // Add scaling effect on click
  button.on('pointerdown', () => button.setScale(0.95));
  button.on('pointerup', () => button.setScale(1));

  // Store the button
  this.alphabetButtons.push(button);


    

   
    });


    this.displayWordSlots();
    this.startTimer();

    this.input.keyboard?.on('keydown', (event: KeyboardEvent) => {
      const letter = event.key.toLowerCase();
      if (alphabet.includes(letter) && !this.clickedButtons.has(letter)) {
        const button = this.alphabetButtons.find((btn) => {
          const buttonText = btn.list[1] as Phaser.GameObjects.Text;
          return buttonText.text === letter;
        });
        if (button) this.handleLetterClick(letter, button);
      }
    });
  }

  playCurrentSound() {
    if (this.soundIcon && this.currentWordIndex >= 0 && this.currentWordIndex < fillingData.length) {
      // Play the sound related to the current index
      const soundName = fillingData[this.currentWordIndex].name;
      
      this.sound.play(soundName); // Play the sound
    }
  }

  startTimer() {
    if (this.timerEvent) {
      this.timerEvent.remove(); // Remove previous timer event
    }
  
    this.remainingTime = 180; // Reset timer to 1 minute for each new word
  
    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.remainingTime--;
        const minutes = Math.floor(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        if (this.timerText) {
          this.timerText.setText(`00:0${minutes}:${seconds.toString().padStart(2, '00')}`);
        }
  
        if (this.remainingTime <= 0) {
          this.timerEvent?.remove(); // Stop the timer when time is up
          this.endGame(); // Call endGame when time runs out
        }
      },
      loop: true,
    });
  }
  
  endGame() {
    console.log('Time is up!');
    
    if (this.timerEvent) {
      this.timerEvent.remove();
    }
  
    if(this.balloon?.y){
      const yvalue=Math.round(this.balloon.y)
      if(yvalue<=500){
        this.balloon?.setVelocityY(200)

      }else{
        this.balloon.setVelocityY(0)
      }
    }
  
    setTimeout(() => {
      this.balloon?.setVelocityY(0);
      this.resetBalloonPosition(); // Reset to original position
    }, 1500);
   
  }
  

  displayWordSlots() {
    const currentWord = fillingData[this.currentWordIndex].name;
    
    const boxX = 600; 
    const boxY = 130; // y-position of the rectangle
    const boxWidth = 250; // width of the rectangle
    const boxHeight = 150; // height of the rectangle
  
    // Slot spacing and individual slot width
    const slotWidth = 40;
    const slotSpacing = 50;
  
    // Calculate the total width needed for all word slots
    const totalSlotsWidth = currentWord.length * slotSpacing;
  
    // Calculate the starting X position to center the word slots inside the imageBox
    const slotXStart = boxX + (boxWidth - totalSlotsWidth) / 2;
  
    // Y position for the slots (just below the imageBox)
    const slotY = boxY + boxHeight + 20;
  
    // Destroy previous word slots and containers
    if (this.wordSlots) {
      this.wordSlots.forEach((slot) => slot.destroy());
    }
    this.wordSlots = [];
  
    if (this.wordCon) {
      this.wordCon.forEach((con) => con.destroy());
    }
    this.wordCon = [];
  
    // Destroy previous timer text if exists
    if (this.timerText) {
      this.timerText.destroy();
    }
  
    // Create the new timer text for this word
    const timerStyle = { fontSize: '26px', color: '#000000', fontFamily: 'Arial Bold' };
    this.timerText = this.add.text(500, 30, `00:03:00`, timerStyle);
  
    // Create word slots for each letter in the current word
    currentWord.split('').forEach((_, index) => {
      const x = slotXStart + index * slotSpacing;
  
      // Create the background for each slot
     this.slotBg = this.add.graphics();
      this.slotBg.fillStyle(0xFFFFFF, 1);
      this.slotBg.lineStyle(5, 0x5A6A72);
      this.slotBg.strokeRoundedRect(0, 3, slotWidth, slotWidth, 10);
      this.slotBg.fillRoundedRect(0, 2, slotWidth, slotWidth, 10);
  
      // Create the text for each slot
      const slotText = this.add.text(20, 20, '', {
        fontSize: '20px',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        align: 'center',
      }).setOrigin(0.5);
  
      // Create the container for each word slot and its text
      const wordSlot = this.add.container(x, slotY, [this.slotBg, slotText]);
      this.wordSlots.push(slotText);
      this.wordCon.push(wordSlot);
    });
  
    // Restart the timer for the new word
    this.startTimer();
  }
  stopWordSlots() {
    // Destroy word slots and containers
    if (this.wordSlots) {
      this.wordSlots.forEach((slot) => slot.setVisible(false));
    }
    this.wordSlots = [];
  
    if (this.wordCon) {
      this.wordCon.forEach((con) => con.setVisible(false));
    }
    this.wordCon = [];
  
    // Destroy timer text if exists
    if (this.timerText) {
      this.timerText.setVisible(false);
    }
  
    // Stop the timer
  }
  
  handleLetterClick(letter: string, button: Phaser.GameObjects.Container) {
    if (!this.isClicked) {
      this.clickedButtons.add(letter);
      const buttonBg = button.list[0] as Phaser.GameObjects.Graphics;
      buttonBg.clear();
      buttonBg.fillStyle(0x7C8E98, 1);
      buttonBg.lineStyle(4, 0x5A6A72);
      buttonBg.strokeRoundedRect(0, 1, 40, 40, 10);
      buttonBg.fillRoundedRect(0, 0, 40, 40, 10);

      const currentWord =  fillingData[this.currentWordIndex].name;
      if (currentWord.includes(letter)) {
        this.matchedLetters.push(letter);

        currentWord.split('').forEach((char, index) => {
          if (char === letter) {
            this.wordSlots[index].setText(char);

            const slotBg = this.wordCon[index].list[0] as Phaser.GameObjects.Graphics;
            slotBg.clear(); // Clear any previous styles
            slotBg.fillStyle(0xFFFFFF, 1); // Green for correct letter
            slotBg.lineStyle(4, 0x1481B8);
            slotBg.strokeRoundedRect(0, 1, 40, 40, 10);
            slotBg.fillRoundedRect(0, 0, 40, 40, 10);
          
          }
        });

     
     

        

        if (currentWord.split('').every((char) => this.matchedLetters.includes(char))) {
          if (this.currentWordIndex < fillingData.length - 1) {
            this.time.delayedCall(500, () => {
              this.currentWordIndex++;
              this.matchedLetters = [];
              this.clickedButtons.clear();
              this.displayWordSlots();
              this.resetAlphabetButtons();
              this.resetBalloonPosition();
              this.startTimer(); // Restart timer for the next word
              this.score=this.score+100
              this.image?.setTexture(fillingData[this.currentWordIndex].name)
              if(this.scoreText){
                this.scoreText.setText(`Score: ${this.score}`)

              }
            });
          } else {
            console.log('All words completed!');
            
            this.toResult()
          }
        }
      } else {
        if (this.balloon) {
          this.isClicked = true;
          this.balloon.setVelocityY(50);
          setTimeout(() => {
            this.balloon?.setVelocityY(0);
          }, 1000);

          setTimeout(() => {
            this.isClicked = false;
          }, 1200);
        }
      }
    }
  }

  resetBalloonPosition() {
    if (this.balloon) {
      this.tweens.add({
        targets: this.balloon,
        y: 200, // Target position
        duration: 1000, // Duration of the animation in milliseconds
        ease: 'Power2', // Easing function for smooth movement
      });
    }
  }

  resetAlphabetButtons() {
    this.alphabetButtons.forEach((btn) => {
      const buttonBg = btn.list[0] as Phaser.GameObjects.Graphics;
      buttonBg.clear();
      buttonBg.fillStyle(0x009DEB, 1);
  buttonBg.lineStyle(4, 0x1481B8);
  buttonBg.strokeRoundedRect(0, 1, 40, 40, 10);
  buttonBg.fillRoundedRect(0, 0, 40, 40, 10);
    });
  }

  collision() {
    this.crying=this.add.image(160,500,'crying').setScale(0.3,0.3)
    this.water=this.add.image(150,580,'water')
    this.balloon?.setVisible(false)
  

    setTimeout(()=> {
      this.crying?.setVisible(false)
      this.water?.setVisible(false)
    },700)

    setTimeout(()=>this.balloon?.setVisible(true),1200)


    if(this.currentWordIndex < fillingData.length && this.life !== 0 && this.life>0){
       this.currentWordIndex++  ;
        this.life--
        this.lifeText?.setText(`${this.life}`)

    }
    this.matchedLetters = [];
    this.clickedButtons.clear();
    this.displayWordSlots();
    this.resetAlphabetButtons();
    this.resetBalloonPosition();
    this.startTimer(); // Restart timer for the next word
    
    this.image?.setTexture(fillingData[this.currentWordIndex].name)
   

   
  }

  update() {
    if(this.balloon?.y){
      // console.log('yes')
      const yvalue=Math.round(this.balloon.y)
      console.log(yvalue)
      if(yvalue===500){
        this.collision()
      }
    }
    if(this.life===0){
      this.image?.setVisible(false)
      this.soundIcon?.setVisible(false)
      this.balloon?.setVisible(false)
      this.stopWordSlots()
      this.alphabetButtons.forEach(button => button.setInteractive(false));
      this.toResult()

      if (this.input.keyboard) {
        this.input.keyboard.removeAllListeners();  // Remove any existing keyboard listeners

      }
    }

  }


  toResult(){
    this.sound.stopAll();
    
    // Get the current score
    const score = this.score;

    // Check if there is an existing score in localStorage
    const storedScore = Number(localStorage.getItem('fillingHardScore'));

    // If there is no stored score or if the current score is higher, update the localStorage
    if (isNaN(storedScore) || storedScore < score) {
        localStorage.setItem('fillingHardScore', score.toString());
    }
    this.scene.stop()
    // Stop the scene and navigate to the result page with the score in the URL
    window.location.href = `/FillingWords/Result?score=${score}&difficulty=hard`;
  }
}
