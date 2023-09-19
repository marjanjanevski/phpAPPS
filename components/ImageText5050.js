import InfoBlock from "./InfoBlock";
import Image from "next/image";

const data = require('../public/data.json');

const ImageText5050 = ({ img }) => {
    return (
        <div className="grid grid-cols-12 items-center mt-4 lg:mt-12 lg:mbp-container">
            <div className="col-span-12 lg:col-span-6">
                <Image src={"/icons/bsl.png"} width={800} height={500} alt={"Image"}/>
            </div>
            <div className="col-span-12 lg:col-span-6">
                <InfoBlock title={data.infoBlockTeam.title}
                           subtitle={data.infoBlockTeam.subtitle}
                           description={data.infoBlockTeam.description}
                           showButton={true}
                           buttonText={"Meet the team"}
                />
            </div>
        </div>
    );
};

export default ImageText5050;