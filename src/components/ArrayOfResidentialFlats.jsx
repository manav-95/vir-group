import React from 'react'

const ArrayOfResidentialFlats = () => {
    const residentialProjects = [
        '1 BHK Flats in Mumbai',
        '2 BHK Flats in Mumbai',
        '3 BHK Flats in Mumbai',
        '4 BHK Flats in Mumbai (Jodi Flats)',
        '1 BHK Flats in Borivali',
        '2 BHK Flats in Borivali',
        '3 BHK Flats in Borivali',
        '1 BHK Flats in Malad',
        '2 BHK Flats in Malad',
        '3 BHK Flats in Malad',
    ];

    return (
        <div className='w-full bg-[#e7e9eb] py-10'>
            <div className='max-w-7xl container mx-auto px-4'>
                <h1 className='text-xl helvectica font-medium mb-2.5 tracking-wide text-[#1e5593]'>Residential Projects by Mumbai Suburb:</h1>
                <div className='flex justify-start items-center flex-wrap gap-2 text-sm text-[#333333]'>
                    {residentialProjects.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className='text-sm helvectica tracking-wide'>{item}</span>
                            {index !== residentialProjects.length - 1 && <span className="px-2"><div className='h-5 w-[2px] bg-[#1e5593]'></div></span>}
                        </React.Fragment>
                    ))}
                </div>

                <h1 className='text-xl helvectica font-medium mb-2.5 mt-8 tracking-wide text-[#1e5593]'>Residential Projects by Area:</h1>
                <div className='flex justify-start items-center flex-wrap gap-2 text-sm text-[#333333]'>
                    {residentialProjects.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className='text-sm helvectica tracking-wide'>{item}</span>
                            {index !== residentialProjects.length - 1 && <span className="px-2"><div className='h-5 w-[2px] bg-[#1e5593]'></div></span>}
                        </React.Fragment>
                    ))}
                </div>

                <h1 className='text-xl helvectica font-medium mb-2.5 mt-8 tracking-wide text-[#1e5593]'>Residential Apartments by Projects:</h1>
                <div className='flex justify-start items-center flex-wrap gap-2 text-sm text-[#333333]'>
                    {residentialProjects.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className='text-sm helvectica tracking-wide'>{item}</span>
                            {index !== residentialProjects.length - 1 && <span className="px-2"><div className='h-5 w-[2px] bg-[#1e5593]'></div></span>}
                        </React.Fragment>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default ArrayOfResidentialFlats;
