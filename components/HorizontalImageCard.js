import Image from 'next/image'
const HorizontalImageCard = ({ img, subtitle, cardTitle, description, list }) => {


    return (
        <div className="grid-cols-12 py-8 px-4 md:p-8 grid col-span-12 lg:col-span-10 lg:col-start-2 lg:mx-12 xl:mx-32 2xl:mx-36 rounded-lg gap-2 bg-white mt-16">


            <div className="col-span-12 lg:col-span-2">
                <Image className="mx-auto lg:mx-0 rounded-full max-w-none w-48 h-48" src={img} alt={"image"} width={200} height={200} priority style={{ objectFit: 'cover', objectPosition: 'center' }}/>
            </div>

            <div className="col-span-12 mt-4 lg:col-span-8 lg:col-start-4 lg:ml-8 lg:mt-0 2xl:col-span-6 2xl:mt-0 2xl:col-start-3 2xl:ml-8">
                <h5 className="text-sm font-secondary tracking-widest font-bold uppercase text-primary">{subtitle}</h5>

                <h3 className="py-4 text-3xl lg:text-4xl text-primary font-secondary lg:tracking-075">{cardTitle}</h3>

                {description && <p className="md:text-lg lg:text-2xl">
                    {description}
                </p>}
            </div>

            { list && <div className={`col-span-12 lg:col-span-5 lg:col-start-4 lg:ml-8 2xl:col-span-3 2xl:col-start-10 mt-8 2xl:mt-0 rounded-lg `}>
                <p className={`font-secondary text-sm tracking-widest font-bold uppercase text-primary`}>
                    {list.title}
                </p>

                <ul className={`pt-4 text-base md:text-lg lg:text-2xl text-primary`}>
                    {list.items.map((item, i) => {
                            return (
                                <li key={i} className="ml-5 pb-1 list-disc">
                                    {item}
                                </li>
                            )

                        }
                    )}
                </ul>
            </div> }

        </div>
    );
};
export default HorizontalImageCard;
