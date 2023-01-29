import React, { useState } from 'react'
import ContactUs from '../components/Contact'
// import Head from 'next/head'
import Footer from '../components/Footer'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import OurRooms from '../components/OurRooms'
function Contact({ pageTitle, imageLink, sideWidth }) {
    pageTitle = "Contact Us"
    imageLink = "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=2000"
    const [blurValue, setBlurValue] = useState("")
    const [marginValue, setMarginValue] = useState("0px")
    sideWidth = marginValue
    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    return (
        <div className='bg-slate-700 text-white flex flex-col min-h-screen'>

            {/* <Head>
                <title>Esquire Resorts | Rooms</title>
                <meta name="description" content="Esquire hotel rooms " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <NavBar
                sideWidth={sideWidth}
                shadowColor={"white"}
                textColor={"white"}
            />
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
                marginHandler={marginParent}
            />
            <div className={`flex-1 ml-[${marginValue}] ${blurValue}`} style={{ marginLeft: marginValue }}>
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}

export default Contact