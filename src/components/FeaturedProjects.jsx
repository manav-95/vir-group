import React from 'react'

import propertyDetails from "../data/PorpertyDetails"

const FeaturedProjects = () => {
 
  return (
    <>
      <div className='max-w-7xl container mx-auto py-16 px-4'>
        {/* head Section */}
        <div className='text-center'>
          <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Let Our Work Do the Talking</h1>
          <h1 className='text-xl min-[425px]:text-2xl sm:text-3xl font-medium'>Our Featured Projects</h1>
        </div>

        {/* grid Section */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-12 pt-10 lg:pt-10 xl:pt-14'>
          {propertyDetails.map((detail, index) =>
            <div key={index}>
              <div

                className='group hover:shadow-lg flex flex-col bg-white items-center justify-center shadow p-2 rounded'
              >
                <div className='w-full h-full relative'>
                  <img
                    src={detail.image}
                    alt={detail.name}
                    className='w-full h-full object-center object-cover aspect-[4/5] rounded'
                  />
                  <div className='w-full lg:hidden lg:group-hover:flex justify-center items-center group-hover:absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded'>
                    <a
                      href={`/${detail.name}`}
                      target='_blank'
                    >
                      <button className='w-full lg:w-fit bg-[rgba(0,0,0,0.8)] text-white py-2 min-[425px]:py-3 sm:py-2 md:py-3 px-6 cursor-pointer uppercase'>View Details</button>
                    </a>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center bg-gray-100 w-full mt-2 px-2 py-1 space-y-0 uppercase rounded'>
                  <h1 className='text-lg font-medium'>{detail.name}</h1>
                  <p className='text-sm font-medium text-gray-500'>{detail.flats}</p>
                  <p className='text-sm font-medium text-gray-500'>{detail.locality}</p>
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