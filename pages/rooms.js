import React, { useState } from 'react'
// import Head from 'next/head'
import Footer from '../components/Footer'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import OurRooms from '../components/OurRooms'
function Rooms({ pageTitle, imageLink, sideWidth }) {
    pageTitle = "Our Rooms"
    imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"
    const [blurValue, setBlurValue] = useState("")
    const [marginValue, setMarginValue] = useState("0px")
    sideWidth = marginValue
    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    return (
        <div className='bg-slate-700 text-white'>

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
            <div className={`ml-[${marginValue}] ${blurValue}`}>
                <OurRooms />
                <Footer />
            </div>
        </div>
    )
}

export default Rooms