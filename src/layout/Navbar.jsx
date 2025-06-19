import React from "react";
import { Link } from "react-router";
import { GrChat } from "react-icons/gr";
import { MdGroup } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../store/slices/authSlice";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userData.user);
  const handleSignOut = () => {
    toast.success("LogOut Successfully!");
    setTimeout(() => {
      dispatch(loggedUser(null));
    }, 1000);
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
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

        <div className="flex flex-col gap-3 items-center">
          <Link to="/profile" className="bottom flex gap-3">
            <img
              className="w-9 h-9 rounded-full"
              src={userInfo.photoURL}
              alt="logo"
            />
            <div>
              <h4 className="text-base font-semibold font-inter text-white cursor-pointer hover:text-[#7289DA] duration-300">
                {userInfo.displayName}
              </h4>
              <div className="flex items-center justify-between">
                <p className="text-sm font-inter font-normal text-[#99AAB5] cursor-pointer hover:text-[#7289DA] duration-300">
                  Edit Profile
                </p>
                <IoSettings className="text-xl text-[#99AAB5] cursor-pointer hover:text-[#7289DA] duration-300" />
              </div>
            </div>
          </Link>
          <button
            className="py-2 bg-red-400 rounded-2xl cursor-pointer hover:bg-red-500 duration-300 text-white font-inter font-semibold text-base w-full"
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
