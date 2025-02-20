import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';


import Playground from '../assets/hero-images/amenities/playground-image.jpg'
import Barbeque from '../assets/hero-images/amenities/barbeque-image.jpg'
import Yoga from '../assets/hero-images/amenities/yoga-image.jpg'
import Bench from '../assets/hero-images/amenities/sitting-bench-image.jpg'

const Hero = () => {

    const swiperRef = useRef(null);

    const propertyDetails = [
        {
            name: 'Vir Paradise',
            city: 'Mumbai',
            locality: 'Malad (W)',
            arrflats: ['2 BHK', '3 BHK',],
        },
    ]

    const amenities = [
        Playground,
        Barbeque,
        Bench,
        Yoga,
    ]

    return (
        <>
            <div className='w-full poppins-regular'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-h-[700px] sm:max-h-[1000px] md:max-h-[1200px] lg:h-[540px] xl:h-[720px] bg-[#202425] text-white'>
                    {propertyDetails.map((detail) => (
                        <div className='lg:col-span-4 xl:col-span-4 p-6'>
                            <div className='flex justify-start lg:justify-center items-center h-full'>
                                <div className=''>
                                    <div className='lg:border-[3px] lg:relative lg:z-40 lg:border-white lg:w-78 xl:w-96 2xl:w-md lg:translate-x-30 xl:translate-x-36 2xl:translate-x-52 lg:py-4 xl:py-8'>
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

                    ))}


                    <div className='lg:col-span-8 xl:col-span-8 flex flex-col justify-center'>
                        <Swiper
                            modules={[Autoplay, EffectCreative]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,

                            }}
                            speed={600}
                            loop={true}
                            spaceBetween={0}
                            // effect={'creative'}
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
                            {amenities.map((item, index) =>
                                <SwiperSlide key={index} className="max-h-[300px] sm:max-h-[700px] md:max-h-[800px] lg:max-h-[540px] xl:max-h-[720px]">
                                    <img
                                        src={item}
                                        alt='Hero image'
                                        className='w-full h-full object-fill object-top aspect-[3/2] sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/2]'
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>

                    </div>


                </div>
            </div>


        </>
    )
}

export default Hero