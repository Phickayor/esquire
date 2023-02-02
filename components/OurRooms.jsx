import React, { useEffect } from "react";
import rooms from "../utils/rooms.json"
import { useState } from "react";
import Link from "next/link";
import Router from 'next/router'
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
function OurRooms() {
    // const [selectedIndex, setSelectedIndex] = useState(null)
    function Test(event) {
        // setSelectedIndex(event)
        // Router.push({
        //     pathname: "/Booknow",
        //     query: { event }
        // })
    }

    return (

        <div className='mx-auto  w-11/12 mt-10'>
            <h1 className='text-4xl lg:text-5xl font-mono font-semibold text-center '>Book a room</h1>
            <p className='lg:text-2xl text-xl font-mono text-center '>Pick whichever suits you. </p>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 lg:w-11/12 mx-auto lg:mt-10 mt-5">
                {rooms.map((room, index) => (
                    <div key={index} className="space-y-4 m-5 lg:m-10 text-white border-2 shadow-lg shadow-purple-500  p-5 rounded-2xl">
                        <img src={room.image[0]} className="w-11/12 mx-auto h-44 rounded-2xl" />
                        <h1 className="text-center text-3xl font-semibold text-purple-200">&#8358;{room.price + " /day"}</h1>
                        <h1 className="text-center text-4xl font-semibold">{room.name}</h1>
                        <div className="flex justify-center">
                            <button onClick={() => Test(index)} className=" text-center text-white text-3xl mx-auto w-4/5 py-2 font-bold bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 rounded-2xl">Book Now</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        // <div className="mt-10 ">
        //     <Swiper
        //         // install Swiper modules
        //         modules={[Navigation, Pagination, Scrollbar, A11y]}
        //         effect="fade"
        //         spaceBetween={50}
        //         slidesPerView={1}
        //         navigation
        //         pagination={{ clickable: true }}
        //         // scrollbar={{ draggable: true }}
        //         onSwiper={(swiper) => console.log(swiper)}
        //         onSlideChange={() => console.log("slide change")}
        //         className="lg:w-5/6 mx-auto"
        //     >
        //         {rooms.map((room, index) => (
        //             <SwiperSlide key={index} className="max-h-[32rem] flex w-full">
        //                 <img
        //                     src={room.image}
        //                     className="w-1/2 object-cover"
        //                 />
        //                 <div className="w-1/2  object-fit text-white  mx-auto text-center flex flex-col bg-violet-600">
        //                     <button className="absolute top-0 m-2 bg-orange-500 px-10 py-1 text-xl rounded-2xl font-semibold">
        //                         &#8358;{room.price + " /day"}
        //                     </button>
        //                     <h1 className="font-semibold text-5xl mt-8 leading-[72px]">
        //                         {room.name}
        //                     </h1>
        //                     <ul className="font-semibold text-2xl my-5 w-3/5 mx-auto space-y-8 list-disc text-left">
        //                         {room.features.map((feature, index) => (
        //                             <li key={index}>{feature}</li>
        //                         ))}
        //                     </ul>
        //                     <button className=" mx-5 my-10 bg-orange-500 px-10 py-5  text-xl rounded-2xl font-semibold hover:bg-transparent hover:border-2 border-orange-500">BOOK NOW</button>
        //                 </div>
        //             </SwiperSlide>))}

        //     </Swiper>
        // </div>
    );
}

export default OurRooms;
