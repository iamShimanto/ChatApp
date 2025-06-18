import React from "react";
import { Link } from "react-router";
import { GrChat } from "react-icons/gr";
import { MdGroup } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../store/slices/authSlice";

const Navbar = () => {
  const userData = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(loggedUser(null));
  };

  return (
    <>
      <div className="pt-12.5 pl-3 pr-7 pb-10.5 shadow-2xl flex flex-col justify-between h-screen bg-[#16181C]">
        <div className="heading pl-3">
          <h2 className="text-4xl font-bold font-inter text-[#7289DA]">Chat</h2>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            className="flex items-center gap-2 text-lg font-semibold font-inter text-white bg-[#7289DA] w-30 justify-center py-3 rounded-sm hover:bg-[#5869a6] duration-300"
            to="/"
          >
            <GrChat /> Chat
          </Link>
          <Link
            className="flex items-center gap-2 text-lg font-semibold font-inter text-[#99AAB5] bg-[#40444B] w-30 justify-center py-3 rounded-sm hover:bg-[#7289DA] hover:text-white duration-300"
            to="/group"
          >
            <MdGroup className="text-2xl" /> Group
          </Link>
          <Link
            className="flex items-center gap-2 text-lg font-semibold font-inter text-[#99AAB5] bg-[#40444B] w-30 justify-center py-3 rounded-sm hover:bg-[#7289DA] hover:text-white duration-300"
            to="/"
          >
            <FaBars className="border border-[#7289DA] p-1 rounded-full text-2xl" />{" "}
            People
          </Link>
        </div>

        <div className="bottom flex flex-col gap-3">
          <div className="flex gap-2">
            <img
              className="w-9 h-9 rounded-full"
              src={userData.photoURL}
              alt="logo"
            />
            <Link to="/profile">
              <h4 className="text-base font-semibold font-inter text-white cursor-pointer hover:text-[#7289DA] duration-300">
                {userData.displayName}
              </h4>
              <div className="flex items-center justify-between">
                <p className="text-sm font-inter font-normal text-[#99AAB5] cursor-pointer hover:text-[#7289DA] duration-300">
                  Edit Profile
                </p>
                <IoSettings className="text-xl text-[#99AAB5] cursor-pointer hover:text-[#7289DA] duration-300" />
              </div>
            </Link>
          </div>
          <button
            className="py-2 bg-red-400 rounded-2xl text-white cursor-pointer hover:bg-red-500 duration-300"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
