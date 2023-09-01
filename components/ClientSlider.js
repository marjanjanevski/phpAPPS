import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientSlide from "./ClientSlide"; // Import the ClientSlide component
import Image from "next/image";

const ClientSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = slides.length;

    const appendSlideNumbers = () => (
        <div className="custom-slide-numbers">
            {currentSlide + 1}/{slideCount}
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

    return (
        <div className="client-slider-container overflow-hidden md:overflow-visible text-center grid grid-cols-12">
            <div className={"col-span-12 relative"}>
                <Slider {...settings}>
                    {repeater()}
                </Slider>
                {
                    currentSlide !== 0 &&
                    <Image className={"cursor-pointer absolute -left-10 top-1/2 transform -translate-y-1/2 hidden md:block"}
                           onClick={() => setCurrentSlide(currentSlide - 1)}
                           src="/icons/arrow-left-circle.svg"
                           width={80}
                           height={80}
                           alt="arrow-left-circle"
                           style={{ height: 'auto' }}
                    />
                }
                {
                    currentSlide !== slideCount - 1 &&
                    <Image className={"cursor-pointer absolute -right-10 top-1/2 transform -translate-y-1/2 hidden md:block"}
                           onClick={() => setCurrentSlide(currentSlide + 1)}
                           src="/icons/arrow-right-circle.svg"
                           width={80}
                           height={80}
                           alt="arrow-right-circle"
                           style={{ height: '80px' }}
                    />
                }
            </div>
        </div>
    );
}

export default ClientSlider;
