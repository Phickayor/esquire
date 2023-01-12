import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faVolumeMute, faBed, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
function Services() {
    const food = <FontAwesomeIcon icon={faBowlRice} />
    const serene = <FontAwesomeIcon icon={faVolumeMute} />
    const room = <FontAwesomeIcon icon={faBed} />
    const staffs = <FontAwesomeIcon icon={faPeopleGroup} />

    const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7']
    var i = 0;
    const [background, setBackground] = useState(backgrounds[i])

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
        <div className='my-20'>
            <div className='md:h-fit mx-auto lg:w-11/12 w-10/12 flex flex-col md:flex-row '>

                <div className='md:w-1/2 lg:px-10 flex flex-col justify-center'>
                    <img className=" h-[25rem] rounded-2xl w-full" src={`/background/${background}.jpeg`} />
                </div>
                <div className='md:w-1/2 my-10 md:my-0 px-10 flex flex-col justify-center'>
                    <h1 className="lg:text-4xl text-3xl font-semibold text-slate-700">Why Choose Us</h1>
                    <p className='text-[16px] my-2 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <ul className="mt-10 space-y-10">
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 text-xl'>{food}</h1>
                            <div>
                                <h3 className="font-bold text-gray20">Quality, Mouth Watering Meals</h3>
                                <p className="text-gray20">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 text-xl'>{serene}</h1>
                            <div>
                                <h3 className="font-bold text-gray20">Serene Enviroment</h3>
                                <p className="text-gray20">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.

                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 text-xl'>{room}</h1>
                            <div>
                                <h3 className="font-bold text-gray20">
                                    Comfortable Rooms
                                </h3>
                                <p className="text-gray20">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus neque obcaecati deleniti.
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 text-xl'>{staffs}</h1>
                            <div>
                                <h3 className="font-bold text-gray20">Respectful Staffs</h3>
                                <p className="text-gray20">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services