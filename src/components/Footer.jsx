import React from 'react';
import StayInTouch from './StayInTouch';
import Logo from '../assets/white-logo.png';
// ICONS
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Projects', path: '/our-projects' },
    { name: 'Revedevlopment', path: '/redevelope-with-us' },
     { name: 'Corporate Governance', path: '/corporate-governance' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  return (
    <>
      <StayInTouch />
      <footer className="w-full bg-[#333333] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Logo & Description */}
            <div>
              <img src={Logo} alt="Logo" className="h-24 w-32" />
              <p className="text-sm mt-4">
                VIR Group Private Limited is a Mumbai-based redevelopment company with a decade-long reputation for building high-quality homes on schedule, with complete honesty and transparency.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="h-1.5 w-16 bg-[#00d8ff] mb-2"></div>
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'text-[#00d8ff] text-lg' : 'text-base hover:text-[#00d8ff] transition-all'
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="h-1.5 w-16 bg-[#00d8ff] mb-2"></div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPhoneAlt className='flex-shrink-0 h-4 w-4 mr-2 mt-1'/>
                  <div>
                    <p>+91 93262 87741</p>
                    <p>+91 9930510362</p>
                  </div>
                </div>
                <div className="flex items-start">
                 <IoMdMail className='flex-shrink-0 h-4 w-4 mr-2 mt-1'/>
                  <div>
                    <p>virgroupmumbai@gmail.com</p>
                    <p>tarun.virgroup@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  
                  <p className="max-w-xs">
                    B-605, Express Zone, OPP Oberoi Mall, Western Express Highway, Malad East, Mumbai - 400097
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <hr className="border-gray-600" />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6">
          <p>&copy; {new Date().getFullYear()} Vir Group. All rights reserved.</p>
          <a href="https://a9business.in/" target="_blank" rel="noopener noreferrer" className="text-[#00d8ff]">
            Designed by a9business.in
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
