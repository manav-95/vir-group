import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import EnquireNowButton from '../EnquireNowButton'
import WhatsAppButton from '../WhatsAppButton'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='mt-28 min-[425px]:mt-22'>
                <Outlet />
            </div>
            <EnquireNowButton />
            <WhatsAppButton />
            <Footer />
        </>
    )
}

export default Layout