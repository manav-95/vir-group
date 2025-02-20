import React, { useRef } from 'react';

import propertyDetails from "../data/PorpertyDetails"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative, Pagination } from 'swiper/modules';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HeroImage from '../assets/our-projects-images/hero-image.jpg';
import Coming_Soon from '../assets/featured-projects/coming-soon.png'

import { NavLink } from 'react-router-dom';


const OurProjects = () => {

  const swiperUnderConstructionRef = useRef(null);
  const swiperCompletedRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full flex justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl helvectica tracking-wide">
            Redevelopment Projects In Mumbai
          </h1>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className='max-w-7xl container mx-auto px-4 py-10'>
        <div className='text-base helvectica text-center tracking-wide leading-9'>
          <p className='mb-4'>
            Redevelopment projects in Mumbai by VIR Group are designed to provide a high-quality living experience. Our upcoming and under-construction projects feature premium amenities and modern facilities. We take pride in creating spaces that seamlessly blend simplicity with elegance. With a strong presence in the real estate industry, our journey is driven by the evolving lifestyle needs of urban dwellers. Don't wait—own a flat in Mumbai and embrace a sophisticated city lifestyle!
          </p>
          <p className=''>Check out exclusive Under-construction, Upcoming and Completed Redevelopment Projects by VIR Group.</p>
        </div>
      </div>

      {/* UNDERCONSTRUCTION PROJECTS SECTION */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* head section */}
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-3xl font-medium helvectica'>Under Construction Redevelopment Projects</h1>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 left-0 right-0 flex justify-between px-4 sm:px-8 transform -translate-y-1/2"> */}

        {/* {propertyDetails.length >= 4 && (
          <>
            <button
              onClick={() => swiperUnderConstructionRef.current?.slidePrev()}
              className="absolute top-4/8 min-[425px]:top-1/2 sm:top-2/4 lg:top-4/8 left-2  transform -translate-y-1/2 bg-[#202425] text-white z-10 cursor-pointer p-4 sm:p-4 md:p-4 rounded-full transition-all duration-150 ease-in-out"
            >
              <FaAngleLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => swiperUnderConstructionRef.current?.slideNext()}
              className="absolute top-4/8 min-[425px]:top-1/2 sm:top-2/4 lg:top-4/8 right-2 transform -translate-y-1/2 bg-[#202425] text-white z-10 cursor-pointer p-4 sm:p-4 md:p-4 rounded-full transition-all duration-150 ease-in-out"
            >
              <FaAngleRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )} */}

        {/* </div> */}

        <Swiper
          modules={[Autoplay, EffectCreative, Pagination]}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
          // pagination={{
          //   clickable: true,
          //   el: ".custom-pagination"
          // }}
          // loop={true}
          // speed={500}
          // autoplay={{
          //   delay: 3000,
          //   pauseOnMouseEnter: true,
          // }}
          onSwiper={(swiper) => (swiperUnderConstructionRef.current = swiper)}
          className="max-w-5xl mx-auto my-10"
        >
          {propertyDetails.filter(item => item.underConstruction === true).map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className='group hover:scale-105 transition-all duration-150 flex flex-col bg-white items-center justify-center p-4 rounded'
              >
                <div className='w-full h-full relative group'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-center object-cover aspect-[6/8] rounded-sm'
                  />
                  <div className='w-full lg:hidden lg:group-hover:flex justify-center items-center group-hover:absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded'>
                    <a
                      href={`/${item.name}`}
                      target='_blank'
                    >
                      <button className='w-full lg:w-fit bg-[rgba(0,0,0,0.8)] text-white py-2 min-[425px]:py-3 sm:py-2 md:py-2 px-6 cursor-pointer uppercase'>View Details</button>
                    </a>
                  </div>
                </div>
                <div className=' flex flex-col items-center justify-center text-center bg-gray-50 w-full mt-4 p-2 -space-y-0.5 uppercase rounded-xs'>
                  <h1 className='text-sm font-semibold mb-0.5 min-[425px]:text-base min-[425px]:font-semibold helvectica text-black'>{item.name}</h1>
                  <p className='text-xs min-[425px]:text-sm helvectica text-gray-500'>{item.flats}</p>
                  <p className='text-xs min-[425px]:text-sm helvectica text-gray-500'>{item.locality}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-pagination !pt-5  flex space-x-2 justify-center cursor-pointer "></div>
        </Swiper>


      </div>


      {/* UPCOMING PROJECTS SECTION */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* head section */}
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-3xl font-medium helvectica'>Upcoming Redevelopment Projects</h1>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 left-0 right-0 flex justify-between px-4 sm:px-8 transform -translate-y-1/2"> */}

        {propertyDetails.length >= 4 && (
          <>
            <button
              onClick={() => swiperUnderConstructionRef.current?.slidePrev()}
              className="absolute sm:hidden top-4/8 min-[425px]:top-1/2 sm:top-2/4 lg:top-4/8 left-2  transform -translate-y-1/2 bg-[#202425] text-white z-10 cursor-pointer p-4 sm:p-4 md:p-4 rounded-full transition-all duration-150 ease-in-out"
            >
              <FaAngleLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => swiperUnderConstructionRef.current?.slideNext()}
              className="absolute sm:hidden top-4/8 min-[425px]:top-1/2 sm:top-2/4 lg:top-4/8 right-2 transform -translate-y-1/2 bg-[#202425] text-white z-10 cursor-pointer p-4 sm:p-4 md:p-4 rounded-full transition-all duration-150 ease-in-out"
            >
              <FaAngleRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )}

        {/* </div> */}

        <Swiper
          modules={[Autoplay, EffectCreative, Pagination]}
          slidesPerView={1}
          // centeredSlides={false}
          // draggable={true}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 1, loop: true },
            1024: { slidesPerView: 3, slidesPerGroup: 2, centeredSlides: true },
          }}
          // pagination={{
          //   clickable: true,
          //   el: ".custom-pagination"
          // }}
          // navigation
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperUnderConstructionRef.current = swiper)}
          className="max-w-5xl mx-auto my-10 flex justify-center"
        >
          {propertyDetails.filter(item => item.upcoming === true).map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center lg:-translate-x-44 xl:-translate-x-46">
              <div
                className='group hover:scale-105 transition-all duration-150 flex flex-col bg-white items-center justify-center p-4 rounded'
              >
                <div className='w-full h-full relative group'>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-center object-cover aspect-[6/8] rounded-sm'
                    />
                  ) : (
                    <>
                      <div
                        style={{ backgroundImage: `url(${Coming_Soon})` }}
                        className='w-full h-full sm:py-4 bg-gray-100 bg-center bg-contain  relative aspect-[6/8] flex justify-center items-center'>
                        <p className='absolute bottom-2 min-[425px]:bottom-4 sm:bottom-4 lg:bottom-8 xl:bottom-10 text-2xl min-[425px]:text-3xl lg:text-2xl font-bold uppercase text-gray-400'>Coming Soon</p>
                      </div>


                      <div className='w-full lg:hidden bg-gray-100 justify-center items-center inset-0 rounded'>
                        <button className='w-full lg:w-fit bg-gray-100 text-gray-100 py-2 min-[425px]:py-3 sm:py-2 md:py-2 px-6 cursor-none uppercase'>View Details</button>
                      </div>
                    </>
                  )}

                  {item.buttonText && (
                    <div className='w-full lg:hidden lg:group-hover:flex justify-center items-center group-hover:absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded'>
                      <a
                        href={`/${item.name}`}
                        target='_blank'
                      >
                        <button className='w-full lg:w-fit bg-[rgba(0,0,0,0.8)] text-white py-2 min-[425px]:py-3 sm:py-2 md:py-2 px-6 cursor-pointer uppercase'>View Details</button>
                      </a>
                    </div>
                  )}

                </div>
                <div className='flex flex-col items-center justify-center text-center bg-gray-50 w-full mt-4 p-2 -space-y-0.5 uppercase rounded-xs'>
                  <h1 className='text-sm font-semibold mb-0.5 min-[425px]:text-base min-[425px]:font-semibold helvectica text-black'>{item.name}</h1>
                  <p className='text-xs min-[425px]:text-sm helvectica text-gray-500'>{item.flats}</p>
                  <p className='text-xs min-[425px]:text-sm helvectica text-gray-500'>{item.locality}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-pagination !pt-5  flex space-x-2 justify-center cursor-pointer "></div>
        </Swiper>


      </div>



      {/* COMPLETED PROJECTS SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-10 relative">
        {/* head section */}
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-3xl font-medium helvectica'>Completed Redevelopment Projects</h1>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 left-0 right-0 flex justify-between px-4 sm:px-8 transform -translate-y-1/2"> */}

        {propertyDetails.length >= 4 && (
          <>
            <button
              onClick={() => swiperCompletedRef.current?.slidePrev()}
              className="absolute top-4/8 min-[425px]:top-1/2 sm:top-2/4 lg:top-4/8 lg:hidden left-2  transform -translate-y-1/2 bg-[#202425] text-white z-10 cursor-pointer p-4 sm:p-4 md:p-4 rounded-full transition-all duration-150 ease-in-out"
            >
              <FaAngleLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => swiperCompletedRef.current?.slideNext()}
              className="absolute top-4/8 min-[425px]:top-1/2 sm:top-2/4 lg:top-4/8 lg:hidden right-2 transform -translate-y-1/2 bg-[#202425] text-white z-10 cursor-pointer p-4 sm:p-4 md:p-4 rounded-full transition-all duration-150 ease-in-out"
            >
              <FaAngleRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )}

        {/* </div> */}

        <Swiper
          modules={[Autoplay, EffectCreative, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination"
          }}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperCompletedRef.current = swiper)}
          className="max-w-5xl mx-auto my-10"
        >
          {propertyDetails.filter(item => item.completed === true).map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className='group hover:lg:scale-105 transition-all duration-150 hover:shadow-lg flex flex-col bg-white items-center justify-center p-4 rounded'
              >
                <div className='w-full h-ful relative group'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-center object-cover aspect-[6/8] rounded-sm'
                  />
                  <div className='w-full lg:hidden lg:group-hover:flex justify-center items-center group-hover:absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded'>
                    <a
                      href={`/${item.name}`}
                      target='_blank'
                    >
                      <button className='w-full lg:w-fit bg-[rgba(0,0,0,0.8)] text-white py-2 min-[425px]:py-3 sm:py-2 md:py-2 px-6 cursor-pointer uppercase'>View Details</button>
                    </a>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center bg-gray-50 w-full mt-4 p-2 -space-y-0.5 uppercase rounded-xs'>
                  <h1 className='text-sm font-semibold mb-0.5 min-[425px]:text-base min-[425px]:font-semibold helvectica text-black'>{item.name}</h1>
                  <p className='text-xs min-[425px]:text-sm helvectica text-gray-500'>{item.flats}</p>
                  <p className='text-xs min-[425px]:text-sm helvectica text-gray-500'>{item.locality}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* paginations dots */}
          <div className="custom-pagination !pt-5  flex space-x-2 justify-center cursor-pointer "></div>
        </Swiper>
      </div>



    </>
  );
};

export default OurProjects;
