"use client";
import React, { useState } from "react";
import Image from "next/image";

const TeacherEdit = ({ onClose }) => {
  const [name, setName] = useState("Daw Aye Aye");
  const [bio, setBio] = useState("Professional English Teacher");
  const [year, setYear] = useState(4);
  const [about,setAbout]=useState(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")

  return (
    <div className="bg-white w-[100%] flex flex-col justify-center items-center p-5 gap-3 rounded-lg shadow-md h-[100%]">
      <p className="font-bold text-[24px]">Edit Profile Information</p>
      <div className="relative">
        <Image
          width={100}
          height={100}
          src="/assets/profile.svg"
          alt="Teacher Profile"
        />
        <button className="bg-white border-1 border-sky-400 rounded-full w-[24px] h-[24px] flex justify-center items-center absolute bottom-0 right-1">
          <div className="bg-[#009DEB] rounded-t-[4px] rounded-br-[4px] p-1 w-[14px] h-[14px]">
            <Image
              width={10}
              height={10}
              src="/assets/whiteEditPen.svg"
              alt="Edit Profile"
            />
          </div>
        </button>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-[47%] gap-3 flex flex-col">
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-bold">Name</p>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="w-full p-3 border-b-5 border-t-2 border-x-2 border-[#1481B8] rounded-xl outline-none text-[#5A6A72] font-bold text-[14px]"
              />
              <button
                className="absolute top-4 right-3"
                onClick={() => setName("")}
              >
                <Image
                  width={10}
                  height={10}
                  src="/assets/cross.svg"
                  alt="Clear Name"
                />
              </button>
            </div>
          </div>

          {/* Bio Field */}
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-bold">Bio</p>
            <div className="relative">
              <input
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Enter Your Bio"
                className="w-full p-3 border-b-5 border-t-2 border-x-2 border-[#1481B8] rounded-xl outline-none text-[#5A6A72] font-bold text-[14px]"
              />
              <button
                className="absolute top-4 right-3"
                onClick={() => setBio("")}
              >
                <Image
                  width={10}
                  height={10}
                  src="/assets/cross.svg"
                  alt="Clear Bio"
                />
              </button>
            </div>
          </div>

          {/* Experience Field */}
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-bold">Experience</p>
            <div className="relative">
              <input
                type="text"
                value={`${year} Year${year > 1 ? "s" : ""}`} // Handle pluralization
                disabled
                placeholder="Enter Years of Experience"
                className="w-full p-3 border-b-5 border-t-2 border-x-2 border-[#1481B8] rounded-xl outline-none text-[#5A6A72] font-bold text-[14px]"
              />
              <button
                className="absolute top-2 right-3"
                onClick={() => setYear(year + 1)}
              >
                <Image
                  width={12}
                  height={12}
                  src="/assets/upArrow.svg"
                  alt="Clear Experience"
                />
              </button>
              <button
                className="absolute top-7 right-3"
                onClick={() => setYear(year - 1)}
              >
                <Image
                  width={12}
                  height={12}
                  src="/assets/downArrow.svg"
                  alt="Clear Experience"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[47%] gap-2 flex flex-col">
          <p className="text-[16px] font-bold">About</p>
          <textarea
            type="text"
            onChange={(e) => setAbout(e.target.value)} 
            rows={4}
            value={about} // Handle pluralization
            className="w-full h-full border-b-4 border-t-1 border-x-1 border-[#1481B8] rounded-xl p-5 outline-none text-[#5A6A72] font-bold text-[14px] leading-6 overflow-hidden resize-none"          />
         
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <button className="w-[47%] border-b-4 border-t-1 border-x-1 border-[#1481B8] h-[60px] rounded-xl font-bold text-[18px] text-[#009DEB]">
          Cancle
        </button>
        <button
          className="w-[47%] h-[60px] border-b-4 border-t-1 border-x-1 border-[#1481B8] rounded-xl bg-[#009DEB] font-bold text-[18px] text-white"
          onClick={onClose}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TeacherEdit;
