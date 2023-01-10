import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    const mail = <FontAwesomeIcon icon={faEnvelope} />
    const location = <FontAwesomeIcon icon={faMapMarker} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    return (<footer className="bg-[#ebeef3] text-center py-[40px] text-gray-700">
        <div className="container mx-auto px-[15px] md:px-[24px] lg:flex lg:justify-between">
            <div className="flex flex-col md:flex-row items-center md:items-start lg:w-[65%]">
                <div className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]">
                    <div className="font-bold mb-4 text-lg">Site Map</div>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">View Rooms</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Our Services</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">About Us</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Gallery</a>
                </div>
                <div className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]">
                    <div className="font-bold mb-4 text-lg">Help Center</div>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">{"FAQ'S"}</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Terms & Conditions</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Privacy Policy</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Payment Methods</a>
                </div>
                <div className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]">
                    <div className="font-bold mb-4 text-lg">Contact Details</div>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">{location} &nbsp;36, Samsideen Jaiyesimi Aga Ikorodu </a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">{phone} &nbsp;07031041271, 08024211480</a>
                    <a href="#" className="boxuplink font-normal leading-[200%] text-sm">{mail} &nbsp;info@esquireresorts.com</a>
                </div>
            </div>
            <div>
                <div className='md:flex md:justify-between md:items-center lg:flex-col'>
                    <div className="social text-center md:text-start md:self-start">
                        <div className="mb-[8px] font-bold text-[18px]">Join Us</div>
                        <div className="social_links text-primary text-[23px]">
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faFacebookF} className="mr-[35px] md:mr-[45px]" /></a>
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faTwitter} className="mr-[35px] md:mr-[45px]" /></a>
                            <a href="" className='inline-block'><FontAwesomeIcon icon={faInstagram} className="mr-0" /></a>
                        </div>
                    </div>
                    <div className="news mt-[40px] md:mt-[0]">
                        <div className="newsbox mb-[20px] max-w-[400px] md:max-w-[350px]">
                            <div className="mb-[8px] font-bold text-[18px] md:text-start">Don&apos;t Miss Out</div>
                            <p className='mb-[24px] leading-[19px] font-normal md:text-[14px]'>Exclusive offers and products are just a click away.</p>
                            <form action="">
                                <div className="formbox flex justify-between">
                                    <div className="forminput w-[100%]">
                                        <input type="text" className='h-[40px] py-[10px] px-[16px] border border-[#dcdcdc] rounded-l w-[100%]' placeholder='Email Address' />
                                    </div>
                                    <div className="formbtn min-w-auto w-[120px] rounded-r bg-[#1976ED] text-white">
                                        <button className='border-primary min-h-[40px] text-sm px-[11px] font-bold'>SIGN UP</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center text-[#999999] test-sm">&copy; 2023 Esquireresorts.com All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer