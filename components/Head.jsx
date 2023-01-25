import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
function Head(props, { sideWidth }) {
    const [blur, setBlur] = useState("blur")
    const [sideBarWidth, setSideBarWidth] = useState("0px")
    const menu = <FontAwesomeIcon icon={faBars} />
    const close = <FontAwesomeIcon icon={faClose} />
    const [sideMenuBtn, setSideMenuBtn] = useState(menu)
    const [margin, setMargin] = useState("300px")
    const pageTitle = props.pageTitle
    const imageLink = props.imageLink
    function sideMenu() {
        if (sideBarWidth === "0px") {
            setSideBarWidth("300px")
            sideWidth = sideBarWidth
            setSideMenuBtn(close)
            setMargin("0px")
            setBlur("")
            props.marginHandler(margin, blur)
        }
        else {
            setSideBarWidth("0px")
            sideWidth = sideBarWidth
            setSideMenuBtn(menu)
            setMargin("300px")
            setBlur("blur-md")
            props.marginHandler(margin, blur)
        }
    }
    return (
        <div className='h-40 bg-gray-700 lg:rounded-b-full  rounded-b-[40%] sticky top-0 z-30'>

            <img
                className=' absolute h-40 lg:rounded-b-full rounded-b-[40%] w-full object-cover opacity-60'
                src={imageLink}
                alt={pageTitle + "image"}
            />
            <button className='absolute border-2 my-4 lg:my-5 lg:mx-10 mx-5 text-white px-4 py-2 rounded-2xl text-6xl font-bold border-purple-500' onClick={sideMenu}>{sideMenuBtn}</button>
            <div className='flex flex-col justify-end h-40 '>
                <h1 className="relative font-semibold font-[poppins] text-center my-2 text-white lg:text-8xl text-6xl ">{pageTitle}</h1>
            </div>

        </div >
    )
}

export default Head