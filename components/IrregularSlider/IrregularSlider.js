"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import './irregularSlider.css';
import Link from "next/link";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IrregularSlider = ({ title, images, button }) => {

    const sliderRef = useRef(null);

    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
            }
        ]
    };

    return (
        <div className="col-span-12 grid grid-cols-12 bg-primary mt-8 lg:mt-20 py-8 lg:py-16 rounded-lg">

            <div className="col-span-12 lg:col-span-4 px-8">
                <h2 className="font-secondary text-white text-4xl lg:text-6xl mb-2 tracing-075">
                    {title}
                </h2>
                <p className="text-white text-lg lg:text-2xl mb-4">
                    Vill du inte kasta dig om halsen redan nu? Lär känna oss mer <Link href={'https://www.instagram.com/minabastapolare/'} className={`underline underline-offset-2`}>på Instagram</Link>
                </p>
                <Link href={button.link} className={`btn mb-8`} target="_BLANK">
                    {button.label}
                </Link>
            </div>
            <div className="col-span-12 lg:col-span-8 overflow-hidden relative min-h-[260px] custom-grid-row-1">
                <Slider
                    {...settings}
                    ref={sliderRef}
                >
                    {images?.map((slide, index) => (
                        <div key={index} className={`relative mr-4`}>
                            <img alt="" className="h-80 lg:h-96" loading="lazy" src={slide}/>
                        </div>
                    ))}
                </Slider>
                <Image className={"cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2"}
                       onClick={() => sliderRef.current.slickNext()}
                       src="/icons/arrow-right-circle.svg"
                       width={80}
                       height={80}
                       alt="arrow-right-circle"
                       style={{height: '80px'}}
                />
            </div>
        </div>

    )
}

export default IrregularSlider;
