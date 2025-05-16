import React from "react";
import { Link } from "react-router";

const Mainbtn = ({ title }) => {
  return (
    <>
      <Link
        className="py-3 px-8 hover:bg-[#7289DA] hover:text-white ease-in-out duration-300 border border-[#7289DA] rounded-lg text-lg font-inter font-semibold text-[#7289DA]"
        to="/login"
      >
        {title}
      </Link>
    </>
  );
};

export default Mainbtn;
