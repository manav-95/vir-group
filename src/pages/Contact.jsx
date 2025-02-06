import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root"); // Required for accessibility

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoClose } from "react-icons/io5";

import HeroImage from '../assets/contact-us-images/contact-hero.jpg'

const Contact = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[580px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl container mx-auto flex flex-col justify-center text-white text-center px-4">

          <h1 className="text-3xl md:text-4xl helvectica tracking-wider">
            Contact Us
          </h1>

          <form target='_blank' action="https://formsubmit.co/a9manav1234@gmail.com" method="POST">
            <div className='grid grid-cols-1 py-8 gap-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-y-2.5 gap-x-6'>
                <input
                  type="text"
                  placeholder='Name'
                  required
                  className='border-2 border-white w-full py-3 px-4 rounded-md tracking-wider outline-none'
                />
                <input
                  type="text"
                  placeholder='Email'
                  required
                  className='border-2 border-white w-full py-3 px-4 rounded-md tracking-wider outline-none'
                />
                <input
                  type="text"
                  placeholder='Contact No.'
                  required
                  className='border-2 border-white w-full py-3 px-4 rounded-md tracking-wider outline-none'
                />
              </div>
              <div>
                <textarea
                  placeholder='Message'
                  rows="5"
                  required
                  className='border-2 border-white w-full py-3 px-4 rounded-md tracking-wider outline-none'
                />
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  className='bg-[#00d8ff] py-3 px-12 w-full md:w-fit helvectica text-lg font-medium tracking-wider text-black rounded-md cursor-pointer'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* ABOUT AND MAP SECTION */}
      <div className='max-w-5xl container mx-auto py-20 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-10'>
          <div>
            <div className=''>
              <h1 className='text-4xl helvectica font-medium'>VIR Group</h1>
            </div>

            <div className='pt-2.5 leading-7 '>
              <p className='text-lg font-medium helvectica'>Our registered office is located at</p>
              <p>B- 605, Express Zone, OPP Oberoi Mall,</p>
              <p>Western Express Highway, Malad East,</p>
              <p>Mumbai - 400 097</p>
            </div>

            <div className='pt-6 leading-7 helvectica tracking-wide'>
              <p className='flex items-baseline gap-2'><p className='text-lg font-medium'>Office: </p>+91 93262 87741 / 9930510362</p>
            </div>

            <div className='flex justify-start items-start pt-6 leading-7 helvectica tracking-wide'>
              <h1 className='text-lg font-medium mr-2'>Email: </h1>
              <div>
                <p>virgroupmumbai@gmail.com</p>
                <p>tarun.virgroup@gmail.com</p>
              </div>
            </div>

            <div className='pt-6'>
              <h1 className='text-xl font-medium helvectica tracking-wide'>Follow Us</h1>
              <div className='flex items-center justify-start space-x-2 my-4 text-[#333]'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white p-2.5 bg-gray-100 rounded hover:bg-[#333] transition-all duration-100 ease-in-out">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white p-2.5 bg-gray-100 rounded hover:bg-[#333] transition-all duration-100 ease-in-out">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white p-2.5 bg-gray-100 rounded hover:bg-[#333] transition-all duration-100 ease-in-out">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white p-2.5 bg-gray-100 rounded hover:bg-[#333] transition-all duration-100 ease-in-out">
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>

          <div className='h-[300px] sm:h-full w-full'>
            <iframe
              className='h-full w-full'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60291.33758162182!2d72.82761446021414!3d19.18608926852093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b707374fdf5b%3A0xdb893aa5be338aa0!2sExpress%20Zone%20B%20Wing!5e0!3m2!1sen!2sin!4v1738581225549!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* ENQUIRY SECTION */}
      <div className='max-w-5xl container mx-auto pb-20 px-6 min-[425px]:px-8 lg:px-4'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full h-24 min-[425px]:h-28 md:h-24 flex items-center justify-center py-4 bg-blue-600 px-4 rounded-md'>
              <p className='text-center text-2xl font-medium tracking-wider text-white helvectica'>Sales</p>
            </div>
            <button
              onClick={() => setModalIsOpen(true)}
              className='mt-4 helvectica tracking-wider cursor-pointer text-blue-500 hover:text-blue-700 hover:underline'>
              Enquire Now
            </button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full h-24 min-[425px]:h-28 md:h-24 flex items-center justify-center py-4 bg-red-600 px-4 rounded-md'>
              <p className='text-center text-2xl font-medium tracking-wider text-white helvectica'>Channel Partner</p>
            </div>
            <button
              onClick={() => setModalIsOpen(true)}
              className='mt-4 helvectica tracking-wider cursor-pointer text-blue-500 hover:text-blue-700 hover:underline'>
              Enquire Now
            </button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full h-24 min-[425px]:h-28 md:h-24 flex items-center justify-center py-4 bg-cyan-400 px-4 rounded-md'>
              <p className='text-center text-2xl font-medium tracking-wider text-white helvectica'>Get Your Building Redevelope</p>
            </div>
            <button
              onClick={() => setModalIsOpen(true)}
              className='mt-4 helvectica tracking-wider cursor-pointer text-blue-500 hover:text-blue-700 hover:underline'>
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-white px-6 py-6 rounded shadow-lg max-w-xl w-full mx-auto relative"
        overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center p-4"
      >
        <button onClick={() => setModalIsOpen(false)} className="absolute top-3 right-3 cursor-pointer"><IoClose className="h-7 w-7 text-gray-500 flex-shrink-0"/></button>
        <form>
          <h1 className="text-2xl helvectica">Enquiry Form</h1>
          <hr className="my-4 text-gray-300"/>
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full bg-gray-100 p-4 rounded mb-2.5"
          />
          <input
            type="text"
            placeholder="Email"
            required
            className="w-full bg-gray-100 p-4 rounded mb-2.5 tracking-wide"
          />
          <input
            type="number"
            placeholder="Contact No."
            required
            className="w-full bg-gray-100 p-4 rounded mb-2.5 tracking-wide"
          />
          <textarea
            placeholder="Message"
            className="w-full bg-gray-100 p-4 rounded mb-2.5 tracking-wide"
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#202425] text-white helvectica px-6 py-3 rounded tracking-wide"
          >
            Submit
          </button>
        </form>
      </Modal>

    </>
  )
}

export default Contact