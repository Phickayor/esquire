import React from 'react'

function Head(props) {
    const pageTitle = props.pageTitle
    const imageLink = props.imageLink
    return (
        <div className='h-60 bg-gray-700 rounded-b-2xl'>
            <img
                className=' absolute h-60 rounded-b-2xl w-full opacity-60'
                src={imageLink}
                alt={pageTitle + "image"}
            />
            <div className='flex flex-col justify-end h-60 '>
                <h1 className="relative font-semibold font-[poppins] text-center text-white text-8xl">{pageTitle}</h1>
            </div>
        </div>
    )
}

export default Head