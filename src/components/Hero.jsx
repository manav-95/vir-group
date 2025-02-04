import React, { useRef } from 'react'

import propertyDetails from "../data/PorpertyDetails"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Hero = () => {

  const swiperRef = useRef(null);

  return (
    <>
      <div className='w-full poppins-regular'>
        <Swiper
          modules={[Autoplay, EffectCreative]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,

          }}
          speed={800}
          loop={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          {propertyDetails.map((detail, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-h-[700px] sm:max-h-[1000px] md:max-h-[1200px] lg:h-[540px] xl:h-[600px] bg-[#333333] text-white'>

                {/* For View More Button and Information */}
                <div className='lg:col-span-5 xl:col-span-4 py-6 relative'>
                  <div className='flex justify-start lg:justify-center items-center h-full'>
                    <div className='lg:border-t-2 lg:border-r-2 px-10 py-8 rounded-xs'>
                      <h1 className='text-[#00d8ff] text-4xl md:text-5xl mb-2'>{detail.name}</h1>
                      <p className='text-lg md:text-xl tracking-wider text-white uppercase'>{detail.locality}, {detail.city}</p>
                      <div className='flex items-center space-x-3 my-3'>
                        {detail.arrflats.map((flat, index) => (
                          <p key={index} className='border py-1.5 px-2 min-[425px]:px-4 lg:px-4 text-gray-300 font-medium hover:text-[#00d8ff] transition-all duration-150 ease-in-out'>{flat}</p>
                        ))}
                      </div>

                      <a href={`${detail.path}`} target='_blank'>
                        <button className='bg-transparent uppercase py-1 px-4 mb-2 my-1 rounded-xs text-[#00d8ff] font-medium cursor-pointer border border-[#00d8ff] hover:bg-[#00d8ff] hover:text-black hover:border hover:border-transparent duration-150 transition-all ease-in-out'>
                          View Details
                        </button>
                      </a>

                    </div>
                  </div>
                  <div className='absolute bottom-0 lg:bottom-4 right-2 lg:right-0 flex items-center justify-center space-x-2.5 lg:space-x-4'>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='border-2 border-[#00d8ff] text-[#00d8ff] hover:bg-[#00d8ff] hover:text-black p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleLeft className='h-5 w-5' /></button>
                    <button onClick={() => swiperRef.current?.slideNext()} className='border-2 border-[#00d8ff] text-[#00d8ff] hover:bg-[#00d8ff] hover:text-black p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleRight className='h-5 w-5' /></button>

                  </div>
                </div>
                {/* For Image That Contain informations */}
                <div className='lg:col-span-7 xl:col-span-8 flex flex-col justify-center'>
                  <div className="h-[400px] sm:h-[700px] md:h-[800px] lg:h-[540px] xl:h-[600px]">
                    <img
                      src={detail.image}
                      alt='Hero image'
                      className='w-full h-full object-fill lg:object-fill  object-top'
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Hero