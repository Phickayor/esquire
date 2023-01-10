import React from 'react'

function Head(props) {
    const pageTitle = props.pageTitle
    const imageLink = props.imageLink
    return (
        <div className='h-40 bg-gray-700'>
            <img
                className=' absolute h-40 lg:rounded-b-full rounded-b-[40%] w-full opacity-60'
                src={imageLink}
                alt={pageTitle + "image"}
            />
            <div className='flex flex-col lg:justify-end justify-center h-40 '>
                <h1 className="relative font-semibold font-[poppins] text-center text-white lg:text-8xl text-6xl ">{pageTitle}</h1>
            </div>
        </div>
    )
}

export default Head