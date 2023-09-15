import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientSlide from "./ClientSlide";
import Image from "next/image";

const ClientSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = slides.length;
    const sliderRef = useRef();

    const appendSlideNumbers = () => (
        <div className="custom-slide-numbers">
            <span className="text-pinkprimary">{currentSlide + 1}</span>
            /
            <span className="text-primary">{slideCount}</span>
        </div>
    );

    const settings = {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: true,
        initialSlide: 0,
        beforeChange: (current, next) => setCurrentSlide(next),
        appendDots: appendSlideNumbers,
        responsive: []
    };

    const repeater = () => {
        return slides.map((item, index) => (
            <div key={index + item}>
                <ClientSlide
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    clientName={item.clientName}
                    companyName={item.companyName}
                    clientPosition={item.clientPosition}
                    companyLocation={item.companyLocation}
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
        <div className="client-slider-container overflow-hidden md:overflow-visible text-center grid grid-cols-12">
            <div className={"col-span-12 relative"}>
                <Slider {...settings} ref={sliderRef}>
                    {repeater()}
                </Slider>
                {
                    currentSlide !== 0 &&
                    <Image
                        className={"cursor-pointer absolute -left-20 top-1/2 transform -translate-y-1/2 hidden md:block"}
                        onClick={handlePrevClick}
                        src="/icons/LeftSliderButton.png"
                        width={40}
                        height={40}
                        alt="arrow-left-circle"
                        style={{ height: 'auto' }}
                    />
                }
                {
                    currentSlide !== slideCount - 1 &&
                    <Image
                        className={"cursor-pointer absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block"}
                        onClick={handleNextClick}
                        src="/icons/RightSliderButton.png"
                        width={40}
                        height={40}
                        alt="arrow-right-circle"
                        style={{ height: 'auto' }}
                    />
                }
            </div>
        </div>
    );
}

export default ClientSlider;
