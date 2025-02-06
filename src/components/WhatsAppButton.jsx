import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsAppButton = () => {
    return (
        <>
            <div className="fixed bottom-4 right-4 z-40">
                <div className='flex items-center space-x-3 bg-[#1e5593] rounded-md text-white px-3 py-2.5'>
                    <a
                        href="https://wa.me/919326287741"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                    >
                        <MdLocalPhone className='h-6 w-6 '/>
                    </a>
                    <div className='h-6 w-[2px] bg-white'></div>
                    <a
                        href="https://wa.me/919326287741"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                    >
                        <IoLogoWhatsapp className='h-6 w-6 '/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default WhatsAppButton


