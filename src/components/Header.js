
import Hamburger from 'hamburger-react'
import React from 'react'
import HeaderItems from './HeaderItems'

const Header = () => {
  return (
    <div className="px-4 ">
      <nav className="flex justify-between md:ml-10 md:mr-10">
        <div className=' p-1 md:p-3'><h1 className="text-2xl md:font-normal text-orange-500">Quriarbox</h1></div>
        <div className="md:hidden "><Hamburger size={20}/></div>
        <ul className="hidden md:flex justify-center">
          <HeaderItems names="Home" />
          <HeaderItems names="Our services" />
          <HeaderItems names="About Us" />
          <HeaderItems names="What's new ?" />
        </ul>
      </nav>
    </div>
  )
}

export default Header
