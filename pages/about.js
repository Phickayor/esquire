import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Goals from '../components/Goals'
import Head from '../components/Head'
import Services from '../components/Services'

function about({ pageTitle, imageLink }) {
    pageTitle = "About Us"
    imageLink = "/background/bg7.jpeg"

    return (
        <div>

            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
            />
            <AboutUs />
            {/* <img className='z-[-9999] opacity-30 lg:hidden left-0 mx-auto w-full  absolute' src="/background/logo.png" /> */}
            <Goals />
            <Services />
            <Footer />
        </div>
    )
}

export default about