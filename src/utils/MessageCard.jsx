import React from "react";

const MessageCard = ({ message1, message2, styling = "mt-4" }) => {
  return (
    <>
      <div className={`${styling} flex justify-between items-center px-4`}>
        <p className="bg-[#40444B] text-white rounded-lg px-7.5 py-2">
          {message1}
        </p>
        <p className="bg-[#7289DA] text-white rounded-lg px-7.5 py-2 translate-y-13">
          {message2}
        </p>
      </div>
    </>
  );
};

export default MessageCard;
