import React from 'react'

function HelpSearch() {
    return (
        <div className="mx-auto  text-slate-700 my-10 w-10/12 ">
            <h1 className='text-3xl font-mono font-semibold text-center'>Esquire Resorts</h1>
            <input type="search" placeholder="What can we help you with..." className="text-lg border-purple-500 border-2 md:text-center my-5 focus:outline-none rounded-2xl p-6 w-full" />
            <div className='my-10'>
                <h1 className='text-2xl font-semibold my-5'>Search Result</h1>
                <div className="bg-gradient-to-l from-purple-400 via-indigo-500 to-violet-500  rounded-2xl p-10">
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique totam illum enim. Aliquam adipisci dolores provident commodi,
                        nisi, error debitis, beatae deleniti non
                        repellendus cupiditate dolor? At hic maxime beatae.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HelpSearch