"use client";
import React from "react";
import Image from 'next/image'

const HomeHero = ({title, subtitle }) => {
    return (
        <div className="bg-white">
            <div className="mbp-container relative grid grid-cols-12 items-center h-[50vh] md:h-[70vh] lg:h-[100vh]">

                <div className="col-span-11 lg:col-span-7 z-10">
                    <h1 className="lg:text-9.5xl md:text-[60px] text-[32px] leading-[120%] text-primary mb-10 font-tertiary">{title}</h1>
                    <h2 className="text-3xl md:block hidden">{subtitle}</h2>
                </div>

                <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-home-hero-sm md:h-home-hero-md lg:h-home-hero-lg w-home-hero-sm md:w-home-hero-md lg:w-home-hero-lg" src={"/icons/connected-dots.svg"} alt={"Hero Image Here"} width={827} height={847}/>
                <Image className="absolute bottom-0 right-0 -translate-x-1/2 w-[52px] md:w-[100px] lg:w-[200px] h-[186px] md:h-[460px] lg:h-[924px]" src={"/icons/sideBannerHome.svg"} alt={"Side Banner Image Here"} width={200} height={924}/>
                <Image className="absolute bottom-0 left-14 hidden lg:block" src={"/icons/scroll.svg"} alt={"Scroll Image Here"} width={143} height={135}/>

            </div>
        </div>
    );
};
export default HomeHero;
