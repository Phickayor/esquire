import React, { useEffect, useRef } from 'react'
import Rooms from "../utils/rooms.json"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import handlePayment from './handlePayment'
function BookRoom(props) {
    //Defining all variables
    const guestNumberContainer = useRef(null)
    const arrivalDateContainer = useRef(null)
    const depatureDateContainer = useRef(null)
    const mailContainer = useRef(null)
    const [minimumArrivalDate, SetminimumArrivalDate] = useState("")
    const [minimumDepatureDate, SetminimumDepatureDate] = useState("")
    const index = props.selectedIndex
    const [name, SetName] = useState(Rooms[index].name)
    const [infoMessage, setInfo] = useState("Fill out this form carefully to book a reservation.")
    const [infoColor, setInfoColor] = useState("")
    const [pics, setPics] = useState(Rooms[index].image)
    const [features, SetFeatures] = useState(Rooms[index].features)
    const [price, SetPrice] = useState(Rooms[index].price)
    const today = new Date()
    // const star = <FontAwesomeIcon icon={faStar} />
    const check = <FontAwesomeIcon className="text-purple-500" icon={faCheck} />
    const info = <FontAwesomeIcon className="text-lg" icon={faInfoCircle} />
    //setting min depature date
    function depDateSet(minarr) {
        var mindepDate, mindepMonth
        minarr.setDate(minarr.getDate() + 1);
        if (minarr.getDate() < 10) {
            mindepDate = "0" + minarr.getDate()
        }
        else {
            mindepDate = minarr.getDate()
        }

        if ((minarr.getMonth() + 1) < 10) {
            mindepMonth = "0" + (minarr.getMonth() + 1)
        }
        else {
            mindepMonth = (minarr.getMonth() + 1)
        }
        SetminimumDepatureDate(minarr.getFullYear() + '-' + mindepMonth + '-' + mindepDate)
    }
    function arrDateSet(today) {
        var minarrDate, minarrMonth
        if (today.getDate() < 10) {
            minarrDate = "0" + today.getDate()
        }
        else {
            minarrDate = today.getDate()
        }

        if ((today.getMonth() + 1) < 10) {
            minarrMonth = "0" + (today.getMonth() + 1)
        }
        else {
            minarrMonth = (today.getMonth() + 1)
        }
        SetminimumArrivalDate(today.getFullYear() + '-' + minarrMonth + '-' + minarrDate)
    }
    // Sending Details to the Backend
    function SendDetails() {
        var mail = mailContainer.current.value
        var arrivalDate = arrivalDateContainer.current.value
        var depatureDate = depatureDateContainer.current.value
        var guestNumber = guestNumberContainer.current.value
        fetch("http://localhost:8080/checkbooking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, arrivalDate, depatureDate })
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            if (data.message === "available") {
                setInfoColor("green")
                setInfo("Lucky You!, the room is available proceeding to payment...")
                handlePayment(mail, price, name, arrivalDate, depatureDate, guestNumber)
            }
            else {
                setInfoColor("red")
                setInfo("Sorry this room is currently reserved between these days")
            }
        }).catch(function (err) { console.log(err) })
    }

    // Changing Price irrespective to date
    function priceCheck() {
        var start = new Date(arrivalDateContainer.current.value)
        var finish = new Date(depatureDateContainer.current.value)
        // To calculate the time difference of two dates
        var Difference_In_Time = finish.getTime() - start.getTime();
        // To calculate the no. of days between two dates
        var diff = Difference_In_Time / (1000 * 3600 * 24)
        SetPrice((Rooms[index].price) * diff)
        depDateSet(start)
    }
    useEffect(() => {
        depDateSet(today)
    }, [])
    return (
        <div className=" lg:flex justify-between lg:space-x-20 mx-auto lg:w-10/12 w-11/12 ">
            {/*About Room */}
            <div className="p-5 lg:w-1/2">
                {/* Room Name  */}
                <h1 className="text-3xl font-bold text-slate-700 pb-10">{name}</h1>

                {/* Room Images */}
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    onSwiper={swiper => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {pics.map((index, i) => (
                        <SwiperSlide key={index} >
                            <img
                                className=" max-h-80 rounded-2xl"
                                src={pics[i]}
                                alt="selected Room"
                            />
                        </SwiperSlide>
                    ))}
                    <h1 className="mt-5 opacity-0">...</h1>
                </Swiper>

                {/*Room Features */}
                <h1 className="font-semibold bg-bgcolor p-2 text-2xl text-slate-700">Features of the {name}</h1>
                <ul className='lg:text-lg'>
                    {features.map((feature, index) => (
                        <li key={index}>{check}&nbsp; {feature}</li>
                    ))}
                </ul>
            </div>

            {/* SUMMARY */}
            <div className="lg:w-1/2">
                <div className="lg:border mt-10 pb-6">
                    <ul className="space-y-4">
                        <h1 className="font-semibold bg-bgcolor p-2 md:p-8 text-2xl text-slate-700">
                            Summary
                            <b className="hidden md:block float-right pl-5 pr-5">
                                &#36; {price}
                            </b>
                        </h1>
                        <h3 style={{ color: infoColor }} className="text-purple-500 text-center text-md font-semibold mx-5">{info} &nbsp; {infoMessage}</h3>
                        <li className="border-b-2  text-lg flex flex-wrap w-full justify-between">
                            <b className="pl-4 w-2/5">No of People in room</b>
                            <select
                                className="text-slate-500 bg-inherit outline-none text-center mr-5"
                                ref={guestNumberContainer}

                            >
                                <option value="1">Just you</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 People</option>
                            </select>
                        </li>
                        <li className="border-b-2 text-lg flex flex-wrap w-full justify-between">
                            <b className="pl-4 w-2/5">Email </b>
                            <input
                                required
                                ref={mailContainer}
                                placeholder="JohnDoe@gmail.com"
                                type="email"
                                className="text-slate-500 outline-none text-right mr-5"
                            />
                        </li>
                        <li className="border-b-2 text-lg flex flex-wrap w-full justify-between">
                            <b className="pl-4 w-2/5 ">Arrival Date</b>
                            <input
                                type="date"
                                min={minimumArrivalDate}
                                defaultValue={minimumArrivalDate}
                                className="text-slate-500 outline-none text-right mr-5"
                                onChange={priceCheck}
                                ref={arrivalDateContainer}
                            />
                        </li>
                        <li className="border-b-2 text-lg flex flex-wrap w-full justify-between">
                            <b className="pl-4 w-2/5">Depature Date</b>
                            <input
                                required
                                type="date"
                                min={minimumDepatureDate}
                                onChange={priceCheck}
                                defaultValue={minimumDepatureDate}
                                className="text-slate-500 outline-none text-right mr-5"
                                ref={depatureDateContainer}
                            />
                        </li>
                        <div className="hidden lg:block space-y-4">
                            <div className="text-2xl text-gray20 p-5 flex justify-between">
                                <h1>Total Cost</h1>
                                <b className="text-right">&#36;{price}</b>
                            </div>
                            <div className="justify-center hidden lg:flex">
                                <button onClick={SendDetails} className="text-2xl bg-purple-500 w-9/12 text-white self-center rounded-lg p-5 font-semibold">
                                    PROCEED TO PAYMENT
                                </button>
                            </div>
                        </div>


                    </ul>
                </div>
            </div>
            <div style={{ zIndex: 10 }} className="lg:hidden fixed w-full p-8 flex justify-between border-2 bottom-0 left-0 bg-white">
                <div className="w-1/2 text-2xl">
                    <h1 className="font-bold ml-10">&#8358;{price}</h1>
                    <p className="text-gray20 text-lg">Only &#8358;{Rooms[index].price} / night</p>
                </div>
                <button onClick={SendDetails} className="bg-purple-500 w-1/2 text-white outline-none hover:bg-slate-500 ">
                    PROCEED TO PAYMENT
                </button>
            </div>
        </div>
    )
}

export default BookRoom
