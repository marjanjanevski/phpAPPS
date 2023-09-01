import Image from 'next/image'
import StaticButton from "./StaticButton";
import Link from "next/link";
const VerticalImageCard = ({ perRow, img, imgOverlay, cardTitle, description, button }) => {

    const cardColSpan = () => {
        switch (perRow) {
            case 2:
                return "lg:col-span-6";
            default:
                return "lg:col-span-4";
        }
    }

    const colspan = cardColSpan();

    return (
        <div className={`col-span-12 ${colspan} p-8 sm:px-12 sm:py-16 lg:p-8 lg:py-12 bg-white group rounded-lg flex flex-col `}>

            <div className="relative">
                <Image className="mx-auto rounded-full"
                       src={img}
                       alt={"image"}
                       priority
                       width={400}
                       height={400}
                       quality={100}
                       style={{aspectRatio: "16 / 16", objectFit: 'cover', objectPosition: 'center'}}
                />
                <div className="absolute top-0 left-0 right-0">
                    <Image className="mx-auto opacity-0 group-hover:opacity-50 duration-500 rounded-full"
                           src={imgOverlay}
                           alt={"image"}
                           priority
                           width={400}
                           height={400}
                           quality={100}
                           style={{aspectRatio: "16 / 16"}} />
                </div>
            </div>

            <div className="my-4 md:my-4">

                <h3 className="py-4 text-3xl lg:text-4xl text-primary font-secondary lg:tracking-075">{cardTitle}</h3>

                {description && <p className="md:text-lg lg:text-2xl">
                    {description}
                </p>}
            </div>

            <StaticButton config={button} />

        </div>
    );
};
export default VerticalImageCard;
