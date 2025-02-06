import React from 'react'

const StayInTouch = () => {
    return (
        <>
            <div className='w-full bg-white'>
                <div className='max-w-7xl container mx-auto px-4 py-10'>
                    <div className='grid lg:grid-cols-2 gap-y-4 items-center justify-center'>
                        <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left uppercase text-white'>
                            <h1 className='text-3xl helvectica text-[#202425] mb-1.5 tracking-wide'>Stay In Touch</h1>
                            <p className='text-xs md:text-sm font-medium text-[#202425] tracking-wide'>Sign up for our newsletter to receive updates and exclusive offers</p>
                        </div>
                        <form target='_blank' action="https://formsubmit.co/a9manav1234@gmail.com" method="POST">
                        <div className='flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4'>
                            <input
                                type='text'
                                placeholder='Enter Email Address'
                                required
                                className='bg-gray-100 focus:border-2 focus:border-[#00d8ff] helvectica tracking-wider py-3 px-3 lg:p-3 w-full md:w-full lg:w-72 xl:w-96 rounded-sm outline-none'
                            />
                            <button type='submit' className='text-[#202425] bg-[#00d8ff] font-medium tracking-wide py-2 px-6 md:py-2.5 md:px-10 lg:py-3 w-full md:w-full lg:w-fit rounded-sm transition-all duration-150 ease-in-out cursor-pointer'>Sign up</button>
                        </div>
                       </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StayInTouch