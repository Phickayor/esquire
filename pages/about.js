import React, { useState } from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Goals from '../components/Goals'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import Services from '../components/Services'

function About({ pageTitle, imageLink, sideWidth }) {
    const [marginValue, setMarginValue] = useState("0px")
    const [blurValue, setBlurValue] = useState("")
    pageTitle = "About Us"
    imageLink = "/background/bg7.jpeg"
    sideWidth = marginValue

    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    return (
        <div className='flex flex-col min-h-screen'>
            <div>
                <NavBar
                    sideWidth={sideWidth}
                    shadowColor={"slate-700"}
                    textColor={"slate-700"}
                />
            </div>
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
                marginHandler={marginParent}
            />
            <div className={`ml-[${marginValue}] flex-1  duration-300 ${blurValue}`} style={{ marginLeft: marginValue }}>
                <AboutUs />
                {/* <img className='z-[-9999] opacity-30 lg:hidden left-0 mx-auto w-full  absolute' src="/background/logo.png" /> */}
                <Goals />
                <Services />
            </div>
            <Footer />
        </div>
    )
}

export default About