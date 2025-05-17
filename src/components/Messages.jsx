import React, { useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCallOutline, IoSend, IoVideocamOutline } from "react-icons/io5";
import MessageCard from "../utils/MessageCard";
import { RiGalleryLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";

const Messages = () => {
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <>
      <div className="h-screen bg-[#0F1012]">
        <div className="heading flex justify-between items-center shadow-sm pb-3 pt-12.5 pl-3 pr-6 bg-[#16181C]">
          <div className="flex items-center gap-4 cursor-pointer">
            <img
              className="h-12 w-12 rounded-full"
              src="images/shimanto.jpg"
              alt="logo"
            />
            <h5 className="text-lg font-semibold font-inter text-white">
              Shimanto Sarkar
            </h5>
          </div>
          <div className="flex items-center gap-4 text-2xl text-[#99AAB5]">
            <IoCallOutline className="cursor-pointer hover:text-[#7289DA]" />
            <IoVideocamOutline className="cursor-pointer hover:text-[#7289DA]" />
            <BsThreeDotsVertical className="cursor-pointer hover:text-[#7289DA]" />
          </div>
        </div>
        <div className="message overflow-y-auto h-[calc(100vh-180px)]">
          <MessageCard message1="Hi" message2="Hlw" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <MessageCard message1="Hi" message2="Hlw" styling="mt-17" />
          <div ref={messagesEnd} />
        </div>
        <div className="mt-2 ml-4 mr-6 bg-[#1E2124] px-3 py-4 flex items-center rounded-lg">
          <input
            className="w-full outline-none rounded-md pl-3 text-base font-normal font-inter text-white bg-transparent placeholder-[#99AAB5]"
            type="text"
            placeholder="Text Here"
          />
          <div className="emoji flex items-center gap-3 text-2xl text-[#99AAB5]">
            <GrEmoji className="cursor-pointer hover:text-[#7289DA] duration-300" />
            <RiGalleryLine className="cursor-pointer hover:text-[#7289DA] duration-300" />
            <IoSend className="cursor-pointer hover:text-[#7289DA] duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
