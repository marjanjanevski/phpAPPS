import Image from "next/image";
import AnimatedButton from "../AnimatedButton";
import './servicesHero.css';

const ServicesHero = ({ subtitle, title, description, img, button }) => {

    return (
        <div className="grid col-span-12 grid-cols-12 gap-2 xl:pb-24">

            <div className="col-span-12 lg:col-span-5 lg:col-start-2 xl:col-span-5 xl:col-start-2 grid grid-cols-12 lg:mt-8 2xl:-ml-8 margin-services  relative z-20">

                <div className="relative">
                    <Image className="lg:mb-5 xl:pt-4 xl:h-h-[400px] 2xl:h-[500px]"
                           src={'/icons/hero-arrow-down.svg'}
                           alt={'line'}
                           fill
                           sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                    />
                </div>

                <div className="col-start-2 xl:col-start-3 col-span-10 2xl:-ml-6">
                    <h4 className="mt-4 lg-mt-0 font-secondary text-sm tracking-2 font-bold uppercase text-info">{subtitle}</h4>

                    <h1 className="py-4 xl:py-10 text-6xl xl:text-8xl 2xl:text-9xl text-primary font-secondary lg:tracking-n1">{title}</h1>

                    <p className="font-primary text-primary text-xl xl:text-3xl">
                        {description}
                    </p>
                </div>
            </div>

            <div className="my-16 lg:pr-16 xl:pr-24 col-span-12 w-full lg:hidden flex justify-center lg:justify-end  relative z-20 hidden lg:block text-right">
                <AnimatedButton config={button}/>
            </div>

            <div className="col-span-12 md:col-start-6  md:col-span-7 xl:col-span-6 lg:col-start-7 m-h-[250px] md:m-h-[270px] lg:m-h-[390px] xl:m-h-[552px] mt-4 -mr-[15px] md:mr-0 -ml-[15px] md:ml-0 md:mt-0 sm:w-auto relative order-first lg:order-none relative">

                <Image className="md:ml-20 xl:ml-30"
                       src={img}
                       alt="hero image"
                       priority
                       width={944}
                       height={628}
                       quality={100}
                       style={{aspectRatio: "3 / 2"}}
                />

                <div className="2xl:w-full absolute lg:left-36 xl:left-56 lg:-bottom-4 xl:bottom-20 2xl:-bottom-20 hidden lg:block 2xl:flex 2xl:left-0 2xl:justify-end">
                    <AnimatedButton config={button}/>
                </div>

            </div>



        </div>
    );
};
export default ServicesHero;
