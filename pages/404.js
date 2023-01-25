import Link from 'next/link'
import React, { useState } from 'react'
// import Head from 'next/head'
import Footer from '../components/Footer'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import OurRooms from '../components/OurRooms'
function NotFound({ pageTitle, imageLink, sideWidth }) {
    pageTitle = " Not Found"
    imageLink = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=2000"
    const [blurValue, setBlurValue] = useState("")
    const [marginValue, setMarginValue] = useState("0px")
    sideWidth = marginValue
    function marginParent(margin, blur) {
        setMarginValue(margin)
        setBlurValue(blur)
    }
    return (
        <div className='bg-[#8d4e9f]'>
            <NavBar
                sideWidth={sideWidth}
                shadowColor={"slate-700"}
                textColor={"white"}
            />
            <Head
                pageTitle={pageTitle}
                imageLink={imageLink}
                marginHandler={marginParent}
            />
            <div className={`ml-[${marginValue}]  ${blurValue} h-full`} style={{ marginLeft: marginValue }}>
                <div className='flex justify-between text-white mx-auto lg:w-10/12 w-11/12 text-center m-20 mb-5'>
                    <img className='w-1/2 lg:w-auto opacity-70 md:opacity-100 absolute sm:relative' src='https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif' />
                    <div className='z-20 md:w-1/2 flex flex-col justify-center space-y-8'>
                        <h1 className='text-5xl font-semibold font-mono leading-[56px]'>Are you lost?</h1>
                        <p className='my-2 text-md text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus neque obcaecati deleniti accusantium veritatis fuga error vero sequi eveniet, temporibus laudantium, quam voluptate et tempore nesciunt? Rem, eum iste.
                        </p>
                        <div className='flex justify-center space-x-10 '>
                            <Link href="/" className='hover:bg-inherit self-center text-purple-500 bg-white p-4 rounded-2xl text-xl lg:text-2xl text-white font-semibold hover:border-2 hover:text-white'>Back to Homepage</Link>
                            {/* <Link href="/" className='hover:bg-inherit self-center text-purple-500 bg-white p-4 rounded-2xl text-xl lg:text-2xl text-white font-semibold  hover:border-2 hover:text-white'>Back to Homepage</Link> */}
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default NotFound