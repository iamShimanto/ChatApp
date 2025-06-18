import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex w-full">
      <div className="w-[35vh]">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
