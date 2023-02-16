import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Reviews() {
    const pics = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7']
    const star = <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
    return (
        <div className='my-10'>
            <div className='md:h-[25rem] mx-auto w-10/12 flex flex-col md:flex-row space-y-10'>

                <div className='md:w-1/2 md:order-2 p-4 flex flex-col justify-center space-y-5'>
                    <h1 className='md:text-7xl text-4xl leading-[100px] text-center text-purple-500 font-bold text-6xl'>OUR REVIEWS</h1>
                    <p className='text-3xl font-semibold text-slate-700 text-center'>What people say about us</p>
                </div>

                <div className='md:w-1/2 md:order-1'>
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
                        {pics.map((pic, index) => (
                            <SwiperSlide key={index} className="" >
                                <h1 className='text-purple-500 font-semibold text-3xl lg:text-4xl text-center mb-2'>Awaal Sadu</h1>
                                <h1 className='text-slate-700 font-semibold text-3xl text-center'>{star} {star} {star} {star} {star}</h1>
                                <p className='text-center lg:text-xl text-lg text-slate-700 font-serif mt-5 mx-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ipsam suscipit blanditiis sapiente vel.
                                    Sint voluptas, sit mollitia, dolorem debitis repudiandae nam unde
                                    provident autem placeat dolor?
                                    Adipisci, atque! Velit, hic?
                                </p>
                            </SwiperSlide>
                        ))}
                        <h1 className="mt-5 opacity-0">...</h1>
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Reviews