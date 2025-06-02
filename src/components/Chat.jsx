import React from "react";
import Person from "./Person";
import Messages from "./Messages";

const Chat = () => {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <div className="flex">
          <div className="person w-[60vh]">
            <Person />
          </div>
          <div className="messages w-[140vh]">
            <Messages />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
