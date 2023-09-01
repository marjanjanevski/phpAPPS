"use client";
import React, { useState, useRef } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hugeSlider.css';

const HugeSlider = ({images}) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();

    const settings = {
        autoplay: false,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    const gotoNext = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div className="col-span-12 grid grid-cols-12 mb-16">
            <div className="col-span-12 lg:col-span-11 lg:ml-12 lg:mr-8 xl:ml-0 xl:col-span-10 xl:col-start-2 overflow-hidden relative">

                <div className="huge-slider">
                    <Slider {...settings} ref={sliderRef}>
                        {images.map((slide, index) => (
                                <Image
                                    key={index}
                                    alt="irregular-image"
                                    priority
                                    height={1000}
                                    width={1000}
                                    src={slide}
                                    quality={100}
                                    style={{aspectRatio: "16 / 9"}}
                                    placeholder="empty"
                                />
                        ))}
                    </Slider>
                </div>


                <div className="absolute lg:hidden cursor-pointer group flex items-center justify-center right-2 w-8 h-8 bg-lemonyellow rounded-full z-50 top-1/2 transform -translate-y-1/2" onClick={gotoNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                </div>


            </div>

            <div className="hidden lg:flex col-span-12 lg:col-span-1 text-7xl font-tertiary flex flex-col items-center justify-end">

                <div className="my-4 flex flex-col items-center justify-center">

                    <div>
                        {currentSlide + 1}
                    </div>

                    <div  style={{height: '1.5px'}} className="w-12 bg-black my-2"></div>

                    <div>
                        {images.length}
                    </div>

                </div>

                <span className={`text-sm font-secondary uppercase text-sm tracking-2 group relative py-1 px-3 text-primary cursor-pointer`} onClick={gotoNext}>
                    nästa
                    <span className={`absolute -z-10 left-0 top-n1 w-6 h-6 rounded-full bg-lemonyellow
                                group-hover:duration-300 group-hover:w-full group-hover:h-full group-hover:transition-height-width `}/>
                </span>
            </div>

            <div className="lg:hidden col-span-12 lg:col-span-1 text-7xl font-tertiary flex flex-col items-end justify-end">

                <div className="my-4 flex items-center justify-center">

                    <div>
                        {currentSlide + 1}
                    </div>

                    <div  style={{height: '1.5px'}} className="w-20 bg-black my-2 -rotate-30"></div>

                    <div>
                        {images.length}
                    </div>

                </div>

            </div>
        </div>

    )
}

export default HugeSlider;