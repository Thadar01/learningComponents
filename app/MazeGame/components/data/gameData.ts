type dataType={
    topLeft?:string,
    topRight?:string,
    topMid?:string,
    botLeft?:string,
    botRight?:string,
    botMid?:string,
    topLeftName?:string,
    topRightName?:string,
    topMidName?:string,
    botLeftName?:string,
    botRightName?:string,
    botMidName?:string,
    ques:string,
    sound:string,
    soundName:string
    main:string,
    mainName:string
  
}

 const fillData:dataType[]=[
    {
        topLeft:'/assets/FillingWords/fruits/apple.png',
        topRight:'/assets/FillingWords/fruits/banana.png',
        topMid:'/assets/FillingWords/fruits/mango.png',
        botRight:'/assets/FillingWords/fruits/kiwi.png',
        botLeft:'/assets/FillingWords/fruits/watermelon.png',
        botMid:'/assets/FillingWords/fruits/strawberry.png',
        topLeftName:'apple',
        topRightName:'banana',
        topMidName:'mango',
        botRightName:'kiwi',
        botLeftName:'watermelon',
        botMidName:'stareberry',
        
        main:'/assets/FillingWords/fruits/apple.png',
        ques:'apple',
        sound:'/assets/FillingWords/fruits/Apple.mp3',
        soundName:'Apple',
        mainName:'apple',
     
     
    },
    {
        topLeft:'/assets/FillingWords/fruits/orange.png',
        topLeftName:'orange',

        main:'/assets/FillingWords/fruits/kiwi.png',
        mainName:'kiwi',

        ques:'kiwi',
        sound:'/assets/FillingWords/fruits/Kiwi.mp3',
        soundName:'Kiwi',
        botLeft:'/assets/FillingWords/fruits/kiwi.png',
        botLeftName:'kiwi',
      
    },
    {
        topLeft:'/assets/FillingWords/fruits/watermelon.png',
        main:'/assets/FillingWords/fruits/peach.png',
        topLeftName:'watermelon',
        ques:'peach',
        sound:'/assets/FillingWords/fruits/Peach.mp3',
        soundName:'Peach',
        mainName:'peach',
        botRight:'/assets/FillingWords/fruits/peach.png',
        botRightName:'peach',
   
    },
  

]

export default fillData