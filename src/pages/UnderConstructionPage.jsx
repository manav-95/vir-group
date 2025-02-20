import React from 'react'

import propertyDetails from "../data/PorpertyDetails"

import HeroImage from '../assets/hero-images/all-projects-category-hero-bg.jpg'

const UnderConstructionPage = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(0,85,150,0.8)]"></div>

                {/* Content on top of the overlay */}
                <div className="relative h-full w-full flex justify-center items-center text-white text-center px-4">
                    <h1 className="text-3xl md:text-4xl helvectica tracking-wide max-w-xl drop-shadow-2xl">
                        Under Construction Redevelopment Projects
                    </h1>
                </div>
            </div>


            <div className='max-w-7xl container mx-auto py-10 px-4 lg:px-8'>

                <div className='max-w-7xl container mx-auto px-4 pt-6'>
                    <div className='text-base helvectica text-center tracking-wide leading-9'>
                        <p className='mb-4'>
                            VIR Group is a unique construction company that has been a driving force of transformation in the lives of Mumbai and suburban residents. Given the city's vertical growth, redevelopment has become a blessing in Mumbai. There are several distinct ongoing projects in Mumbai providing numerous amenities, improved living standards, well-planned community spaces, and much more among other benefits.
                        </p>
                        <p className=''>
                            Choosing VIR Group's under-construction projects in Mumbai ensures you a budget-friendly and well-balanced lifestyle.
                        </p>
                    </div>
                </div>

                {/* grid Section */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-16 pt-10 lg:pt-10 xl:pt-14'>
                    {propertyDetails.filter(detail => detail.underConstruction === true).map((detail) =>
                        <div key={detail.id}>
                            <div

                                className='group border border-transparent hover:border-gray-200 ease-in-out hover:shadow-2xl hover:scale-105 flex flex-col bg-white items-center justify-center p-4 rounded transition-all duration-300'
                            >
                                <div className='w-full h-full relative'>
                                    <img
                                        src={detail.image}
                                        alt={detail.name}
                                        className='w-full h-full object-center object-fill aspect-[4/5] rounded'
                                    />
                                    <div className='w-full lg:hidden lg:group-hover:flex justify-center items-center group-hover:absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded'>
                                        <a
                                            href={`/${detail.name}`}
                                            target='_blank'
                                        >
                                            <button className='w-full lg:w-fit bg-[rgba(0,0,0,0.8)] text-white py-2 min-[425px]:py-3 sm:py-2 md:py-2 px-6 cursor-pointer uppercase'>View Details</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center text-center w-full px-2 mt-1 pt-1.5 space-y-0 uppercase rounded tracking-wide'>
                                    <h1 className='text-sm font-semibold mb-0.5'>{detail.name}</h1>
                                    <p className='text-xs text-gray-400 helvectica'>{detail.flats}</p>
                                    <p className='text-xs text-gray-400 helvectica'>{detail.locality}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>


        </>
    )
}

export default UnderConstructionPage