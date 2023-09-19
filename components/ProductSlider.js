"use client"

import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSlide from "./ProductSlide";
import Image from "next/image";

const ProductSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();

    const settings = {
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        infinite: true,
        dots: true,
        initialSlide: 0,
        beforeChange: (current, next) => setCurrentSlide(next),
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
            </div>
        ),
        responsive: [
            {
                breakpoint: 1440,
                infinite: true,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    centerPadding: '16px',
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                infinite: true,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    centerPadding: '16px',
                    centerMode: false,
                }
            }
        ]
    };

    const repeater = () => {
        return slides.map((item, index) => (
            <div key={index + item}>
                <ProductSlide
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                />
            </div>
        ));
    }

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="product-slider-container overflow-hidden md:overflow-visible text-center grid grid-cols-12">
            <div className={"col-span-12 relative"}>
                <Slider {...settings} ref={sliderRef}>
                    {repeater()}
                </Slider>

                {currentSlide !== 0 && (
                    <Image
                        className={"cursor-pointer absolute -left-10 top-1/2 transform -translate-y-1/2 hidden md:block"}
                        onClick={handlePrevClick}
                        src="/icons/arrow-left-circle.svg"
                        width={80}
                        height={80}
                        alt="arrow-left-circle"
                        style={{ height: 'auto' }}
                    />
                )}
                {currentSlide !== slides.length - 1 && (
                    <Image
                        className={"cursor-pointer absolute -right-10 top-1/2 transform -translate-y-1/2 hidden md:block"}
                        onClick={handleNextClick}
                        src="/icons/arrow-right-circle.svg"
                        width={80}
                        height={80}
                        alt="arrow-right-circle"
                        style={{ height: '80px' }}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductSlider;
