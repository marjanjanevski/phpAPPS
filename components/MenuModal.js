"use client";
import Image from 'next/image'
import Link from "next/link";
const MenuModal = () => {

    const closeModal = () => {
        document.getElementById('modal').classList.remove('block');
        document.getElementById('modal').classList.add('hidden');
    }

    return (
        <div>
            <div id="modal" className="bg-darkgray opacity-95 fixed left-0 right-0 top-0 bottom-0 hidden z-100 text-info ">

                <div className="mbp-container mx-auto">

                    <div className={`mbp-container left-0 right-0 mx-auto absolute md:absolute`}>
                        <div className={`flex md:w-auto md:flex-col justify-between md:pr-0 lg:mt-6`}>

                            <Link href={'/'} className="inline-block max-w-max z-10">
                                <Image className="w-20 h-20 -mt-1 pt-4" src={'/white-logo.svg'} alt={"logo"} width={750} height={11} />
                            </Link>

                            <div className="mt-4 max-w-max z-10">
                                <p onClick={closeModal} className={`cursor-pointer text-sm uppercase tracking-2 font-secondary font-bold md:rotated-text md:rotate-180 rounded-full pt-2 pb-1 px-4 md:py-4 md:pl-1 md:pr-2 bg-darkgray`}>
                                    Stäng
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="px-8 md:ml-40 pt-24 md:pt-10 h-screen relative md:z-100">

                        <ul className="menu-line font-primary mb-8 text-5xl lg:text-9xl xl:mr-32">
                            <li>
                                <p className="text-info font-secondary text-sm opacity-50">OM OSS</p>
                            </li>

                            <li className="mb-4 mt-2 ">
                                <Link href={'/kontakt'} className="text-white hover:text-lemonyellow" onClick={closeModal}>
                                    Kontakt
                                </Link>
                            </li>

                            <li className="">
                                <Link href={'https://jobb.minabastapolare.se/'} target="_BLANK" className="text-white hover:text-lemonyellow" onClick={closeModal}>
                                    Jobb
                                </Link>
                            </li>

                        </ul>

                        <ul className="menu-line font-primary text-5xl lg:text-9xl xl:mr-32">
                            <li>
                                <p className="text-info font-secondary text-sm opacity-50">VÅRA TJÄNSTEOMRÅDEN</p>
                            </li>

                            <li className="mb-4 mt-2">
                                <Link href={'/tjanster/tjanstedesign-och-innovation'} className="text-white hover:text-lemonyellow" onClick={closeModal}>
                                    Tjänstedesign och Innovation
                                </Link>
                            </li>

                            <li className="">
                                <Link href={'/tjanster/webb-och-systemutveckling'} className="text-white hover:text-lemonyellow" onClick={closeModal}>
                                    Webb- och systemutveckling
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default MenuModal;
