import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Rooms() {
    const rooms = [
        {
            name: "Classic Room",
            price: "20000",
            features: [
                "Mini bar",
                "Fast Internet access",
                "Cable TV",
                "Coffee-tea Set"
            ],
            image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=2000"
        },
        {
            name: "Classic Room",
            price: "20000",
            features: [
                "Mini bar",
                "Fast Internet access",
                "Cable TV",
                "Coffee-tea Set"
            ],
            image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=2000"
        },
        {
            name: "Classic Room",
            price: "20000",
            features: [
                "Mini bar",
                "Fast Internet access",
                "Cable TV",
                "Coffee-tea Set"
            ],
            image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=2000"
        },
        {
            name: "Classic Room",
            price: "20000",
            features: [
                "Mini bar",
                "Fast Internet access",
                "Cable TV",
                "Coffee-tea Set"
            ],
            image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=2000"
        }
    ];
    return (
        <div className="my-20">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                effect="fade"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="lg:w-5/6 mx-auto border"
            >
                {rooms.map((room, index) => (
                    <SwiperSlide key={index} className="flex w-full">
                        <img
                            src={room.image}
                            className="w-1/2  min-h-max"
                        />
                        <div className="w-1/2  min-h-max text-white  mx-auto text-center flex flex-col justify-center bg-violet-600">
                            <button className="absolute top-0 m-2 bg-orange-500 px-10 py-1 text-xl rounded-2xl font-semibold">
                                &#8358;{room.price + " /day"}
                            </button>
                            <h1 className="font-semibold text-5xl mt-8 leading-[72px]">
                                {room.name}
                            </h1>
                            <ul className="font-semibold text-2xl my-5 w-3/5 mx-auto space-y-8 list-disc text-left">
                                {room.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className=" mx-5 my-10 bg-orange-500 px-10 py-5  text-xl rounded-2xl font-semibold hover:bg-transparent hover:border-2 border-orange-500">BOOK NOW</button>
                        </div>
                    </SwiperSlide>))}

            </Swiper>
        </div>
    );
}

export default Rooms;
