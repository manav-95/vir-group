import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { RiMenuFill, RiCloseFill } from "react-icons/ri";

import Logo from '../assets/white-logo.png'

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', },
    { name: 'Our Projects', path: '/our-projects', },
    { name: 'Redevelop with us', path: '/redevelope-with-us', },
   { name: 'Corporate Governance', path: '/corporate-governance', },
    { name: 'About us', path: '/about-us', },
    { name: 'Contact us', path: '/contact-us', },
  ]


  return (
    <>
      <div className='w-full bg-[#333333] text-white shadow-lg fixed left-0 top-0 z-50 px-4 poppins-regular'>
        <div className='flex items-center justify-between py-6'>

          {/* Logo section  */}
          <div className='flex justify-items-start items-center space-x-2'>
            <div>
              <img
                src={Logo}
                alt="logo"
                className='h-16 min-[425px]:h-10 w-full object-center object-cover'
              />
            </div>
            <h1 className='hidden min-[425px]:block text-3xl uppercase font-bold'>VIR Group</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <RiCloseFill className='h-9 w-9' /> : <RiMenuFill className='h-9 w-9' />}
            </button>
          </div>


          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='lg:hidden bg-[#333333] text-white fixed top-28 min-[425px]:top-20 left-0 w-full flex flex-col items-start justify-center p-2'>
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'w-full py-3 uppercase px-2 text-black text-lg font-medium bg-[#00d8ff] rounded-xs'
                      : 'w-full py-3 uppercase px-2 text-white text-lg font-medium rounded-xs'
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          {/* Links Section for Large Screen*/}
          <div className='hidden lg:flex'>
            <ul className='flex items-center justify-center'>
              {navItems.map((item, index) =>
                <li
                  key={index}
                  className='relative'
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-sm xl:text-lg font-semibold bg-[#00d8ff] text-black py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                        : 'text-sm xl:text-lg font-medium hover:bg-[#00d8ff] py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div >
    </>
  )
}

export default Navbar