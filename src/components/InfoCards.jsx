import React from 'react'

const InfoCards = () => {
    const information = [
        { count: '03', title: 'Completed', text: 'Redevelopment projects with combined total developable area of', sqft: '0.00 million sq.ft.', },
        { count: '01', title: 'Under Construction', text: 'Redevelopment projects with combined total developable area of', sqft: '0.00 million sq.ft.', },
        { count: '02', title: 'Upcoming', text: 'Redevelopment projects with combined total developable area of', sqft: '0.00 million sq.ft.', },
    ]
    return (
        <>
            <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
            className='w-full py-20'>
                <div className='max-w-7xl container mx-auto px-4 text-white'>
                    <div className='flex justify-center mb-20'>
                        <h1 className='text-4xl lg:text-3xl text-center helvectica tracking-widest'>Numbers At a Glance</h1>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4 py-0 lg:py-4 px-4'>
                        {information.map((info, index) =>
                            <div
                            key={index}
                            className='flex flex-col justify-center items-center text-center space-y-2 lg:space-y-3'
                            >
                                <h1 className='text-xl min-[425px]:text-2xl flex items-end gap-2 helvectica'><p className='text-xl min-[425px]:text-4xl font-lighter lg:text-3xl xl:text-3xl'>{info.count}</p>{info.title}</h1>
                                <p className='text-sm min-[425px]:text-base'>{info.text}</p>
                                {/* <p className='text-xl min-[425px]:text-2xl helvectica'>{info.sqft}</p> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCards