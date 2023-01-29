import React, { useEffect, useState } from 'react'
import Mail from './mail'
import Address from './Address'
import CallNow from './callNow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
function ContactUs() {
    const [content, setContent] = useState(<CallNow />)
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} className="pb-2" />
    const phone = <FontAwesomeIcon icon={faPhone} className="pb-2" />
    const mail = <FontAwesomeIcon icon={faMailBulk} className="pb-2" />
    const [phoneDiv, setPhoneDiv] = useState(<CallNow />)
    const [mailDiv, setMailDiv] = useState(<CallNow />)
    const [locationDiv, setLocationDiv] = useState(<CallNow />)

    function setColor() {
        if (content.type.name === "callNow") {
            setPhoneDiv("purple-500")
            setLocationDiv("")
            setMailDiv("")
        }
        else if (content.type.name === "Address") {
            setLocationDiv("purple-500")
            setPhoneDiv("")
            setMailDiv("")
        }
        else {
            setMailDiv("purple-500")
            setLocationDiv("")
            setPhoneDiv("")
        }
    }
    useEffect(() => {
        setColor()
    })

    return (
        <div className='container mx-auto flex- w-10/12 my-10'>
            <h2 className='text-4xl text-center font-semibold font-mono'>Get in touch!</h2>
            <p className='text-md text-center'>Reach out to us for enquiries on Esquire Resorts</p>
            <div className='font- flex  text-center mx-2 mt-8 justify-around'>
                <div className={`hover:bg-violet-500 cursor-pointer bg-${locationDiv} p-4 px-10  rounded-2xl`} onClick={() => setContent(<Address />)}>
                    <h1 className='text-4xl'>{location}</h1>
                </div>
                <div className={`hover:bg-violet-500 bg-${phoneDiv} cursor-pointer p-4 px-10  rounded-2xl`} onClick={() => setContent(<CallNow />)}>
                    <h1 className='text-4xl'>{phone}</h1>
                </div>
                <div className={`hover:bg-violet-500 cursor-pointer bg-${mailDiv} p-4 px-10  rounded-2xl`} onClick={() => setContent(<Mail />)}>
                    <h1 className='text-4xl'>{mail}</h1>
                </div>
            </div>
            {content}
        </div>
    )
}

export default ContactUs