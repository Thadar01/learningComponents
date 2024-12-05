import React, { useState } from "react";
import Image from "next/image";

const ChooseStudent = () => {
  // State to track the selected student's ID
  const [selectedId, setSelectedId] = useState(null);

  const data = [
    { id: 0, name: "Aung Aung", profile: "/assets/profile.svg" },
    { id: 1, name: "Maung Maung", profile: "/assets/profile.svg" },
    { id: 2, name: "Kyaw Kyaw", profile: "/assets/profile.svg" },
    { id: 3, name: "Mya Aung", profile: "/assets/profile.svg" },
    { id: 4, name: "Ba Aung", profile: "/assets/profile.svg" },
  ];

  const handleRadioChange = (id) => {
    setSelectedId(id);
  };

  const handleCancel = () => {
    setSelectedId(null); // Reset the selected ID (unselect all radios)
  };

  return (
    <div className="bg-white w-[920px] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="flex justify-center items-center p-3 gap-3">
        <Image
          width={24}
          height={24}
          src="/assets/cursor.svg"
          alt="cursor icon"
        />
        <p className="text-black text-[24px] font-bold">
         Choose Student
        </p>
        <Image
          width={24}
          height={24}
          src="/assets/cursor.svg"
          alt="cursor icon"
        />
      </div>

      {/* Student Cards Section */}
      <div className="flex flex-wrap gap-7 justify-start items-center p-4 w-full">
        {data.map((student) => (
          <div
            key={student.id}
            className={`p-4 bg-[#F4F5F6] w-[48%] flex gap-3 items-center rounded-md ${
              selectedId === student.id &&
              "border-x-1 border-t-1 border-b-4 border-[#009DEB]"
            }`}
          >
            <input
              type="radio"
              name="student"
              value={student.id}
              checked={selectedId === student.id}
              onChange={() => handleRadioChange(student.id)}
              className="cursor-pointer  w-5 h-5 "
            />
            <Image width={48} height={48} src={student.profile} alt="profile" />
            <p className="text-black">{student.name}</p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex gap-5 justify-start items-center p-4 w-full">
        <button
          className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[48%] text-[#1481B8] p-2 rounded-xl"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button
          className="border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[48%] text-white p-2 rounded-xl bg-[#009DEB]"
          onClick={() => console.log("Selected Student ID:", selectedId)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChooseStudent;
