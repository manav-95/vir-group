// React Imports
import React from 'react'
import { useParams } from "react-router-dom";

// Data
import propertyDetails from '../data/PorpertyDetails';

// Icons
import { FaLocationDot } from "react-icons/fa6";


const ProjectDetails = () => {


    const { name } = useParams();
    const content = propertyDetails.find((item) => item.name === name);

    return (
        <>
            <div className='w-full'>

                {/* HERO SECTION */}
                <div className='w-full h-full min-[425px]:h-[650px] sm:h-[800px] lg:h-[800px] xl:h-[1000px] bg-[#333333] text-white'>
                    <div className="h-full">
                        <img
                            src={content.image}
                            alt='Hero image'
                            className='w-full h-full object-cover min-[425px]:object-fill'
                        />
                    </div>
                </div>

                {/* DETAILS SECTION */}
                <div className='w-full bg-[#26282a] text-white '>
                    <div className='max-w-7xl container mx-auto px-4 min-[425px]:px-8 py-10 sm:py-14'>

                        {/* PROJECT NAME AND LOCATED AT */}
                        <div className='flex flex-col min-[425px]:items-center justify-center text-center'>
                            <h1 className='text-4xl sm:text-5xl mb-4 text-[#00d8ff]'>{content.name}</h1>
                            <div className='flex items-start justify-center min-[425px]:text-center text-base md:text-lg font-medium text-gray-400'>
                                <FaLocationDot className='md:h-5 md:w-5 flex-shrink-0 mt-1 mr-1 md:mr-1.5' />
                                <p className=''>{content.locatedAt}</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-2 gap-10 sm:gap-14 pt-10 sm:pt-14 lg:pb-8 md:max-w-2xl lg:max-w-full container mx-auto'>

                            {/* PROJECT DETAILS */}
                            <div className='lg:col-span-7 xl:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-8'>
                                <div className='sm:pl-10 md:pl-16'>
                                    <h1 className='text-2xl text-[#00d8ff] mb-1'>Project Status</h1>
                                    <p className='text-gray-400 text-lg'>{content.status}</p>
                                </div>

                                {/* <div>
                                    <h1 className='text-2xl text-[#00d8ff] mb-1'>Apartment Options</h1>
                                    {content.apartmentOptions.map((option) =>
                                        <p className='text-gray-400 text-lg'>{option}</p>
                                    )}
                                </div> */}

                                <div className='sm:pl-10 md:pl-16'>
                                    <h1 className='text-2xl text-[#00d8ff] mb-1'>Project Type</h1>
                                    <p className='text-gray-400 text-lg'>{content.type}</p>
                                </div>


                                <div className='sm:pl-10 md:pl-16'>
                                    <h1 className='text-2xl text-[#00d8ff] mb-1'>Total Area</h1>
                                    <p className='text-gray-400 text-lg'>{content.totalConstructionArea}</p>
                                </div>


                                <div className='sm:pl-10 md:pl-16'>
                                    <h1 className='text-2xl text-[#00d8ff] mb-1'>Apartment Options</h1>

                                    <p className='text-gray-400 text-lg'>{content.flats}</p>

                                </div>

                                <div className='sm:pl-10 md:pl-16'>
                                    <h1 className='text-2xl text-[#00d8ff] mb-1'>Building Info</h1>
                                    {content.buildingInfoArr.map((info) =>
                                        <li className='text-gray-400 text-base uppercase mb-0.5'>{info}</li>
                                    )}
                                </div>


                                <div className='sm:pl-10 md:pl-16'>
                                    <h1 className="text-2xl text-[#00d8ff] mb-1">Contact Details</h1>
                                    {content.contactDetails.map((detail, index) => {
                                        const IconComponent = detail.icon;
                                        return (
                                            <div key={index} className="flex items-start mt-2 text-gray-400 text-lg">
                                                <IconComponent className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                                                <div className="flex flex-col space-y-[1px]">
                                                    {detail.phone1 && <p>{detail.phone1}</p>}
                                                    {detail.phone2 && <p>{detail.phone2}</p>}
                                                    {detail.email1 && <p>{detail.email1}</p>}
                                                    {detail.email2 && <p>{detail.email2}</p>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>


                            </div>

                            {/* REQUEST FORM */}
                            <div className='w-full lg:col-span-5 xl:col-span-1'>
                                <form>
                                    <div className='flex justify-center items-center mb-1'>
                                        <h1 className='text-[#00d8ff] text-2xl lg:text-2xl xl:text-2xl mb-1.5'>Request For More Details</h1>
                                    </div>
                                    <div className='grid grid-cols-1 py-4 gap-y-4'>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-2.5 gap-x-4 md:px-14'>
                                            <input
                                                type="text"
                                                placeholder='Name'
                                                className='border-2 border-gray-400 w-full py-3 px-4 rounded-xs outline-none'
                                            />
                                            <input
                                                type="text"
                                                placeholder='Email'
                                                className='border-2 border-gray-400 w-full py-3 px-4 rounded-xs outline-none'
                                            />
                                            <input
                                                type="text"
                                                placeholder='Contact No.'
                                                className='border-2 border-gray-400 w-full py-3 px-4 rounded-xs outline-none'
                                            />
                                        </div>
                                        <div className='w-full flex justify-center my-1 md:px-14'>
                                            <button
                                                type='submit'
                                                className='bg-[#00d8ff] py-2.5 px-12 w-full md:w-full uppercase text-lg font-semibold text-black rounded-xs cursor-pointer'
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className='md:max-w-2xl lg:max-w-full mx-auto container text-sm lg:text-base  py-6 helvectica tracking-wider leading-7.5 text-gray-400'>
                            <p className='text-justify text-align-last-center'>
                                We take this opportunity to introduce ourselves M/s. VIR Group. M/S VIR GROUP is one of the leading real estate companies, duly incorporated under the Indian Companies Act through its Directors Mr. Virabhai Prajapati & Mr. Tarun Prajapati. Being a prominent real estate player, we primarily operate in Mumbai's suburban districts. Our company has a track record of providing high-quality homes and has completed numerous real estate renovation projects with success.
                            </p>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}

export default ProjectDetails