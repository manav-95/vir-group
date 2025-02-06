import React from 'react';
import CardImage from '../assets/property-details/global-residency.jpeg'

const AboutCard = () => {
    return (
        <>
            <div className="max-w-7xl container mx-auto px-4 lg:px-8 py-10 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-10">
                    {/* For Images */}
                    <div className="lg:col-span-6 hidden lg:flex ">
                        <div className="h-full w-full">
                            <img
                                src={CardImage}
                                alt="Building image"
                                className="h-[400px] min-[425px]:h-[500px] sm:h-[650px] md:h-[700px] lg:h-full w-full object-cover aspect-square object-start rounded-sm shadow-md"
                            />
                        </div>
                    </div>

                    {/* For Content */}
                    <div className="lg:col-span-6">
                        {/* Title and Subtitle */}
                        <div className='flex flex-col items-start sm:items-start lg:items-start justify-center text-left sm:text-center lg:text-left'>
                            <h1 className="tracking-wider text-xl min-[425px]:text-2xl sm:text-3xl lg:text-3xl text-gray-800 mb-2.5 helvectica">
                                VIR Group, Mumbai
                            </h1>
                            <p className="tracking-wider text-sm sm:text-lg font-medium helvectica text-gray-700 mb-2">
                                "We Build Your Dreams"
                            </p>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col space-y-5 text-gray-600 text-sm leading-7 my-2 sm:my-4 lg:my-3.5 helvectica tracking-wider">
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

                        {/* Button */}
                        <div className="w-full md:w-fit">
                            <button className="bg-transparent tracking-wider w-full md:w-fit my-4 cursor-pointer text-[#00d8ff] py-2 px-6 text-sm rounded-xs hover:shadow border border-[#00d8ff] hover:bg-[#00d8ff] hover:text-black hover:border hover:border-transparent transition-all duration-150 ease-in-out">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutCard;
