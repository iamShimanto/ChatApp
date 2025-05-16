import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCallOutline, IoSend, IoVideocamOutline } from "react-icons/io5";
import MessageCard from "../utils/MessageCard";
import { RiGalleryLine } from "react-icons/ri"
import { GrEmoji } from "react-icons/gr"

const Messages = () => {
  return (
    <>
      <div className="h-screen">
        <div className="heading flex justify-between items-center shadow-sm pb-3 pt-12.5 pl-3 pr-6">
          <div className="flex items-center gap-4 cursor-pointer">
            <img
              className="h-12 w-12 rounded-full"
              src="images/shimanto.jpg"
              alt="logo"
            />
            <h5 className="text-lg font-semibold font-inter text-black22">
              Shimanto Sarkar
            </h5>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <IoCallOutline className="cursor-pointer" />
            <IoVideocamOutline className="cursor-pointer" />
            <BsThreeDotsVertical className="cursor-pointer" />
          </div>
        </div>
        <div className="message">
          <MessageCard message1="Hi" message2="Hlw" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
        </div>
        <div className="mt-18 ml-4 mr-6 bg-[#F4F4F4] px-3 py-4 flex items-center">
          <input
            className="w-full outline-none rounded-md pl-3 text-base font-normal font-inter text-secondary bg-transparent"
            type="text"
            placeholder="Text Here"
          />
          <div className="emoji flex items-center gap-3 text-2xl text-primary">
            <GrEmoji className="cursor-pointer"/>
            <RiGalleryLine className="cursor-pointer"/>
            <IoSend className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
