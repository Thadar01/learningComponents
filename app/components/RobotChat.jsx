"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const RobotChat = () => {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isCross, setIsCross] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="h-screen bg-[#142852] w-[358px] flex flex-col justify-between">
      {/* Robot */}
      <div className="flex flex-col justify-center items-center h-[25%] border-b-1 border-[#5A6A72] relative">
        <button>
          <IoIosCloseCircle className=" text-white text-[30px] absolute right-4 top-4" />
        </button>
        <Image width={140} height={120} src="/assets/robot.svg" />
      </div>

      {/* Chat Content */}
      <div className=" h-[65%] flex flex-col justify-end p-3 gap-3">
        <div className="border-1 border-[#5A6A72] rounded-md w-full p-3 flex  items-center gap-3 relative">
          <p className="text-white font-semibold w-[88%] flex justify-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati, quisquam impedit illo eum voluptas est sint, deserunt fugit autem
          </p>
          <div className="w-[30] h-[30] rounded-full bg-green-600 flex justify-center items-center absolute right-2 bottom-2">
            <p className="text-white text-[12px]">KH</p>
          </div>
        </div>
        <div className="bg-[#5A6A72] rounded-md w-full p-3 flex  items-center gap-3 relative">
          <Image width={35} height={35} src='/assets/robot.svg' className="absolute left-2 bottom-3"/>
          <p className="text-white font-semibold w-[80%] ml-9 flex ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ut sed, blanditiis, itaque sit autem temporibus quod non quaerat accusantium repudiandae dolore voluptates,
          </p>
          <div className="w-[30] h-[30] rounded-full bg-[#009DEB] flex justify-center items-center ">
          <HiMiniSpeakerWave className="text-white text-[20px]"/>
          </div>
        </div>
      </div>
      {/*Microphone & TextInput*/}
      <div className="p-2 flex justify-between mb-3 h-[10%]">
        {isKeyboard ? (
          <>
            <div className="w-[270px] h-[60px] bg-white border-b-4 border-t-1 border-x-1 border-[#1481B8] rounded-xl flex p-1">
              <textarea
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Messages"
                className="w-[90%] p-3 rounded-xl outline-none text-[#5A6A72] font-bold text-[14px] leading-6 overflow-y-auto resize-none max-h-[200px] scrollbar-hide"
                onFocus={() => setIsCross(true)}
                onBlur={() => !text && setIsCross(false)}
              />
              {isCross ? (
                <>
                  {" "}
                  <button className="p-1">
                    <IoCloseOutline
                      className="text-[#5A6A72] text-[25px]"
                      onClick={() => {
                        setText("");
                        setIsCross(false);
                      }}
                    />
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button className="p-1" onClick={() => setIsKeyboard(false)}>
                    <FaMicrophone className="text-[#15B1FF] text-[25px]" />
                  </button>
                </>
              )}
            </div>
            <button className=" border-b-4 border-t-1 border-x-1 border-[#1481B8]  w-[60px] h-[60px] rounded-lg flex justify-center items-center ">
              <BsSendFill className="text-white text-[25px]" />
            </button>
          </>
        ) : (
          <>
            <button className="p-5 bg-[#009DEB] border-b-4 border-t-1 border-x-1 border-[#1481B8] w-[270px] h-[60px] rounded-xl flex justify-center items-center gap-2">
              <FaMicrophone className="text-white text-[20px]" />
              <p className="text-white font-bold text-[18px]">Tap to Speak</p>
            </button>
            <button
              className=" border-b-4 border-t-1 border-x-1 border-[#1481B8]  w-[60px] h-[60px] rounded-lg flex justify-center items-center "
              onClick={() => setIsKeyboard(true)}
            >
              <MdOutlineKeyboardAlt className="text-white text-[25px]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RobotChat;
