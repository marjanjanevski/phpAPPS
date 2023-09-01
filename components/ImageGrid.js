import React from 'react';
import Image from "next/image";

const ImageGrid = ({ title, img, img1, img2, imgOverlay, address, number }) => {
    return (
        <div className="grid col-span-12 grid-cols-10 h-108 mt-10 relative">
            <div className="col-span-2 bg-primary">

            </div>
            <div className="col-span-2 relative">
                    <Image className="h-5"
                           src={img}
                           alt="grid image"
                           priority
                           fill
                           sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                           style={{ objectFit: 'cover', objectPosition: 'center' }}
                           quality={100}
                    />
                    <div className="absolute px-5 py-3">
                            <span className="border-2 border-white inline-block w-6 h-1"></span>
                            <h4 className="my-3 font-secondary text-white text-5xl z-50">{title}</h4>
                            <p className="font-secondary text-white text-base">{address}</p>
                            <p className="font-secondary text-white text-base">{number}</p>
                    </div>

            </div>
            <div className="col-span-3 flex flex-col h-full relative">
                    <div className="bg-turquoise h-3/6"></div>
                    <div className="relative h-3/6">
                            <Image
                                   src={img1}
                                   alt="grid image"
                                   priority
                                   fill
                                   sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                                   style={{ objectFit: 'cover', objectPosition: 'center' }}
                                   quality={100}
                            />
                    </div>
                    <Image className={`${imgOverlay.rounded === 'true' ? 'rounded-full' : ''} z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64`}
                           src={imgOverlay.src} alt={'line'} width={250} height={250} />
            </div>
            <div className="col-span-3 flex flex-col h-full">
                    <div className="relative h-3/6">
                            <Image
                                src={img2}
                                alt="grid image"
                                priority
                                fill
                                sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                quality={100}
                            />
                    </div>
                    <div className="bg-punchpink h-3/6"></div>
            </div>

        </div>
    )
}

export default ImageGrid