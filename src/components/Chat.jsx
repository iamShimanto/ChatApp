import React from "react";
import Settings from "./Settings";
import Person from "./Person";
import Messages from "./Messages";

const Chat = () => {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <div className="main flex">
          <div className="settings w-2/14">
            <Settings />
          </div>
          <div className="person w-4/14">
            <Person />
          </div>
          <div className="messages w-8/14">
            <Messages />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
