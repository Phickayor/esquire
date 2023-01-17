import React, { useState } from 'react'
// import Head from 'next/head'
import Footer from '../components/Footer'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import OurRooms from '../components/OurRooms'
function NotFound({ pageTitle, imageLink, sideWidth }) {
    pageTitle = "Page not Found ?"
    imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"
    const [blurValue, setBlurValue] = useState("")
    const [marginValue, setMarginValue] = useState("0px")
    sideWidth = marginValue
    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    return (
        <div>
            <NavBar
                sideWidth={sideWidth}
                shadowColor={"slate-700"}
                textColor={"slate-700"}
            />
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
                marginHandler={marginParent}
            />
            <div className={`ml-[${marginValue}] ${blurValue} h-full`} style={{ marginLeft: marginValue }}>
                <div className='h-full text-slate-700 mx-auto w-10/12 text-center m-20 mb-5'>
                    <h1 className='text-4xl font-semibold font-mono'> Are you lost ?</h1>
                    <p className='my-2 text-md'>
                        Lorem ipsum wa dolor sit amet consectetur adipisicing elit.
                        Similique totam illum enim.
                    </p>
                    <button className='hover:bg-inherit hover:border-2 hover:text-slate-700 bg-violet-500 py-4 rounded-2xl text-xl text-white font-semibold w-1/2'>Back to Homepage</button>
                </div>
                <footer className='mb-0 w-full'>
                    <Footer />

                </footer>
            </div>
        </div>
    )
}

export default NotFound