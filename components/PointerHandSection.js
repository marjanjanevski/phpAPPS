import React from 'react';
import Image from "next/image";

const PointerHandSection = ({icon, text}) => {
    return (
        <div className="flex flex-col items-center justify-center col-span-12 py-4 lg:py-20">
            <div className="w-20 rounded-full flex items-center justify-center">
                <Image src={icon} alt={icon} width={100} height={100} />
            </div>
            <p className="text-center text-primary font-secondary text-4xl lg:text-6xl lg:px-48 mt-7">{text}</p>
        </div>
    );
}

export default PointerHandSection;
