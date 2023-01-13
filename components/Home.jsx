import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
function Home() {
    const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7']
    var i = 0;
    const [background, setBackground] = useState(backgrounds[i])
    const GuestNumber = useRef()
    const menu = <FontAwesomeIcon icon={faBars} />
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const minus = <FontAwesomeIcon icon={faMinus} />
    function HandleGuestsIncrease() {
        GuestNumber.current.value++
    }
    function HandleGuestsDecrease() {
        if (GuestNumber.current.value > 1) {
            GuestNumber.current.value--
        }
        else {
            GuestNumber.current.value
        }
    }
    function backgroundChange() {

        if (i < 6) {
            i++;
            setBackground(backgrounds[i]);
        }
        else {
            i = 0
            setBackground(backgrounds[i]);

        }
    }

    useEffect(
        () => {

            const timerID = setInterval(() => {
                backgroundChange()
            }, 5000);

            return () => {
                clearInterval(timerID);
            };
        }, [backgrounds[i]])

    return (
        <div className='bg-[#121212] w-full absolute h-screen top-0 left-0 flex flex-col justify-around z-0'>
            <div className='flex  justify-between fixed rounded-full top-10 my-5 left-1/2 transform -translate-x-1/2 w-11/12 z-20 p-5 lg:py-2 py-0 text-black bg-white '>
                <button className='border-2 lg:my-2 mx-5 lg:py-2 px-7 my-5 py-2 rounded-2xl text-4xl  font-semibold border-purple-500' >{menu}</button>
                <h1 className='hidden lg:block text-3xl m-5 p-2 font-[cursive] font-semibold text-slate-900'>Esquire Resorts</h1>
                {/* <img src="" className='text-3xl m-5 p-2 font-mono font-semibold text-slate-900' /> */}
                <button className='border-2 rounded-2xl hover:bg-[#efefef] hover:text-violet-500 hover:border-none text-lg m-5 py-2 px-5 font-semibold border-purple-500'>Book Your Stay</button>
            </div>
            <img
                src={`/background/${background}.jpeg`}
                alt="Background Image"
                className=" opacity-80  z-10  object-cover h-4/6 mx-auto w-[95%] my-10 rounded-[30px] "
            />
            <div className='flex mx-auto text-white  justify-around w-[95%] rounded-[30px] h-1/6 my-5 py-5  bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500  '>
                <h1 className='font-semibold text-2xl self-center'>Book your stay</h1>
                <form className='justify-center space-x-5 hidden lg:flex self-center'>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-md text-center'>Arrival Date</label>
                        <input type="date" defaultValue="2023-01-01" className='text-xl text-center mx-auto  bg-transparent p-5 border-b-2 focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-md text-center'>Departure Date</label>
                        <input type="date" defaultValue="2023-12-31" className='text-xl bg-transparent p-5 border-b-2 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-semibold text-md text-center'>Number of Guests</label>
                        <div className=' flex justify-center space-x-5 p-5'>
                            <h1 className='text-2xl bg-white text-black px-4 py-2 rounded-full' onClick={HandleGuestsDecrease}>{minus}</h1>
                            {/* <input type={"number"} className='text-2xl border text-red-200 text-center px-4 w-1 py-2 bg-transparent' ref={GuestNumber} /> */}
                            <input type="number" min="1" disabled className='w-10 text-2xl bg-transparent text-center focus:outline-none placeholder:text-white' ref={GuestNumber} placeholder="1" />
                            <h1 className='text-2xl bg-white text-black px-4 py-2 rounded-full' onClick={HandleGuestsIncrease}>{plus}</h1>
                        </div>
                    </div>
                </form>
                <button className=' font-semibold bg-slate-700 rounded-3xl text-center text-2xl  mx-0 px-5 py-6 self-center'>Book Stay <i className='self-center bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 py-2 px-4 rounded-full'>{rightArrow}</i></button>

            </div>
        </div>
    )
}

export default Home