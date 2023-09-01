"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ImageGrid.css';

function ImageGrid({images}) {

    const [divs, setDivs] = useState([
        { id: 2, orientation: 'portrait', split1: { background: '#23234F', glitch: '' }, split2: { background: 'url("/imageGrid/Christer.jpg") no-repeat center center / cover', glitch: '' }, glitch: '' },
        { id: 1, orientation: 'landscape', split1: { background: '#4EDEE4', glitch: ''}, split2: { background: 'url("/imageGrid/elliot.jpg") no-repeat center center / cover', glitch: '' }, glitch: '' },
        { id: 3, orientation: 'landscape', split1: { background: 'url("/imageGrid/micke.jpg ") no-repeat center center / cover', glitch: ''}, split2: { background: '#F33C6E', glitch: '' }, glitch: '' },
    ]);

    const [colorIndex, setColorIndex] = useState(0);
    const [glitchTimeout, setGlitchTimeout] = useState(null);
    const effectRan = useRef(false);


    const getRandomImage = useCallback(orientation => {
        let pic;
        if(orientation === 'landscape') {
            pic = images.landscape[Math.floor(Math.random() * images.landscape.length)];
        } else {
            pic = images.portrait[Math.floor(Math.random() * images.portrait.length)];
        }
        return `url("${pic}") no-repeat center center / cover`;
    },  [images.landscape, images.portrait]);

    const updateSplitDivBackground = useCallback(currentDivIndex => {
        const colors = ['#F33C6E', '#FFE588', '#4EDEE4', '#23234F'];

        const updatedDivs = [...divs];

        const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        const random2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

        updatedDivs[currentDivIndex].split1.background = random % 2 === 0 ? getRandomImage(updatedDivs[currentDivIndex].orientation) : colors[colorIndex];
        updatedDivs[currentDivIndex].split2.background = random % 2 === 1 ? getRandomImage(updatedDivs[currentDivIndex].orientation) : colors[colorIndex];

        updatedDivs[currentDivIndex].split1.glitch = random2 % 2 === 0 ? 'glitch' : '';
        updatedDivs[currentDivIndex].split2.glitch = random2 % 2 === 1 ? 'glitch' : '';

        updatedDivs[currentDivIndex].glitch = 'glitch';


        if(colorIndex === colors.length - 1) {
            setColorIndex(0);
        } else {
            setColorIndex(colorIndex + 1);
        }

        setDivs(updatedDivs);
    }, [colorIndex, divs, getRandomImage]);

    useEffect(() => {
            const intervalId = setInterval(() => {
                let currentDivIndex = Math.floor(Math.random() * 3);
                updateSplitDivBackground(currentDivIndex);
                clearTimeout(glitchTimeout);
                setGlitchTimeout(setTimeout(() => {
                    for (let i = 0; i < divs.length; i++) {
                        divs[i].split1.glitch = '';
                        divs[i].split2.glitch = '';
                        divs[i].glitch = '';
                    }
                    const random = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

                    random % 4 === 0 ? setDivs(shuffleArray(divs)) : setDivs(divs);
                }, 300));
            }, 3000);
            return () => clearInterval(intervalId);
    }, [divs, glitchTimeout, updateSplitDivBackground]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div className="hidden lg:block">
            <section className="grid grid-cols-12 h-[640px] relative">

                <div className="absolute top-10 lg:left-12 2xl:left-80 2xl:ml-10 shuffling-grid-title z-100">
                    <hr className="text-white w-8 mb-4"></hr>
                    <p className="text-white font-secondary text-5xl">Östersund</p>
                    <p className="text-white font-secondary text-xl">Startarget 8</p>
                    <p className="text-white font-secondary text-xl">831 31</p>
                </div>

            {divs.map((div) => (
                <div
                    key={div.id}
                    className={`col-span-4 ${div.orientation} ${(div.orientation === 'portrait' ? 'flex relative' : '')}`}
                >
                    {div.orientation === 'portrait' &&
                        <div
                            className={`${(div.orientation === 'portrait') ? 'h-full w-full' : '' } ${div.glitch} gridImage lg:hidden`}
                            style={{
                                background: div.split1.background,
                            }}
                        ></div>
                    }

                    <div
                        className={`${(div.orientation === 'portrait') ? 'w-1/2 h-full hidden lg:block' : 'h-1/2 w-full' } ${div.split1.glitch} gridImage`}
                        style={{
                            background: div.split1.background,
                        }}
                    ></div>

                    <div
                        className={`${(div.orientation === 'portrait') ? 'w-1/2 h-full hidden lg:block' : 'h-1/2 w-full' } ${div.split2.glitch} gridImage`}
                        style={{
                            background: div.split2.background
                        }}
                    ></div>

                </div>
            ))}

            <div className="lines hidden lg:block">
                <div className="line-set">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="line-set">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="line-set">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="line-set">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </section>
        </div>
    );
}

export default ImageGrid;