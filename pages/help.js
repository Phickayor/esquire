import Head from '../components/Head'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import HelpSearch from '../components/HelpSearch'
import NavBar from '../components/NavBar'

function Help({ sideWidth, pageTitle, imageLink }) {

    const [marginValue, setMarginValue] = useState("0px")
    const [blurValue, setBlurValue] = useState("")
    pageTitle = "Help"
    imageLink = "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=2000"
    sideWidth = marginValue

    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    return (
        <div>
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
            <div className={`ml-[${marginValue}] duration-300 ${blurValue}`} style={{ marginLeft: marginValue }}>
                <div className='flex flex-coljustify-center'>
                    <HelpSearch />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Help