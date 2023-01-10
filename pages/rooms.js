import React from 'react'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Rooms from '../components/Rooms'
function rooms({ pageTitle, imageLink }) {
    pageTitle = "Our Rooms"
    imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"

    return (
        <div className='bg-slate-700 text-white'>
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
            />
            <Rooms />
            <Footer />
        </div>
    )
}

export default rooms