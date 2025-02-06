import React, { useState } from 'react'

import faqs from '../data/FAQ'

import { FaPlus, FaMinus } from 'react-icons/fa';

import HeroImage from '../assets/hero-images/building-1.jpg'

import Testimonials from '../components/Testimonials'

const RedevelopeWithUs = () => {

  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: '1', title: 'What documents are needed for the vetting process for redevelopent?', },
    { id: '2', title: 'Are buyers protected, and if so, how?', },
    { id: '3', title: 'How to choose the right developer for redevelopment?', },
  ]


  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl container mx-auto flex flex-col justify-center text-white text-center px-4">

          <h1 className="text-3xl md:text-4xl helvectica tracking-wider">
            Let us Help You Redevelope
          </h1>

          <form target='_blank' action="https://formsubmit.co/a9manav1234@gmail.com" method="POST">
            <div className='grid grid-cols-1 py-8 gap-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-y-2.5 gap-x-4'>
                <input
                  type="text"
                  placeholder='Name'
                  name="name"

                  required
                  className='border-2 border-gray-300 tracking-wider w-full py-3 px-4 rounded-md outline-none'
                />
                <input
                  type="text"
                  placeholder='Email'
                  name="email"

                  required
                  className='border-2 border-gray-300 tracking-wider w-full py-3 px-4 rounded-md outline-none'
                />
                <input
                  type="number"
                  placeholder='Contact No.'
                  name="contact"

                  required
                  className='border-2 border-gray-300 tracking-wider w-full py-3 px-4 rounded-md outline-none'
                />
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  className='bg-[#00d8ff] py-2.5 px-12 w-full md:w-fit helvectica text-lg tracking-wide text-black rounded-md cursor-pointer'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* ABOUT REDEVELOPMENT SECTION */}
      <div className='max-w-7xl container mx-auto px-4 py-12 lg:py-16'>

        <div className='mb-10 lg:mb-12'>
          <h1 className='text-xl min-[425px]:text-2xl md:text-3xl helvectica tracking-wide'>What is Re-development?</h1>
          <p className='my-4 tracking-wider helvectica leading-7'>
            Redevelopment is the process of demolishing existing old dilapidated society building and reconstructing it by appointing a good developer who can construct and handover new flats to the society members free of cost with better modern day amenities and make profit by utilizing balance plot potential by constructing additional flats and shops as per approval from the concerned development authorities.
          </p>
        </div>

        <div>
          <h1 className='text-xl min-[425px]:text-2xl md:text-3xl helvectica tracking-wide'>Why Re-development?</h1>
          <p className='my-4 tracking-wider helvectica leading-7'>
            The old society buildings were built over a period on 3-4 decades & are in very bad shape. Infrastructure facilities for electricity. water & sewage are overloaded & needs immediate replacement. Societies need huge funds to undertake major repairs. The structure of old buildings have outlived its life & needs to be pulled and developed afresh as further repairs to the existing structure won't be advisable & feasible. Redeveloped buildings have negligible maintenance and repair cost at least for 15-20 years.
          </p>
          <p className='mb-4 tracking-wider helvectica leading-7'>
            New redeveloped buildings have better infrastructure facilities in respect of plumbing/ electrical & sewage requirements as ISI marked materials are used & the work is also carried out by certified contractor. Redeveloped buildings provide other amenities like watchman's' cabin, society office. servants' toilets, better entrance lobby layout, dry balconies, flowerbeds. better external elevation, better compound walls & flooring which is not the case with old society buildings. New buildings have adequate number of car parking for its members.
          </p>
        </div>

      </div>


      {/* FAQ's SECTION */}
      <div className='max-w-7xl container mx-auto px-4'>
        {/* HEADING */}
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-3xl tracking-wide helvectica'>FAQ's on Redevelopment</h1>
        </div>

        {/* BUTTONS */}
        <div className="max-w-7xl container mx-auto">
          {/* BUTTONS */}
          <div className="flex flex-col justify-start items-center space-y-4 py-12">
            {buttons.map((button) => (
              <div key={button.id} className="w-full">

                {/* BUTTON */}
                <button
                  onClick={() => setActiveButton(activeButton === button.id ? null : button.id)} // Toggle content
                  className="w-full flex justify-between items-start text-left border-l-[5px] border-[#4169e1] py-3 px-3 sm:p-4 md:px-6 md:py-4 bg-white cursor-pointer"
                >
                  <h1 className="text-lg min-[425px]:text-lg helvectica tracking-wide">{button.title}</h1>
                  {activeButton === button.id ? (
                    <FaMinus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
                  ) : (
                    <FaPlus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
                  )}
                </button>

                {/* BUTTON CONTENTS */}
                <div
                  className={`overflow-hidden transition-all duration-150 ${activeButton === button.id ? 'h-full opacity-100 py-4' : 'max-h-0 opacity-0'
                    } mt-4`}
                >
                  <div className="px-4">
                    {faqs
                      .filter((faq) => faq.id === button.id)
                      .map((faq) =>
                        <div
                          key={faq.id}
                        >
                          {/* display when there is a heading in an object */}
                          {faq.heading &&
                            <div className='max-w-6xl container mx-auto mb-6'>
                              <p className='text-base helvectica tracking-wider'>{faq.heading}</p>
                            </div>
                          }

                          {/* display when there is a paragraph in an object */}
                          {faq.paragraph &&
                            <p className='text-md helvectica tracking-wider leading-7'>{faq.paragraph}</p>
                          }

                          {/* display when there is any contents in an object */}
                          {faq.contents &&
                            <>
                              {/* ARRAY OF CONTENTS */}
                              {faq.contents.map((content, index) =>
                                <div
                                  key={index}
                                >
                                  <div className="max-w-6xl comtainer mx-auto text-left border-l-[5px] border-[#4169e1] mb-2.5 py-2.5 px-3 sm:py-3.5 sm:px-4 md:px-6 md:py-3 bg-white cursor-pointer">
                                    <p className='text-lg min-[425px]:text-lg helvectica tracking-wider font-medium'>{content}</p>
                                  </div>
                                </div>
                              )}
                            </>
                          }
                        </div>
                      )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />
    </>
  )
}

export default RedevelopeWithUs