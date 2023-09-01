"use client"
import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';

function ToggleHandIcon() {

    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
            const intervalId = setInterval(() => {
                setShowImage(prevShowImage => !prevShowImage);
            }, 1000);
            return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex items-end">
            <Image className={`w-12 h-12 ${showImage ? 'hidden' : '' }`} src={"/icons/arm-rockin.svg"} alt="handsup" width={150} height={150}/>
            <Image className={`w-12 h-12 ${!showImage ? 'hidden' : '' }`} src={"/icons/singleHand.svg"} alt="handsup" width={150} height={150}/>
        </div>
    );
}

export default ToggleHandIcon;