"use client";
import Image from 'next/image';
import Link from "next/link";
import ToggleHandIcon from "./../ToggleHandIcon";
import {usePathname} from "next/navigation";

const Footer = () => {

    const pathname = usePathname();
    const isContactPage =  pathname === '/kontakt';

    return (
        <footer className="mt-16 bg-primary">
            <div className={`footer mbp-container py-8 pl-3 sm:pl-8 sm:pr-8 lg:py-[80px] relative overflow-hidden`}>
                <div className="lg:grid lg:col-span-12 lg:grid-cols-12 gap-8 relative">
                    <div className="lg:col-span-12 2xl:col-span-3 mb-8 pl-3 h-min">
                        <div className="inline-block relative">
                            <Link href={'/'}>
                                <Image className="w-[220px] h-[64px] -mt-3" src={"/icons/phpAPPSfooter.svg"} alt={"logo"} width={750} height={11} />
                            </Link>
                            <div className="absolute bottom-4 -right-12">
                                <ToggleHandIcon />
                            </div>
                        </div>
                        <h3 className="text-2xl font-primary font-normal text-lightgray">Stortorget 8<br/>831 31 Östersund</h3>
                    </div>

                    <div className="col-span-12 2xl:col-span-9 grid grid-cols-12 2xl:ml-20">

                        <div className="flex pb-8 lg:col-span-4 col-span-12 pl-3 flex flex-col items-start relative gap-3 group text-white border-l-2 border-pinkprimary">
                            <p className="text-pinkprimary font-secondary text-[40px]">Services</p>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/"}>Web Development</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/kontakt"}>Web Design</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/kontakt"}>Project Management</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/kontakt"}>Digital Marketing</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/kontakt"}>Hosting</Link>
                        </div>

                        <div className="pb-8 lg:col-span-4 col-span-12 pl-3 flex flex-col items-start relative gap-3 group text-white border-l-2 border-pinkprimary">
                            <p className="text-pinkprimary font-secondary text-[40px]">Partners</p>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/tjanster/tjanstedesign-och-innovation"}>Partner 1</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/tjanster/tjanstedesign-och-innovation"}>Partner 2</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/tjanster/tjanstedesign-och-innovation"}>Partner 3</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/tjanster/webb-och-systemutveckling"}>Partner 4</Link>
                        </div>

                        <div className="lg:col-span-4 col-span-12 mb-8 lg:my-0 pl-3 flex flex-col items-start relative gap-3 group text-white border-l-2 border-pinkprimary">
                            <p className="text-pinkprimary font-secondary text-[40px]">Contact</p>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/erbjudande/poc"}>phpapps@info.com</Link>
                            <Link className={"hover:underline underline md:no-underline underline-offset-2 text-3xl"} href={"/erbjudande/prototyp"}>+389 70 777 777</Link>
                            <div className={`flex`}>
                                <Link className={""} href={"/erbjudande/mvp"}><Image className="w-[40px] h-[40px] -mt-3" src={"/icons/Instagram.svg"} width={40} height={40}/></Link>
                                <Link className={""} href={"/erbjudande/digitala-plattformar"}><Image className="w-[40px] h-[40px] -mt-3" src={"/icons/Facebook.svg"} width={40} height={40}/></Link>
                                <Link className={""} href={"/erbjudande/api-integrationer"}><Image className="w-[40px] h-[40px] -mt-3" src={"/icons/Twitter.svg"} width={40} height={40}/></Link>
                                <Link className={""} href={"/erbjudande/applikationer"}><Image className="w-[40px] h-[40px] -mt-3" src={"/icons/Linkedin.svg"} width={40} height={40}/></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/*<div className={`flex justify-between pt-5 gap-2 flex-col lg:flex-row ${isContactPage ? "text-white" : "text-primary"}`}>*/}

            {/*    <div className="flex gap-2 flex-col lg:flex-row ">*/}

            {/*        <p>Copyright © 2010-{new Date().getFullYear()} Mina Bästa Polare AB.</p>*/}
 border-l-2 border-pinkprimary
            {/*        <div className="group">*/}
            {/*            <Link href={"/cookies"} className={"hover:underline underline md:no-underline underline-offset-2 md:ml-4"}>Cookies</Link>*/}
            {/*            <Link href={"/integritetspolicy"} className={"hover:underline underline md:no-underline underline-offset-2 ml-4"}>Integritetspolicy</Link>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*    <div className="flex lg:items-center group">*/}

            {/*        <div className="flex group hover:scale-110">*/}

            {/*            <Link href={"https://www.google.com/maps/place/Mina+B%C3%A4sta+Polare/@63.1788347,14.6338531,17z/data=!3m1!4b1!4m6!3m5!1s0x466fb83dc982f133:0x5d83ba2d9821d354!8m2!3d63.1788347!4d14.6360471!16s%2Fg%2F1tj9514j"}>*/}
            {/*                <Image className={`w-6 h-6 ${isContactPage ? "hidden" : ""}`} src={"/icons/mapPin-blue.svg"} alt={"image"} width={750} height={750} quality={100} />*/}
            {/*                <Image className={`w-6 h-6 ${isContactPage ? "" : "hidden"}`} src={"/icons/mapPin.svg"} alt={"image"} width={750} height={750} quality={100} />*/}
            {/*            </Link>*/}

            {/*            <p className="text-base ml-2 group-hover:underline underline-offset-2">Östersund, Sweden</p>*/}

            {/*        </div>*/}

            {/*        <div className="flex group">*/}
            {/*            <Link href={"https://se.linkedin.com/company/mina-basta-polare"}>*/}
            {/*                <Image className={`w-6 h-6 ml-4 hover:scale-110 ${isContactPage ? "hidden" : ""}`} src={"/icons/icon-linked-in.svg"} alt={"image"} width={750} height={750} quality={100} />*/}
            {/*                <Image className={`w-6 h-6 ml-4 hover:-scale-110 ${isContactPage ? "" : "hidden"}`} src={"/icons/icon-linked-in-white.svg"} alt={"image"} width={750} height={750} quality={100} />*/}

            {/*            </Link>*/}

            {/*            <Link href={"https://www.instagram.com/minabastapolare/"}>*/}
            {/*                <Image className={`w-6 h-6 ml-4 hover:scale-110 ${isContactPage ? "hidden" : ""}`} src={"/icons/instagram.svg"} alt={"image"} width={750} height={750} quality={100} />*/}
            {/*                <Image className={`w-6 h-6 ml-4 hover:scale-110 ${isContactPage ? "" : "hidden"}`} src={"/icons/instagramWhite.svg"} alt={"image"} width={750} height={750} quality={100} />*/}
            {/*            </Link>*/}

            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </footer>

    )
}

export default Footer;
