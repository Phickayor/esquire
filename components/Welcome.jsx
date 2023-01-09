import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

function Welcome() {
    return (
        <div className='h-[80vh] text-white flex flex-col justify-center  '>
            <div className='flex justify-between z-30 mx-auto w-11/12 p-10 '>
                <h1 className=" lg:text-8xl text-6xl flex flex-col justify-center lg:leading-[100px] leading-50px mt-10 font-semibold font-[poppins]"> Take a <br /> peaceful break</h1>
                <div className='bg-white p-4 rounded-2xl '>
                    <img src="/diamondSuite/a.jpeg" className='rounded-2xl w-80' />
                    <h1 className='text-[#121212] m-4 text-3xl text-center font-semibold font-mono'>Our Rooms <Link href="/rooms" className='text-white bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 py-2 px-4 rounded-full'>{rightArrow}</Link></h1>
                </div>
            </div>
        </div>
    )
}

export default Welcome