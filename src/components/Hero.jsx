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
            delay: 5000,
            disableOnInteraction: false,

          }}
          speed={600}
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
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-h-[700px] sm:max-h-[1000px] md:max-h-[1200px] lg:h-[540px] xl:h-[720px] bg-[#202425] text-white'>

                {/* <div className='lg:col-span-5 xl:col-span-4 py-6 relative'>
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

                <div className='lg:col-span-7 xl:col-span-8 flex flex-col justify-center'>
                  <div className="h-[400px] sm:h-[700px] md:h-[800px] lg:h-[540px] xl:h-[600px]">
                    <img
                      src={detail.image}
                      alt='Hero image'
                      className='w-full h-full object-fill lg:object-fill  object-top'
                    />
                  </div>
                </div> */}


                <div className='lg:col-span-5 xl:col-span-4 p-6'>
                  <div className='flex justify-start lg:justify-center items-center h-full'>
                    <div className=''>
                      <div className='lg:border-[3px] lg:border-white lg:w-96 xl:w-96 2xl:w-md lg:translate-x-36 xl:translate-x-36 2xl:translate-x-52 lg:py-8'>
                        <div className='bg-[#202425] w-full lg:w-fit lg:-translate-x-20 py-4 lg:py-8'>
                          <h1 className='text-3xl tracking-wider font-extralight helvectica mb-2 text-[var(--primary-color)] '>{detail.name}</h1>
                          <p style={{ letterSpacing: '4px' }} className='text-sm lg:text-base text-[#999999] font-normal uppercase mb-2'>{detail.locality}, {detail.city}</p>
                          <div className='flex items-center space-x-2 lg:space-x-5 mb-2.5'>
                            {detail.arrflats.map((flat, index) => (
                              <p key={index} className='border text-sm py-1.5 px-4 text-[#999999] hover:text-[#00d8ff] transition-all duration-150 ease-in-out'>{flat}</p>
                            ))}
                          </div>
                          <div className='flex items-center space-x-4'>
                            <div className='h-[2px] bg-white w-16'></div>
                            <a href={`${detail.name}`} target='_blank' className='uppercase font-normal text-sm'>view details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className='lg:col-span-7 xl:col-span-8 flex flex-col justify-center'>
                  <div className="max-h-[400px] sm:max-h-[700px] md:max-h-[800px] lg:max-h-[540px] xl:max-h-[720px]">
                    <a href={`${detail.name}`} target='_blank'>
                    <img
                      src={detail.image}
                      alt='Hero image'
                      className='w-full h-full object-fill object-top aspect-square sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[1/1]'
                    />
                    </a>
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