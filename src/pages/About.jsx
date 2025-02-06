import React from 'react'

import HeroImage from '../assets/about-us-images/about-us-hero-image.jpg'
import MissionBg from '../assets/about-us-images/mission-bg.jpg'

import Mission from '../assets/about-us-images/mission.png'
import Vision from '../assets/about-us-images/vission.png'

import Associate1 from '../assets/about-us-images/associate-1.png'

import Affiliation1 from '../assets/about-us-images/affiliation-1.png'

const About = () => {

  const teamData = {
    "ARCHITECT": ["Mr. Pranav Shah", "Mr. Chirag Rayani", "Mr. Nilesh Makwana"],
    "CONSULTING ARCHITECT": ["Mr. Hemal Shah - Horizon Architects", "Mr. Bharat Suthar", "Mr. Rajesh Kateliya"],
    "R.C.C. CONSULTANT": ["Mr. Kaivan Shah", "M/s Krishna Consultants", "Mr. Abhijit Pharpekar"],
    "LEGAL ADVISER": ["Mr. Ashish Ghadge", "Mrs. Savita Ghadge", "Mr. Monesh Sharma", "Mr. Sushil Mishra"],
    "CHARTERED ACCOUNTANT": ["Mr. Ajay Shukla", "Mr. Jimit Gathani"],
    "VAASTU CONSULTANT": ["Mr. Vaibhav Pawar"],
  };

  const associates = [
    { title: 'Architects', image: Associate1, },
    { title: 'Structural Engineers', image: Associate1, },
  ]

  const affiliations = [
    Affiliation1,
    Affiliation1,
    Affiliation1,
  ]

  return (
    <>
      {/* Hero Section */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-h-[700px] sm:max-h-[1000px] md:max-h-[1200px] lg:h-[540px] xl:h-[720px] bg-[#202425] text-white'>

        <div className='lg:col-span-5 xl:col-span-4 p-6'>
          <div className='flex justify-start lg:justify-center items-center h-full'>
            <div className=''>
              <div className='lg:border-[3px] lg:border-white lg:w-96 xl:w-96 2xl:w-md lg:translate-x-36 xl:translate-x-36 2xl:translate-x-52 lg:py-8'>
                <div className='bg-[#202425] w-full lg:w-fit lg:-translate-x-20 py-4 lg:py-8'>
                  <h1 className='text-3xl tracking-wider font-extralight helvectica mb-2 text-[var(--primary-color)] '>About Us</h1>
                  <p className='text-xs md:text-base helvectica text-[#999999] font-normal uppercase mb-2 leading-6 tracking-wide lg:max-w-80 xl:max-w-xs'>
                    At VIR Group, we pride ourselves on our commitment in every redevelopment project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='lg:col-span-7 xl:col-span-8 flex flex-col justify-center'>
          <div className="max-h-[260px] min-[425px]:max-h-[340px] sm:max-h-[700px] md:max-h-[800px] lg:max-h-[540px] xl:max-h-[720px]">
            <img
              src={HeroImage}
              alt='Hero image'
              className='w-full h-full object-fill object-top aspect-square sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[1/1]'
            />
          </div>
        </div>


      </div>


      {/* ABOUT SECTION */}
      <div className='w-full bg-[#f3f3f3]'>
        <div className='max-w-7xl container mx-auto px-4'>
          <div className='py-20'>
            <div className='flex flex-col justify-center items-center max-w-3xl mx-auto space-y-6'>
              <div className='h-[2px]  w-[70%] bg-gray-300 mr-auto'></div>
              <h1 className='text-4xl helvectica tracking-wider uppercase'>VIR Group</h1>
              <div className='h-[2px]  w-[70%] bg-gray-300 ml-auto'></div>
            </div>
            <div className='max-w-3xl mx-auto container text-sm pt-16 helvectica tracking-wider leading-7.5 text-gray-600'>
              <p className='text-justify text-align-last-center'>
                We take this opportunity to introduce ourselves M/s. VIR Group. M/S VIR GROUP is one of the leading real estate companies, duly incorporated under the Indian Companies Act through its Directors Mr. Virabhai Prajapati & Mr. Tarun Prajapati. Being a prominent real estate player, we primarily operate in Mumbai's suburban districts. Our company has a track record of providing high-quality homes and has completed numerous real estate renovation projects with success.
              </p>
              <p className='text-justify mt-8 text-align-last-center'>
                We create projects and build new buildings that offer remarkable elevation and quality of construction, as demonstrated in recent years. Our team comprises skilled architects, engineers, and constructors who have extensive knowledge and expertise in their respective disciplines.
              </p>
              <p className='text-justify mt-8 text-align-last-center'>
                We have built and finished a number of these projects with quicker outcomes that are extremely good financially. The Company has a Team of Project Manager, Civil Engineer, Architects. Executive Engineers, Supervisors and Marketing Team, who have got vast experience in Project Management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION AND VISION SECTION */}
      <div
        style={{
          backgroundImage: `url(${MissionBg})`,
        }}
        className='w-full text-white'>
        <div className='max-w-4xl mx-auto px-4 container py-20'>


          <div className='flex flex-col justify-center items-center max-w-3xl mx-auto space-y-6'>
            <div className='h-[2px] w-[70%] bg-gray-300 mr-auto'></div>
            <h1 className='text-2xl lg:text-3xl helvectica tracking-wider uppercase'>Mission & Vision</h1>
            <div className='h-[2px] w-[70%] bg-gray-300 ml-auto'></div>
          </div>

          {/* MISSION */}
          <div className='flex flex-col items-center mt-14 md:mt-16'>
            <h1 className='helvectica text-3xl mb-2'>Mission</h1>
            <div className='flex flex-col md:flex-row space-y-4 lg:space-x-4 items-center border-2 rounded-4xl p-6 '>
              <div>
                <img
                  src={Mission}
                  alt='Mission Icon'
                  className='md:h-32 md:w-80 lg:w-72 xl:w-64'
                />
              </div>
              <div>
                <p className='text-lg text-center md:text-left text-pretty helvectica tracking-wider'>
                  We strive to deliver excellence by ensuring quality, integrity, and innovation in every project.
                  Our mission is to create long-lasting value for our clients and communities.
                </p>
              </div>
            </div>
          </div>

          {/* VISION */}
          <div className='flex flex-col items-center mt-14 md:mt-16'>
            <h1 className='helvectica text-3xl mb-2'>Vision</h1>
            <div className='flex flex-col md:flex-row space-y-4 lg:space-x-4 items-center border-2 rounded-4xl p-6 '>
              <div>
                <p className='text-lg text-center md:text-left text-pretty helvectica tracking-wider'>
                  Our Vision for VIR GROUP is its transformation into one of the valuable lifestyle developers in the world beyond real estate development
                </p>
              </div>
              <div>
                <img
                  src={Vision}
                  alt='Mission Icon'
                  className='md:h-32 md:w-80 lg:w-72 xl:w-64'
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-5xl container mx-auto px-4">
          <div className='flex flex-col justify-center items-center max-w-3xl mx-auto space-y-6'>
            <div className='h-[2px] w-[70%] bg-gray-300 mr-auto'></div>
            <h1 className='text-2xl lg:text-3xl helvectica tracking-wider uppercase'>Our Team</h1>
            <div className='h-[2px] w-[70%] bg-gray-300 ml-auto'></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-y-12 gap-x-10 pt-20">
            {Object.entries(teamData).map(([title, members]) => (
              <div key={title} className="">
                <h2 className="text-lg font-medium helvectica text-left min-[425px]:text-center sm:text-left sm:pl-16 lg:pl-0 text-gray-800 mb-4">{title}</h2>
                <ul className="space-y-2 text-sm text-left min-[425px]:text-center sm:text-left sm:pl-16 lg:pl-0 helvectica">
                  {members.map((member, index) => (
                    <li key={index} className="text-gray-600  hover:text-gray-900 transition-colors duration-200">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR ASSOCIATES */}
      <div className='w-full bg-white py-20'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='flex flex-col justify-center items-center max-w-3xl mx-auto space-y-6'>
            <div className='h-[2px] w-[70%] bg-gray-300 mr-auto'></div>
            <h1 className='text-2xl lg:text-3xl helvectica tracking-wider uppercase'>Our Associates</h1>
            <div className='h-[2px] w-[70%] bg-gray-300 ml-auto'></div>
          </div>

          <div className='grid sm:grid-cols-2 gap-y-10 gap-x-4 mt-20'>
            {associates.map((associate, index) =>
              <div key={index} className='flex flex-col items-center'>
                <h1 className='helvectica text-2xl mb-4'>{associate.title}</h1>
                <img
                  src={associate.image}
                  alt={associate.title}
                  className=''
                />
              </div>
            )}
          </div>

        </div>
      </div>


      {/* OUR AFFILIATIONS */}
      <div className='w-full bg-white pb-20'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='flex flex-col justify-center items-center max-w-3xl mx-auto space-y-6'>
            <div className='h-[2px] w-[70%] bg-gray-300 mr-auto'></div>
            <h1 className='text-2xl lg:text-3xl helvectica tracking-wider uppercase'>Our Associates</h1>
            <div className='h-[2px] w-[70%] bg-gray-300 ml-auto'></div>
          </div>

          <div className='grid min-[425px]:grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4 mt-20'>
            {affiliations.map((affiliation, index) =>
              <div key={index} className='flex justify-center items-center'>
                <img
                  src={affiliation}
                  alt='affiliation images'
                  className=''
                />
              </div>
            )}
          </div>

        </div>
      </div>


    </>
  )
}

export default About