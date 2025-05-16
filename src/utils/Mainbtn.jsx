import React from 'react'
import { Link } from 'react-router'

const Mainbtn = ({title}) => {
  return (
      <>
          <Link className='py-3 px-8 hover:bg-black hover:text-white ease-in-out duration-300 border border-primary rounded-lg text-lg font-inter font-semibold text-primary' to="/">{title}</Link>
      </>
  )
}

export default Mainbtn