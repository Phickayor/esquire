import React from 'react'

function Home() {
    return (
        <div className='bg-[#121212] w-full absolute h-screen top-0 left-0 flex flex-col justify-around z-0'>
            <div className='flex  justify-between fixed rounded-full top-10 my-5 left-1/2 transform -translate-x-1/2 w-11/12 z-20 p-5 lg:py-2 py-0 text-black bg-white '>
                <button className='border-2 lg:my-2 mx-5 lg:py-2 px-7 my-5 py-2 rounded-2xl text-3xl  font-semibold border-purple-500' >x</button>
                <h1 className='text-3xl m-5 p-2 font-mono font-semibold text-slate-900'>Esquire Resorts</h1>
                <button className='border-2 rounded-2xl hover:bg-[#efefef] hover:text-violet-500 hover:border-none text-lg m-5 py-2 px-5 font-semibold border-purple-500'>Book Your Stay</button>
            </div>
            <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Background Image"
                className=" opacity-80  z-10  object-cover h-4/6 mx-auto w-[95%] my-10 rounded-[30px] "
            />
            <div className='flex mx-auto text-white  px-10 justify-between w-[95%] rounded-[30px] text-black bg-white h-1/6 my-5  bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500  '>
                <h1 className='font-semibold text-3xl m-10 '>Book your stay</h1>
                <form className='flex justify-center mt-5 space-x-20 '>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-md text-center'>Arrival Date</label>
                        <input type="date" className='text-xl text-center mx-auto  bg-transparent p-5 border-b-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-md text-center'>Departure Date</label>
                        <input type="date" className='text-xl bg-transparent p-5 border-b-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-md text-center'>Number of Guests</label>
                        <input type="date" className='text-xl bg-transparent p-5 border-b-2' />
                    </div>
                    <button className='font-semibold bg-slate-700 rounded-3xl text-2xl m-4 p-5'>Book Stay</button>
                </form>
            </div>
        </div>
    )
}

export default Home