'use client'
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import React, { useEffect } from 'react'

const Avatar = () => {

    const {rive, RiveComponent} = useRive({
        src: "/assets/aiavatar.riv",
        artboard: "AvatarArtboard",
        stateMachines: "State Machine 1",
        autoplay: true,
       
      });


      const isTalking=useStateMachineInput(rive,'State Machine 1', 'isTalking')
      const isEyeMove=useStateMachineInput(rive,'State Machine 1', 'isEyeMove')
      const isDisgust=useStateMachineInput(rive,'State Machine 1', 'isDisgust')



      useEffect(()=>{
        if(rive && isTalking && isEyeMove && isDisgust){
            isTalking.value=true
            isEyeMove.value=true
            // isDisgust.value=true
        }
      },[rive,isTalking])
  return (
    <div className="w-[500px] h-[100vh]">    
 
     <RiveComponent style={{ width: '100%', height: '100%' }}  />
</div>
  )
}

export default Avatar