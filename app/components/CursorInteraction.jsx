import React, { useState } from 'react';
import { Checkbox } from '@nextui-org/checkbox';
import Image from 'next/image';

const CursorInteraction = () => {
  // State to track selected IDs
  const [selectedIds, setSelectedIds] = useState([]);


  const data = [
    {
      id: 0,
      name: 'Aung Aung',
      profile: '/assets/profile.svg',
    },
    {
      id: 1,
      name: 'Maung Maung',
      profile: '/assets/profile.svg',
    },
    {
      id: 2,
      name: 'Kyaw Kyaw',
      profile: '/assets/profile.svg',
    },
    {
      id: 3,
      name: 'Mya Aung',
      profile: '/assets/profile.svg',
    },
    {
      id: 4,
      name: 'Ba Aung',
      profile: '/assets/profile.svg',
    },
  ];
  


  // Function to handle checkbox changes
  const handleCheckboxChange = (id, isSelected) => {
    setSelectedIds((prev) =>
      isSelected ? [...prev, id] : prev.filter((selectedId) => selectedId !== id)
    );
  };
  const handleCancel = () => {
    setSelectedIds([]); 
  };
  
  return (
    <div className="bg-white w-[920px] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="flex justify-center items-center p-3 gap-3">
        <Image width={24} height={24} src="/assets/cursor.svg" alt="cursor icon" />
        <p className="text-black text-[24px] font-bold">Manage the Student Interaction</p>
        <Image width={24} height={24} src="/assets/cursor.svg" alt="cursor icon" />
      </div>

   

      {/* Student Cards Section */}
      <div className="flex flex-wrap gap-7 justify-start items-center p-4 w-full">
        {data.map((student) => (
          <div
            key={student.id}
            className={`p-4 bg-[#F4F5F6] w-[48%] flex gap-3 items-center rounded-md ${
              selectedIds.includes(student.id) && 'border-x-1 border-t-1 border-b-4 border-[#009DEB]'
            }`}
          >
            <Checkbox
              classNames={{
                wrapper: 'bg-white border-red-200',
                icon: 'bg-white w-[80%] h-[80%] rounded-[3px] text-[#009DEB]',
              }}
              radius="sm"
              size="lg"
              color="default"
              className="accent-white"
              isSelected={selectedIds.includes(student.id)}
              onValueChange={(isSelected) => handleCheckboxChange(student.id, isSelected)}
            />
            <Image width={48} height={48} src={student.profile} alt="profile" />
            <p className="text-black">{student.name}</p>
          </div>
        ))}
      </div>


     {/* Button Section */}
        <div className='flex  gap-5 justify-start items-center p-4 w-full'>
            <button className='border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[48%] text-[#1481B8] p-2 rounded-xl' onClick={()=>handleCancel()}>Cancel</button>
            <button className='border-x-1 border-t-1 border-b-4 border-[#1481B8] w-[48%] text-white p-2 rounded-xl bg-[#009DEB]' onClick={()=>  console.log(selectedIds.map(id => data.find(student => student.id === id)))
}>Save</button>

        </div>

    </div>
  );
};

export default CursorInteraction;
