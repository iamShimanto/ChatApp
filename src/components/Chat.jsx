import React from "react";
import Settings from "./Settings";
import Person from "./Person";
import Messages from "./Messages";

const Chat = () => {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <div className="main flex">
          <div className="person w-[60vh]">
            <Person />
          </div>
          <div className="messages w-[120vh]">
            <Messages />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
