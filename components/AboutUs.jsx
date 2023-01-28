import React from 'react'

function AboutUs() {
    return (
        <div className='my-10'>
            <div className='md:h-[25rem] mx-auto w-10/12 flex flex-col md:flex-row '>
                <div className='md:w-1/2 p-4 flex md:order-1 order-2 flex-col justify-center space-y-5'>
                    <h1 className="lg:text-4xl text-3xl font-semibold text-slate-700">About Us</h1>
                    <p className='lg:text-xl text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam possimus neque obcaecati deleniti accusantium veritatis
                        fuga error vero sequi eveniet, temporibus laudantium,
                        quam voluptate et tempore nesciunt? Rem, eum iste.
                    </p>
                    <button className='bg-violet-500 py-4 rounded-2xl text-xl text-white font-semibold w-1/2'>Random</button>
                </div>
                <div className='md:w-1/2 md:order-2 order-1'>
                    <img className=" h-full rounded-2xl w-full" src="/background/bg1.jpeg" alt="Esquire Building" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs