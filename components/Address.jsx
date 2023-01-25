import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faChrome, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons'
function Address() {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const web = <FontAwesomeIcon icon={faGlobe} />
    return (
        <div className='lg:h-80 text-slate-700 lg:flex lg:w-9/12 rounded-2xl my-10 mx-auto'>
            <iframe
                className="rounded-2xl lg:rounded-r-[0] lg:w-3/5 w-full"
                title="map"
                src="https://www.google.com/maps/embed/v1/place?q=The+Esquire+Resort+Limited,+Okunola+Crescent+Road,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
            <div className='h-full rounded-2xl lg:rounded-l-[0] mt-5 lg:mt-0 relative text-white bg-slate-500 p-4 flex flex-col space-y-5 justify-center'>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{location}</h1>
                    <h1 className=' font-mono text-lg'>18 Okunola Cres Rd, Ikorodu , Lagos</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{phone}</h1>
                    <h1 className=' font-mono text-lg'>070 3104 1271</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{phone}</h1>
                    <h1 className=' font-mono text-lg'>080 2421 1480</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{web}</h1>
                    <a href="https://www.esquireresorts.com" className='font-mono text-lg'>www.esquireresorts.com</a>
                </div>
            </div>
        </div>
    )
}
export default Address