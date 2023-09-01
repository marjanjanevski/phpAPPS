"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import AnimatedButton from "../AnimatedButton";

import './casesHero.css';

const CasesHero = ({ subtitle, title, description, img, highlights, button, videoUrl }) => {

    const [visibility, setVisibility] = useState(false);
    const [highlightText, setHighlightText] = useState("");

    function onHover(highlight) {
        setVisibility(true);
        setHighlightText(highlight.description);
    }

    function onLeave() {
        setVisibility(false);
        setHighlightText("");
    }

    let wordCount = title.split(" ").length;

    let mdPadding = (wordCount > 2) ? "md:pb-16" : "md:pb-8";
    let mdTopPositionImage = (wordCount > 2) ? "md:-top-40" : "md:-top-16";
    let topPositionImage = (wordCount > 2) ? "top-80" : "top-52 md:top-56";
    let marginBottom = (wordCount > 2) ? "mb-16" : "";

    return (
        <div className={`grid lg:h-[552px] xl:h-[583px] col-span-12 grid-cols-12 xl:pb-24 relative 2xl:mb-64 mt-8 ${marginBottom}`}>

            <div className="z-20 grid grid-cols-12 col-span-12 pb-32 md:pb-20 2xl:pt-24 mb-32 md:mb-56 md:mt-10 rounded-lg bg-white md:col-span-7 md:col-start-3 lg:col-span-7 lg:col-start-2 lg:ml-12 2xl:col-start-2 2xl:col-span-6 2xl:ml-0 mt-12 md:m-4 md:ml-0 lg:mt-10 lg:p-4 w-full padding-custom 2xl:pb-24">

                <div className={`col-start-2 col-span-10 flex flex-col lg:justify-center text-primary w-4/5 lg:h-[350px] ${mdPadding} lg:pb-0 pt-8 lg:pt-0 lg:pr-16 xl:pr-36 2xl:pr-16`}>

                    <h4 className="font-secondary text-sm tracking-2 font-bold uppercase">{subtitle}</h4>
                    <h2 className="py-2 text-7xl xl:text-8xl 2xl:text-9xl font-secondary lg:tracking-n1">{title}</h2>
                    <p className="font-medium text-primary text-2xl mb-2 hidden lg:block">{description}</p>

                    <div className="flex gap-2 text-base relative">
                        {highlights.map((highlight, index) => (
                            <span className="bg-lemonyellow drop-shadow-[1px_1px_4px_rgba(0,0,0,0.25)] lg:drop-shadow-none hover:lg:drop-shadow-[1px_1px_4px_rgba(0,0,0,0.25)]"
                                  onMouseEnter={() => onHover(highlight)}
                                  onMouseLeave={onLeave}
                                  key={index}>
                                {highlight.title}
                            </span>
                        ))}
                        {visibility && <span className="bg-lemonyellow hidden lg:block absolute top-6 w-[200px] py-2 px-4">{highlightText}</span>}
                    </div>
                </div>

            </div>

            <div className="z-20 col-span-12 w-full absolute -top-4 lg:top-4 flex justify-end xl:pr-24 md:left-8 md:mt-14 lg:mt-6 mb-6">
                <AnimatedButton config={button}/>
            </div>

            <div className={`absolute ml-3 ${topPositionImage} lg:top-24 xl:top-24 grid grid-cols-12 md:ml-20 xl:ml-5 w-full`}>

                <div className={`col-start-1 ml-4 md:ml-24 lg:ml-0 col-span-12 md:col-span-12 md:col-start-4 ${mdTopPositionImage} lg:top-0 lg:col-span-12 lg:col-start-6 relative z-20`}>
                {videoUrl ? (
                    <iframe                       
                        src={videoUrl}
                        allowFullScreen                        
                        loop
                        playsInline
                        style={{aspectRatio: "18 / 12", height: "auto", width: "944px", marginTop: "20px", width:"100%"}}
                    ></iframe>
                    ) : (
                    <Image
                        src={img}
                        alt="hero image"
                        priority
                        style={{ aspectRatio: "18 / 12", height: "auto", width: "944px", marginTop: "20px" }}
                        width={944}
                        height={628}
                        quality={100}
                    />
                    )}

                    

                    <div>
                    
                </div>


                </div>
            </div>
        </div>
    );
};
export default CasesHero;