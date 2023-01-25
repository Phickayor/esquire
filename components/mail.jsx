import React from 'react'

function mail() {
    return (
        <div className='bg-white text-slate-700 p-5 rounded-xl my-10 lg:w-9/12 mx-auto'>
            <form className='p-5'>
                <div className='md:flex justify-center'>
                    <div className='md:w-1/2'>
                        <label className='text-2xl lg:text-center block w-10/12 font-semibold font-mono'>Your Name</label>
                        <input className='block border-2 rounded-xl my-2 md:w-10/12 w-full text-slate-700 outline-none p-2 text-lg' />
                        <label className='text-2xl lg:text-center block w-10/12  font-semibold font-mono'>Your Mail</label>
                        <input className='block rounded-xl border-2 my-2 md:w-10/12 w-full text-slate-700 outline-none p-2 text-lg' />
                    </div>
                    <div className="md:w-1/2">
                        <label className='text-2xl block w-10/12 lg:text-center font-semibold font-mono'>Enquiry</label>
                        <textarea className='block rounded-xl p-3 border-2 my-2 w-full text-slate-700 outline-none text-lg h-32' />
                    </div>
                </div>
                <div className='flex mt-5 justify-center'>
                    <button className='font-semibold self-center w-full lg:w-3/6 bg-violet-500 rounded-2xl text-white text-lg py-5 px-10'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default mail