import Image from "next/image";
import React from "react";
import TeacherEdit from "./TeacherEdit";
import {Modal,ModalContent, useDisclosure} from '@nextui-org/modal'

const TeacherProfile = () => {
  const {isOpen,onOpen,onOpenChange,onClose}=useDisclosure()

  return (
    <div className="p-5 px-9 flex flex-col gap-7 h-screen">
      <div className="flex justify-between">
        <p className="text-[28px] font-bold">Profile Information</p>
        <button className="bg-[#009DEB] w-[208px] h-[68px] rounded-xl border-b-4 border-t-1 border-x-1 border-[#1481B8] flex justify-center items-center gap-2 hover:bg-[#3992bf]" onClick={onOpen}>
          <div className="bg-white rounded-t-lg rounded-br-lg p-1 rounded-bl-sm">
            <Image width={20} height={20} src="/assets/editPen.svg" />
          </div>
          <p className="text-[20px] text-white font-bold">Edit Profile</p>
        </button>
      </div>
      <div className="flex gap-5">
        <div className="bg-white shadow-lg w-[30%] rounded-lg flex flex-col gap-5 justify-center items-center p-6">
          <div className="flex gap-4 justify-center items-center">
            <Image width={100} height={100} src="/assets/profile.svg" />
            <div className="flex flex-col gap-2">
              <p className="text-[24px] font-bold">Teacher Aye Aye</p>
              <p className="text-[#5A6A72] text-[16px] font-bold">
                Professional English Teacher
              </p>
            </div>
          </div>
          <div className="bg-[#F4F5F6] flex w-[95%] p-5 justify-around rounded-lg">
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="font-bold text-[18px]">Experience</p>
              <p className="font-bold text-[18px] text-[#5A6A72]" >4 Years</p>
            </div>
            <div className="w-[2px] h-[60px] bg-[#E2E7E9]" />
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="font-bold text-[18px]">Students</p>
              <p className="font-bold text-[18px] text-[#5A6A72]" >120</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg w-[70%] rounded-lg flex flex-col gap-5   p-6">
          <p className="font-bold text-[24px]">About</p>
          <p className="text-[16px] font-bold text-[#5A6A72] leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing.
          </p>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='opaque' hideCloseButton size="4xl" scrollBehavior="inside">
          <ModalContent>
          
              <TeacherEdit onClose={onClose}/>
            
          </ModalContent>
        </Modal>
    </div>
  );
};

export default TeacherProfile;
