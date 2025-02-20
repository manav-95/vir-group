import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


import Logo from '../assets/white-logo.png'
import Building1 from '../assets/category-images/building-1.jpg'


const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLargeMenuOpen, setIsLargeMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const navItems = [
    { name: 'Home', path: '/', },
    { name: 'Our Projects', path: '/our-projects', type: 'dropdown', },
    { name: 'Redevelop with us', path: '/redevelope-with-us', },
    { name: 'Corporate Governance', path: '/corporate-governance', },
    { name: 'About us', path: '/about-us', },
    { name: 'Contact us', path: '/contact-us', },
  ]

  const mobileNavItems = [
    { name: 'Home', path: '/', },
    { name: 'Our Projects', path: '/our-projects', },
    { name: 'Under Construction Redevelopment Projects', path: '/underconstruction-projects' },
    { name: 'Upcoming Redevelopment Projects', path: '/upcoming-projects' },
    { name: 'Completed Redevelopment Projects', path: '/completed-projects' },
    { name: 'Redevelop with us', path: '/redevelope-with-us', },
    { name: 'Corporate Governance', path: '/corporate-governance', },
    { name: 'About us', path: '/about-us', },
    { name: 'Contact us', path: '/contact-us', },
  ]

  const CategoryItems = [
    {
      id: 1,
      categoryName: 'Under Construction',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { path: '/Vir Paradise', image: Building1, title: 'Vir Paradise', flats: '2 & 3 BHK Flats', location: 'Malad (W), Mumbai', },
        ],
      path: '/underconstruction-projects',
    },


    {
      id: 2,
      categoryName: 'Completed',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { path: '/Vir Krishna Koyna', image: Building1, title: 'VIR Krishna Koyna', flats: '1 & 2 BHK Flats', location: 'Borivali (W), Mumbai', },
        { path: '/Global Residency', image: Building1, title: 'Global Residency', flats: '1 & 2 BHK Flats', location: 'Goregaon [E], Mumbai', },
      ],
      path: '/completed-projects',
    },

    {
      id: 3,
      categoryName: 'Upcoming',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { path: '/Sheetal Suryaprakash', image: Building1, title: 'Sheetal Suryaprakash', flats: '1 & 2 BHK Flats', location: 'Vileparle (E), Mumbai', },
        {  image: Building1, title: 'Vir Aradhana', flats: '1 & 2 BHK Flats', location: 'Malad (W), Mumbai', },

      ],
      path: '/upcoming-projects',
    },

  ]

  return (
    <>
      <div className='w-full bg-[#202425] text-white shadow-lg fixed left-0 top-0 z-50 px-4'>
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
            <h1 className='hidden min-[425px]:block text-3xl uppercase mt-1'>VIR Group</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <RiCloseFill className='h-9 w-9' /> : <RiMenuFill className='h-9 w-9' />}
            </button>
          </div>


          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='lg:hidden bg-[#202425] text-white fixed top-28 min-[425px]:top-20 left-0 w-full flex flex-col items-start justify-center p-2'>
              {mobileNavItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'w-full py-3 uppercase px-2 text-black text-sm helvectica tracking-wider font-medium bg-[#00d8ff] rounded-xs'
                      : 'w-full py-3 uppercase px-2 text-[#999999] text-sm helvectica tracking-wider font-medium rounded-xs'
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
                  {item.type === "dropdown" ? (
                    <div
                      className='cursor-pointer'
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      {/* <p className='text-lg font-medium hover:bg-[#00d8ff] hover:text-black py-1.5 px-4 hover:font-semibold uppercase '>{item.name}</p> */}
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? 'text-xs xl:text-base font-semibold tracking-wide bg-[#00d8ff] text-black py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                            : 'text-xs xl:text-base font-medium tracking-wide hover:bg-[#00d8ff] py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                        }
                      >
                        {item.name}
                      </NavLink>
                      {showDropdown && (
                        <div className="absolute z-50 lg:-translate-x-[300px] xl:-translate-x-80 bg-gray-50 lg:w-4xl xl:w-5xl py-8 px-4 rounded shadow-xl lg:mt-0.5  xl:mt-2">
                          <div className="flex items-start justify-evenly space-x-3 xl:space-x-6">
                            {/* Map through each category */}
                            {CategoryItems.map((category) => (
                              <div key={category.id} className="">
                                {/* Category Name */}
                                <h2 className="text-lg font-medium mb-0 text-gray-700 helvectica tracking-wider">{category.categoryName}</h2>
                                <h3 className="text-lg font-medium mb-4 text-[#1e5593] helvectica tracking-wider border-b-2 pb-2 border-gray-300">{category.categoryTitle}</h3>

                                {/* Map through items in the category */}
                                <ul className="space-y-4">
                                  {category.items.map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.path}
                                      target='_blank'
                                      className='group'
                                    >
                                      <li className="flex items-center justify-start space-x-4 pb-2">
                                        {/* Image */}
                                        <div className="flex-shrink-0">
                                          {item.image ? (
                                            <img
                                              src={item.image}
                                              alt={item.title}
                                              className="w-24 h-16 object-fill bg-gray-300"
                                            />
                                          ) : (
                                            <div className="w-24 h-16 bg-gray-200"></div>
                                          )}
                                        </div>

                                        {/* Title and Details */}
                                        <div className="flex flex-col uppercase">
                                          <h4 className="text-sm text-gray-700 font-medium  group-hover:underline group-hover:text-[#1e5593] transition-all duration-150 ease-in-out">{item.title}</h4>
                                          <p className="text-xs text-gray-600 group-hover:text-gray-900 helvectica transition-all duration-150 ease-in-out ">{item.flats}</p>
                                          <p className="text-xs text-gray-500 group-hover:text-gray-900  helvectica transition-all duration-150 ease-in-out ">{item.location}</p>
                                        </div>
                                      </li>
                                    </a>

                                  ))}
                                  <div className='w-full flex justify-start mb-2'>
                                    <a
                                      href={category.path}
                                      className='text-sm text-black hover:text-[#1e5593] hover:underline py-1 px-2 rounded-xs helvectica tracking-wide'
                                    >
                                      View More
                                    </a>
                                  </div>
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-xs xl:text-base font-semibold tracking-wide bg-[#00d8ff] text-black py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                          : 'text-xs xl:text-base font-medium tracking-wide hover:bg-[#00d8ff] py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              )}
            </ul>
          </div>

          {/* MENU FOR LARGE SCREENS */}
          <div className='hidden lg:block'>
            <button
            onClick={() => setIsLargeMenuOpen(true)} 
             className='cursor-pointer'
             >
              <CgMenuRight className={`h-8 w-8 flex-shrink-0 ${isLargeMenuOpen ? 'text-[#202425]' : 'text-white'}`} /> 
            </button>
          </div>

         

          {/* Sliding Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-72 text-white bg-[rgba(0,0,0,0.7)] shadow-lg z-50 transform transition-transform duration-300 ${isLargeMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            {/* Close Button */}
            <div className="absolute top-4 left-0 ">
              <button
               onClick={() => setIsLargeMenuOpen(false)}
               className='cursor-pointer py-2 px-2'
               >
                <IoClose className="h-8 w-8" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-5 px-6 mt-24">
              {mobileNavItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({isActive}) =>
                  isActive 
                  ? 'text-base text-[#00d8ff] helvectica tracking-wider'
                  : 'text-base helvectica  tracking-wider text-[#999999] hover:text-white transition-all'
                  }
                  onClick={() => setIsLargeMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

        </div>
      </div >
    </>
  )
}

export default Navbar