'use client';

import Image           from "next/image";
import AnimatedButton  from "../AnimatedButton";
import StaticButton    from "../StaticButton";
import './offersHero.css';
import { PopupButton }   from "@typeform/embed-react";
import React from "react";

const OffersHero = ({ subtitle, title, imgOverlay, img, heroCta, button }) => {
    return (
        <div className="grid col-span-12 grid-cols-12 gap-2 lg:pb-48 relative">

            <div className="mb-8 w-full flex justify-end absolute -bottom-20 sm:-bottom-8 lg:bottom-20 xl:bottom-12 2xl:bottom-0 hidden lg:block text-right">
                <AnimatedButton config={button}/>
            </div>

            <div className="z-20 relative col-span-12 col-start-1 lg:col-span-5 lg:col-start-2 grid grid-cols-12 2xl:-ml-6 offers-custom-margin-top">

                <div className="relative">
                    <Image className="lg:mb-5 lg:pt-12"
                           src={'/icons/hero-arrow-down.svg'}
                           alt={'line'}
                           fill
                           sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                    />
                </div>

                <div className="col-start-2 col-span-11 md:col-span-7 lg:col-span-11 2xl:pt-24 flex flex-col justify-center xl:ml-8">
                    <h4 className="font-secondary text-sm tracking-2 font-bold uppercase text-info">{subtitle}</h4>

                    <h1 className="md:pr-8 lg:pr-8 py-4 md:py-8 xl:py-10 font-secondary text-6xl md:text-8xl xl:text-8xl 2xl:text-9xl text-primary tracking-n1">{title}</h1>

                    <PopupButton id="UnHvQeFB" className="btn btn--outline">
                        {heroCta.label}
                    </PopupButton>
                </div>
            </div>

            <div className="col-start-3 -mr-[15px] md:-mr-20 xl:-mr-[30px] col-span-12 md:col-start-7 md:col-span-7 lg:col-span-6 lg:col-start-7 mt-4 sm:mt-0 m-h-[250px] md:m-h-[300px] lg:m-h-[390px] xl:m-h-[480px] 2xl:m-h-[640px] relative order-first lg:order-none">

                <Image
                    src={img}
                    alt="hero image"
                    priority
                    height={1000}
                    width={1000}
                    quality={100}
                    style={{aspectRatio: "3 / 2"}}
                />
                {
                    imgOverlay && <Image className={`${imgOverlay.rounded === 'true' ? 'rounded-full' : ''} 
                                                     ${imgOverlay.page === 'poc' ? 'z-10 w-44 md:w-88 lg:108 xl:w-108 2xl:w-128 -left-14 lg:-left-40 xl:-left-64 bottom-0 md:-bottom-40 lg:-bottom-56 xl:-bottom-20 2xl:-bottom-24 md:ml-4 lg:ml-8 xl:ml-32 2xl:ml-16 max-w-none' : ''}
                                                     ${imgOverlay.page === 'prototyp' ? 'z-10 w-44 md:w-88 lg:108 xl:w-108 2xl:w-128 -left-14 lg:-left-40 xl:-left-64 bottom-0 md:-bottom-40 lg:-bottom-56 xl:-bottom-20 2xl:-bottom-24 md:ml-4 lg:ml-8 xl:ml-32 2xl:ml-16 max-w-none' : ''}
                                                     ${imgOverlay.page === 'api-integrationer' ? 'z-10 w-44 md:w-88 lg:108 xl:w-108 2xl:w-128 -left-14 lg:-left-40 xl:-left-64 bottom-0 md:-bottom-40 lg:-bottom-28 xl:-bottom-20 2xl:-bottom-24 md:ml-4 lg:ml-8 xl:ml-32 2xl:ml-16 max-w-none' : ''}
                                                     ${imgOverlay.page === 'mvp' ? 'z-10 w-44 sm:w-72 md:w-88 lg:108 xl:w-108 2xl:w-[40rem] -left-14 sm:-left-32 md:-left-48 lg:-left-52 xl:-left-64 2xl:-left-[23rem] bottom-8 md:-bottom-8 xl:-bottom-20 md:ml-4 lg:ml-8 xl:ml-12 2xl:ml-16 max-w-none' : ''}
                                                     ${imgOverlay.page === 'digitala-plattformar' ? 'z-10 w-44 sm:w-72 md:w-88 lg:108 xl:w-108 2xl:w-[40rem] -left-14 sm:-left-32 md:-left-48 lg:-left-52 xl:-left-64 2xl:-left-[23rem] bottom-8 md:-bottom-20 md:ml-4 lg:ml-8 xl:ml-12 2xl:ml-16 max-w-none' : ''}
                                                     ${imgOverlay.page === 'applikationer' ? 'z-10 w-44 sm:w-72 md:w-88 lg:108 xl:w-108 2xl:w-[40rem] -left-14 sm:-left-32 md:-left-48 lg:-left-52 xl:-left-64 2xl:-left-[23rem] bottom-8 md:-bottom-24 xl:-bottom-20 md:ml-4 lg:ml-8 xl:ml-12 2xl:ml-16 max-w-none' : ''}
                                                      offers-custom-bottom absolute`}
                                         src={imgOverlay.src} alt={'line'} priority width={527} height={527}/>
                }

            </div>

        </div>
    );

};
export default OffersHero;
