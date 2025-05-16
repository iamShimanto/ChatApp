import React from "react";
import { Link } from "react-router";
import { GrChat } from "react-icons/gr";
import { MdGroup } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Settings = () => {
  return (
    <>
      <div className="pt-12.5 pl-3 pr-7 pb-10.5 w-fit shadow-2xl flex flex-col justify-between h-screen">
        <div className="heading pl-3">
          <h2 className="text-4xl font-bold font-inter text-primary">Chat</h2>
          <div className="flex flex-col gap-4 mt-25">
            <Link
              className="flex items-center gap-2 text-lg font-semibold font-inter text-white bg-primary w-30 justify-center py-3 rounded-sm hover:bg-black hover:text-white duration-300"
              to="/"
            >
              <GrChat /> Chat
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-semibold font-inter text-black22 bg-white w-30 justify-center py-3 rounded-sm hover:shadow-md duration-300"
              to="/"
            >
              <MdGroup className="text-2xl" /> Group
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-semibold font-inter text-black22 bg-white w-30 justify-center py-3 rounded-sm hover:shadow-md duration-300"
              to="/"
            >
              <FaBars className="border border-primary p-1 rounded-full text-2xl" />{" "}
              People
            </Link>
          </div>
        </div>
        <div className="bottom flex gap-2">
          <img
            className="w-9 h-9 rounded-full"
            src="images/shimanto.jpg"
            alt="logo"
          />
          <div>
            <h4 className="text-base font-semibold font-inter text-primary cursor-pointer">
              Shimanto Sarkar
            </h4>
            <div className="flex items-center justify-between">
              <p className="text-sm font-inter font-normal text-secondary cursor-pointer">
                Edit Profile
              </p>
              <IoSettings className="text-xl text-primary cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
