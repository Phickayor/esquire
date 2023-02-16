import React from 'react'

function Gallery() {
    return (
        <div className='my-10'>
            <div className='md:h-[25rem] mx-auto w-10/12 flex flex-col md:flex-row space-y-10'>

                <div className='md:w-1/2 p-4 flex flex-col justify-center space-y-5'>
                    <h1 className='md:text-7xl text-4xl md:leading-[100px] text-center text-purple-500 font-bold text-6xl'>OUR GALLERY</h1>
                    <p className='text-3xl font-semibold text-slate-700 text-center'>Relive our moments with us !</p>
                </div>

                <div className='md:w-1/2'>
                    <img className="h-full hover:opacity-50  rounded-2xl w-full" src="/background/bg1.jpeg" alt="Esquire Building" />
                </div>
                <a href="https://amenjet.pixieset.com/amenjet/" className='justify-center flex'>
                    <button className=' md:hidden self-center bg-violet-500 py-6 md:py-4 rounded-2xl text-xl text-white font-semibold text-2xl w-10/12'>View Gallery</button>
                </a>
            </div>
        </div>
    )
}

export default Gallery