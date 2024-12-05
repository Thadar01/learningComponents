import Image from "next/image";
import { useRive } from "@rive-app/react-canvas";

const WaitingRoom = () => {
  const {rive, RiveComponent} = useRive({
    src: "/assets/loading.riv",
    artboard: "Artboard",
    stateMachines: "State Machine 1",
    autoplay: true,
   
  });
  return (
    <div className="bg-[#142852] w-[485px] flex flex-col justify-center items-center border-1 border-[#5A6A72] rounded-xl">
      <div className="flex flex-col gap-6 justify-center items-center my-9">
        <div className="flex gap-2 justify-center items-center ">
          <Image
            width={44}
            height={44}
            src="/assets/profile.svg"
            alt="profile"
          />
          <p className="text-white text-[20px]">Kaung Htike San</p>
        </div>
        <div className="mt-5 w-full flex flex-col justify-center items-center gap-2">
          <div className="w-[34px] h-[34px]"> <RiveComponent style={{ width: '100%', height: '100%' }}  /></div>
            <p className="text-[#AFBAC0] text-[18px] font-bold">Please Wait</p>
        </div>
        <p className="text-[#AFBAC0] text-[18px] font-bold self-stretch">Classroom will start when the teacher arrives.</p>
      </div>
    </div>
  );
};

export default WaitingRoom;
