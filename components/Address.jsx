import React from 'react'

function Address() {
    return (
        <div className='mx-auto lg:w-3/5 '>
            <iframe
                className="map w-full"
                title="map"
                src="https://www.google.com/maps/embed/v1/place?q=tunrose+ijede+ikorodu+lagos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
        </div>
    )
}

export default Address