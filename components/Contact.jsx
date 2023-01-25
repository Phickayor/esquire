import React from 'react'
import Mail from './mail'
import Address from './Address'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
function ContactUs() {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} className="pb-2" />
    const phone = <FontAwesomeIcon icon={faPhone} className="pb-2" />
    const mail = <FontAwesomeIcon icon={faMailBulk} className="pb-2" />
    return (
        <div className='container mx-auto  w-10/12 my-10'>
            <h2 className='text-4xl text-center font-semibold font-mono'>Get in touch!</h2>
            <p className='text-md text-center'>Reach out to us for enquiries on Esquire Resorts</p>
            <div className='font- flex  text-center mx-2 mt-8 justify-around'>
                <div className='hover:bg-violet-500 p-4 px-10'>
                    <h1 className='text-4xl'>{location}</h1>
                </div>
                <div className='hover:bg-violet-500 p-4 px-10'>
                    <h1 className='text-4xl'>{phone}</h1>
                </div>
                <div className='hover:bg-violet-500 p-4 px-10'>
                    <h1 className='text-4xl'>{mail}</h1>
                </div>
            </div>

            {/* <Mail /> */}
            <Address />
        </div>
    )
}

export default ContactUs