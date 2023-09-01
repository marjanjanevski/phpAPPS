"use client";
import Image from 'next/image'
import Link from "next/link";
import { usePathname} from 'next/navigation';
const Menu = () => {
    const pathname = usePathname();
    const segments = pathname.split('/');

    const path = '/' + segments[1];
    const configSwitch = () => {
        switch (path) {
            case "/":
                return {
                    logo:"/black-logo.svg",
                    position:"absolute",
                    menuBtnColor:"bg-punchpink",
                }
            case "/kontakt":
                return {
                    logo:"/white-logo.svg",
                    position:"absolute",
                    menuBtnColor:"bg-turquoise",
                }
            case "/cases":
                return {
                    logo:"/black-logo.svg",
                    position:"static",
                    menuBtnColor:"bg-turquoise",
                }
            case "/offers":
            case "/services":
            default:
                return {
                    logo:"/black-logo.svg",
                    position:"static",
                    menuBtnColor:"bg-lemonyellow",
                }
        }
    }
    const config = configSwitch();

    const openModal = () => {
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('block');
    }

    return (
        <header className="bg-white">
            <div className="mbp-container ">
                <div class="header-container py-4 lg:py-8 z-20 flex justify-between">
                    <Image className="" src={"/icons/phpappslogo.svg"} alt={"Logo Image Here"} width={152} height={40}/>

                    <div className="flex gap-12 items-center hidden lg:flex z-10">
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Our Services</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Projects</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Agency</Link>
                        <Link className="text-3xl hover:border-b-2 border-pinkprimary" href={"#"}>Contact us</Link>
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
