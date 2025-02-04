import React from 'react'

import HeroImage from '../assets/about-us-images/about-us-hero.jpg'

const About = () => {

  const teamData = {
    "ARCHITECT": ["Mr. Pranav Shah", "Mr. Chirag Rayani", "Mr. Nilesh Makwana"],
    "CONSULTING ARCHITECT": ["Mr. Hemal Shah - Horizon Architects", "Mr. Bharat Suthar", "Mr. Rajesh Kateliya"],
    "R.C.C. CONSULTANT": ["Mr. Kaivan Shah", "M/s Krishna Consultants", "Mr. Abhijit Pharpekar"],
    "LEGAL ADVISER": ["Mr. Ashish Ghadge", "Mrs. Savita Ghadge", "Mr. Monesh Sharma", "Mr. Sushil Mishra"],
    "CHARTERED ACCOUNTANT": ["Mr. Ajay Shukla", "Mr. Jimit Gathani"],
    "VAASTU CONSULTANT": ["Mr. Vaibhav Pawar"],
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.0)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full flex justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            
          </h1>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className='w-full bg-gray-100'>
        <div className='max-w-7xl container mx-auto px-4'>
          <div className='py-14'>
            <div className='flex justify-center items-center'>
              <h1 className='text-5xl font-medium'>VIR Group</h1>
            </div>
            <div className='flex flex-col items-start justify-start text-left space-y-8 pt-10'>
              <p>
                We take this opportunity to introduce ourselves M/s. VIR Group. M/S VIR GROUP is one of the leading real estate companies, duly incorporated under the Indian Companies Act through its Directors Mr. Virabhai Prajapati & Mr. Tarun Prajapati. Being a prominent real estate player, we primarily operate in Mumbai's suburban districts. Our company has a track record of providing high-quality homes and has completed numerous real estate renovation projects with success.
              </p>
              <p>
                We create projects and build new buildings that offer remarkable elevation and quality of construction, as demonstrated in recent years. Our team comprises skilled architects, engineers, and constructors who have extensive knowledge and expertise in their respective disciplines.
              </p>
              <p>
                We have built and finished a number of these projects with quicker outcomes that are extremely good financially. The Company has a Team of Project Manager, Civil Engineer, Architects. Executive Engineers, Supervisors and Marketing Team, who have got vast experience in Project Management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VISION AND MISSION */}
      <div className="bg-gray-50 py-10 sm:py-16">
        <div className="max-w-7xl container px-4 mx-auto">
          {/* Section Title */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-medium">Our Vision & Mission</h1>
          </div>

          {/* Vision & Mission Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-[#00d8ff] mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Vision for VIR GROUP is its transformation into one of the valuable lifestyle developers in the world beyond real estate development
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-[#00d8ff] mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to deliver excellence by ensuring quality, integrity, and innovation in every project.
                Our mission is to create long-lasting value for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="bg-gray-100 py-10 sm:py-16">
        <div className="max-w-7xl container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-5xl font-medium">Our Team</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 lg:gap-12">
            {Object.entries(teamData).map(([title, members]) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
                <ul className="space-y-2">
                  {members.map((member, index) => (
                    <li key={index} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>



    </>
  )
}

export default About