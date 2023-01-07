import React from 'react'

function Home() {
    return (
        <div className='bg-[#121212] w-full h-screen flex flex-col justify-center'>
            <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Background Image"
                className="opacity-70  object-cover h-[95vh] rounded-[50px]"
            />
            <div className='flex justify-between fixed rounded-[20px] top-0 left-0 w-full h-32 p-5 text-black bg-white '>
                <h1 className='text-4xl m-5 font-mono'>Esquire</h1>
                <button className='p-5 border text-3xl px-8 rounded-2xl' >x</button>
            </div>
        </div>
    )
}

export default Home