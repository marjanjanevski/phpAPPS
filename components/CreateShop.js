import InfoBlock from "./InfoBlock";
import data from "../public/data.json";
import Image from "next/image";
import React from "react";

const CreateShop = ({ }) => {
    return (
        <div>
            <InfoBlock title={data.infoBlockCreateShop.title}
                       subtitle={data.infoBlockCreateShop.subtitle}
                       description={data.infoBlockCreateShop.description}
            />

            <div className={`grid grid-cols-12 mbp-container gap-8`}>
                <div className={`col-span-4 flex flex-col items-center gap-4`}>
                    <div>
                        <Image className="" src={"/icons/CreateEdit.svg"} alt={"Logo Image Here"} width={100} height={100}/>
                    </div>
                    <div className={`flex flex-col items-center justify-center`}>
                        <span className={`text-pinkprimary text-[24px] font-secondary text-center`}>Create your own custom theme. </span>
                        <p className={`text-primary text-[20px] text-center`}>We offer more than 14+ e-commerce themes, or we can create your own theme.</p>
                    </div>
                </div>

                <div className={`col-span-4 flex flex-col items-center gap-4`}>
                    <div>
                        <Image className="" src={"/icons/AddMore.svg"} alt={"Logo Image Here"} width={100} height={100}/>
                    </div>
                    <div className={`flex flex-col items-center justify-center`}>
                        <span className={`text-pinkprimary text-[24px] font-secondary text-center`}>Products and Categories.</span>
                        <p className={`text-primary text-[20px] text-center`}>Add your own products and choose their categories.</p>
                    </div>
                </div>

                <div className={`col-span-4 flex flex-col items-center gap-4`}>
                    <div>
                        <Image className="" src={"/icons/StartSelling.svg"} alt={"Logo Image Here"} width={100} height={100}/>
                    </div>
                    <div className={`flex flex-col items-center justify-center`}>
                        <span className={`text-pinkprimary text-[24px] font-secondary text-center`}>Start selling!</span>
                        <p className={`text-primary text-[20px] text-center`}>Customers are buying your items and your store is complete.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateShop;