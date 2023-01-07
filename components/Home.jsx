import React from 'react'

function Home() {
    return (
        <div className='bg-[#121212] w-full h-screen flex flex-col justify-center'>
            <div className='flex justify-between fixed rounded-full top-10 left-1/2 transform -translate-x-1/2 w-11/12 z-20 p-5 lg:py-2 py-0 text-black bg-white '>
                <button className='border-2 lg:my-2 mx-5 lg:py-2 px-7 my-5 py-2 rounded-2xl text-3xl  font-semibold border-purple-500' >x</button>
                <h1 className='text-3xl m-5 p-2 font-mono font-semibold text-slate-900'>Esquire</h1>
                <button className='border-2 m-5 py-2 px-5 font-semibold border-purple-500'>Book Your Stay</button>
            </div>
            <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Background Image"
                className="opacity-70  object-cover h-[95vh] rounded-[50px]"
            />
        </div>
    )
}

export default Home