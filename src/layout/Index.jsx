import React from 'react'
import { Outlet } from 'react-router'
import Settings from '../components/Settings';

const Layout = () => {
  return (
    <div className='flex w-full'>
      <div className="settings w-[30vh]">
        <Settings />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout