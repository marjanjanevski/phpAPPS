"use client";
import Image from 'next/image'
import Link from "next/link";
import React, { useState } from 'react';
const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <header className="bg-white">
            <div className="mbp-container ">
                <div className="header-container py-4 lg:py-8 z-20 flex justify-between">
                    <Image className="" src={"/icons/BointsoftLogoLetters.svg"} alt={"Logo Image Here"} width={240} height={100}/>

                    <div className="flex gap-12 items-center hidden lg:flex z-10">
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Our Services</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Projects</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Agency</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Contact us</Link>
                    </div>

                    <div className={"hamburger-menu lg:hidden flex items-center cursor-pointer"}
                        onClick={toggleMenu}
                    >
                        <Image
                            src={isMenuOpen ? "/icons/hamburgerX.svg" : "/icons/hamburger.svg"}
                            alt={isMenuOpen ? "close" : "hamburger"}
                            width={"24"}
                            height={"24"}
                        />
                    </div>
                </div>
            </div>
        </header>
    )

    // return (
    //     <div className={`mbp-container left-0 right-0 mx-auto ${config.position} md:absolute`}>
    //         <div className={`flex lg:w-auto md:flex-col justify-between lg:pr-0 lg:pt-6`}>
    //
    //             <Link href={'/'} className="inline-block max-w-max z-10 ">
    //                 <Image className="w-20 h-20 -mt-1 pt-4" src={config.logo} alt={"logo"} width={750} height={11} />
    //             </Link>
    //
    //             <div className="mt-4 max-w-max z-10">
    //                 <p onClick={openModal} className={`cursor-pointer text-sm uppercase tracking-2 font-secondary font-bold md:rotated-text md:rotate-180 rounded-full pt-2 pb-1 px-4 md:py-4 md:pl-1 md:pr-2 text-white ${config.menuBtnColor}`}>
    //                     Meny
    //                 </p>
    //             </div>
    //
    //         </div>
    //
    //     </div>
    // );
}
export default Menu;
