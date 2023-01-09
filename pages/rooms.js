import React from 'react'
import Head from '../components/Head'
function rooms({ pageTitle, imageLink }) {
    pageTitle = "Our Rooms"
    imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"

    return (
        <div className='bg-slate-400 text-white'>
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
            />

        </div>
    )
}

export default rooms