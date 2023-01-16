import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
function Faqs() {
    const MoreOrLess = <FontAwesomeIcon icon={faAngleDown} />
    return (
        <div className='my-10 text-slate-700'>
            <div>
                <h1 className='text-2xl font-mono font-semibold my-2'>FAQ</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique totam illum enim.
                </p>
                <ul className='my-10'>
                    <li className='border-b-2 p-4'>
                        <div className='flex justify-between text-black'>
                            <h1 className=" font-bold text-[18px]">Lorem ipsum dolor sit amet</h1>
                            <a href="#1" className='cursor-pointer'>{MoreOrLess}</a>
                        </div>
                        <p id="1" className='my-2 target:block hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>
                    <li className='border-b-2 p-4'>
                        <div className='flex justify-between text-black'>
                            <h1 className=" font-bold text-[18px]">Lorem ipsum dolor sit amet</h1>
                            <a href="#2" className='cursor-pointer'>{MoreOrLess}</a>
                        </div>
                        <p id="2" className='my-2 target:block hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>
                    <li className='border-b-2 p-4'>
                        <div className='flex justify-between text-black'>
                            <h1 className=" font-bold text-[18px]">Lorem ipsum dolor sit amet</h1>
                            <a href="#3" className='cursor-pointer'>{MoreOrLess}</a>
                        </div>
                        <p id="3" className='my-2 target:block hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique totam illum enim.
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Faqs