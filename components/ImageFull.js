import React from 'react';
import Image from "next/image";

const ImageFull = ({image}) => {
    return (
        <div>
            <Image src={image} alt={"fullImage"} width={1920} height={970}/>
        </div>
    )
}

export default ImageFull;