import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function callNow() {
    const phone = <FontAwesomeIcon icon={faPhone} />

    return (
        <div className='h-full lg:p-10 lg:w-9/12 mx-auto lg:flex rounded-2xl mt-5  text-white bg-slate-500 p-4 lg:space-y-0 space-y-5 justify-around'>
            <a href="tel:+2347031041271" className='flex space-x-5 p-4 rounded-2xl hover:bg-white hover:text-slate-500 lg:w-1/2 justify-center'>
                <h1 className='text-3xl'>{phone}</h1>
                <h1 className=' font-mono text-lg'>070 3104 1271</h1>
            </a>
            <a href="tel:+2348024211480" className='flex space-x-5 p-4 rounded-2xl hover:bg-white hover:text-slate-500 lg:w-1/2 justify-center'>
                <h1 className='text-3xl'>{phone}</h1>
                <h1 className=' font-mono text-lg'>080 2421 1480</h1>
            </a>
        </div>
    )
}

export default callNow