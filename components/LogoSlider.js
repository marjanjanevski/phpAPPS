"use client";
import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const LogoSlider = ({logos}) => {

    const settings = {
        autoplay: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    autoplay: true,
                    infinite: true,
                    speed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    autoplay: true,
                    infinite: true,
                    speed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };

    const repeater = () => {
        return logos.map((item, index) => {
            return (
                <div key={index+item}>
                    <div className="flex items-center justify-center mr-4">
                        <Image
                            className="logo-slider-img"
                            alt="logo-image"
                            src={item}
                            quality={100}
                            placeholder="empty"
                            loading="lazy"
                            width={100}
                            height={60}
                        />
                    </div>
                </div>
            )

        })
    }

    return (

<div className="logo-slider-container py-8 text-center mb-8">
    <Slider {...settings}>
        {repeater()}
    </Slider>
</div>


    )
}

export default LogoSlider;