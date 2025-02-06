import React from 'react'

import propertyDetails from "../data/PorpertyDetails"

const FeaturedProjects = () => {
 
  return (
    <>
      <div className='max-w-7xl container mx-auto py-16 px-4 lg:px-8'>
        {/* head Section */}
        <div className='text-center'>
          <h1 className='text-3xl sm:text-3xl xl:text-4xl helvectica mb-2 tracking-wide'>Let Our Work Do the Talking</h1>
          <h1 className='text-xl min-[425px]:text-xl sm:text-2xl xl:text-2xl helvectica tracking-wider'>Our Featured Projects</h1>
        </div>

        {/* grid Section */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-16 pt-10 lg:pt-10 xl:pt-14'>
          {propertyDetails.map((detail, index) =>
            <div key={index}>
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


export default FeaturedProjects