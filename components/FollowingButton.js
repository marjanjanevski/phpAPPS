"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";

function FollowingButton({ button, heroRef }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);
    const sectionSize = heroRef.current ? { width: heroRef.current.offsetWidth, height: heroRef.current.offsetHeight } : { width: 0, height: 0 }
    const hoverTimeoutRef = useRef();
    function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
        if (isNaN(unscaledNum) || isNaN(minAllowed) || isNaN(maxAllowed) || isNaN(min) || isNaN(max)) {
            return 1;
        }

        if (max - min === 0) {
            return 1;
        }

        return +((maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed).toFixed(2);
    }

    useEffect(() => {
        if(!hover) {
            function handleMouseMove(event) {
                setPosition({ x: event.clientX, y: event.clientY });
            }
            window.addEventListener("mousemove", handleMouseMove);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, [hover]);

    useEffect(() => {
        return () => {
            clearTimeout(hoverTimeoutRef.current);
        };
    }, []);

    return (
        <div className="relative max-w-max">
            <Link
                onClick={button?.callback ? button.callback : null }
                href={button?.link ?? ''}
                className={`font-secondary inline uppercase group relative md:ml-4 hidden lg:inline`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                        setHover(false);
                    }, 250);
                }}
            >
            <span className="absolute border-2 rounded-full p-4 lg:border-0 lg:rounded-none lg:p-0  text-white opacity-80 z-10 ">
              {button.label}
            </span>

                <span
                    className={`hidden lg:block highlight border-2 w-14 h-14 rounded-full absolute -left-5 -top-5 group-hover:w-[135%] group-hover:duration-300`}
                    style={{
                        left: hover? undefined : scaleBetween(position.x + 300, -30, 20, 0, sectionSize.width),
                        top: hover? undefined : scaleBetween(position.y - 180, -20, 20, 0, sectionSize.height),
                        transform: hover? `translate(-12%, -40%)` : `translate(-50%, -50%)`,
                    }}
                ></span>
                <span
                    className="followMeText hidden lg:inline"
                    style={{
                        clipPath: hover? undefined : `circle(30.3px at ${scaleBetween(
                            position.x,
                            -24,
                            30,
                            0,
                            sectionSize.width
                        )}px calc(50% + ${scaleBetween(
                            position.y - 180,
                            -20,
                            20,
                            0,
                            sectionSize.height
                        )}px))`,
                    }}
                >
                {button.label}
            </span>
            </Link>
        </div>
    );
}

export default FollowingButton;
