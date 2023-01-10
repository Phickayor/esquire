import React from 'react'
import Footer from '../components/Footer'
import Head from '../components/Head'

function about({ pageTitle, imageLink }) {
    pageTitle = "About Us"
    imageLink = "/background/bg7.jpeg"

    return (
        <div className='text-white'>

            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
            />

            <Footer />
        </div>
    )
}

export default about