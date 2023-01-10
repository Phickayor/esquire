import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Head(props) {
    const menu = <FontAwesomeIcon icon={faBars} />
    const pageTitle = props.pageTitle
    const imageLink = props.imageLink
    return (
        <div className='h-40 bg-gray-700 sticky top-0'>
            <img
                className=' absolute h-40 lg:rounded-b-full rounded-b-[40%] w-full object-cover opacity-60'
                src={imageLink}
                alt={pageTitle + "image"}
            />
            <button className='absolute border-2 my-5 lg:mx-10 mx-5 px-4 py-2 rounded-2xl text-6xl font-bold border-purple-500' >{menu}</button>
            <div className='flex flex-col justify-end h-40 '>
                <h1 className="relative font-semibold font-[poppins] text-center m-2 text-white lg:text-8xl text-6xl ">{pageTitle}</h1>
            </div>
        </div>
    )
}

export default Head