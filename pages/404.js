import '../styles/globals.css';
import Link from "next/link";
import Image from "next/image";
const NotFoundPage = () => {
    return <div className="flex flex-col items-center justify-center h-screen w-screen bg-primary text-white font-secondary">

        <div className=" relative">
            <Image className="absolute -left-20 -top-20 sm:-top-9 handWave2" src={"/icons/handLeft.svg"} alt="handleft" width={75} height={113}/>
            <div className="text-8xl sm:text-10xl pl-7 pr-6">404</div>
            <Image className="absolute -right-20 -top-14 sm:-top-2 handWave" src={"/icons/handRight.svg"} alt="handleft" width={80} height={130}/>
            <span className="absolute text-lemonyellow text-3xl font-medium top-12 sm:top-24 -left-20 sm:-left-32 font-secondary">Oooj .......</span>
        </div>
        <div className="text-5xl sm:text-6xl mt-8 sm:mt-0 mb-14">Sidan hittades inte</div>

        <Link href="/"
              className={`bg-punchpink text-white group-hover:text-primary group-hover:bg-lemonyellow w-fit inline-block font-secondary text-sm tracking-2 uppercase pt-6 pb-5 px-4 rounded-lg`}>
            Tillbaka till hemsidan
        </Link>


    </div>
}

export default NotFoundPage