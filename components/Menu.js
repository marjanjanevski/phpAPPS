"use client";
import Image from 'next/image';
import Link from "next/link";

import React, { useState } from 'react';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-30">
            <div className="mbp-container">
                <div className="header-container py-4 lg:py-8 flex justify-between">
                    <Image className="z-30" src={"/icons/bsl.png"} alt={"Logo Image Here"} width={30} height={30}/>

                    <div className="flex gap-12 items-center hidden lg:flex z-10">
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Our Services</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Projects</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Agency</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Contact us</Link>
                    </div>

                    <div className={"hamburger-menu lg:hidden flex items-center cursor-pointer z-30"} onClick={toggleMenu}>
                        <Image
                            src={isMenuOpen ? "/icons/hamburgerX.svg" : "/icons/hamburger.svg"}
                            alt={isMenuOpen ? "close" : "hamburger"}
                            width={"24"}
                            height={"24"}
                        />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden w-full h-full fixed top-0 left-0 bg-white pt-24 pl-4 z-20">
                        {/* Render your menu items here */}
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>E-commerce</Link>
                        </div>
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>UI/UX Design</Link>
                        </div>
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>Theming</Link>
                        </div>
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>Outsorcing Developers</Link>
                        </div>
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>Projects</Link>
                        </div>
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>Agency</Link>
                        </div>
                        <div className="text-3xl py-4 text-primary font-secondary">
                            <Link href={"#"}>Contact us</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Menu;
