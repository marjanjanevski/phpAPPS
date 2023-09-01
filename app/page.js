"use client";

import AnimatedBackgroundCard from "../components/AnimatedBackgroundCard";
import HeroBanner             from "../components/HomeHero/HomeHero";
import Divider                from "../components/Divider/Divider";
import LogoSlider             from "../components/LogoSlider";
import IrregularSlider        from "../components/IrregularSlider/IrregularSlider";
import ProductSlider          from "../components/ProductSlider";
import ContactSection         from "../components/ContactSection";
import ShufflingImageGrid     from "../components/ShufflingImageGrid/ShufflingImageGrid";
import MissionCard            from "../components/MissionCard";
import InfoBlock              from "../components/InfoBlock";

import React                  from "react";
import ImageText5050 from "../components/ImageText5050";
import NewProject from "../components/NewProject";
import ClientSlide from "../components/ClientSlide";
import ClientSlider from "../components/ClientSlider";

const data = require('../public/data.json');
const Home = () => {
    return (
        <section>

            <HeroBanner title={data.heroBanner.title}
                        subtitle={data.heroBanner.subtitle}
            />

            <InfoBlock title={data.infoBlockServices.title}
                       subtitle={data.infoBlockServices.subtitle}
                       description={data.infoBlockServices.description}
            />

            <div className="mbp-container">
                <ProductSlider slides={data.productSlider.slides} />

                <ClientSlide title={data.clientSlide.title}
                             subtitle={data.clientSlide.subtitle}
                             description={data.clientSlide.description}
                             clientName={data.clientSlide.clientName}
                             companyName={data.clientSlide.companyName}
                             clientPosition={data.clientSlide.clientPosition}
                             companyLocation={data.clientSlide.companyLocation}

                />
            </div>


            <ImageText5050 img={data.imageText5050.img}/>

            <NewProject title={data.newProject.title} />

            <div className="mbp-container">
                <ClientSlider slides={data.clientSlider.slides} />
            </div>

            <LogoSlider logos={data.logoSlider.logos} />

            {/*<div className="mbp-container mx-auto">*/}

            {/*    <MissionCard cardTitle={data.missionCard.cardTitle}*/}
            {/*                    description={data.missionCard.description}*/}
            {/*    />*/}

            {/*    <Divider color="green"/>*/}



            {/*    <Divider color="pink" className="lg:hidden"/>*/}



            {/*    <IrregularSlider title={data.irregularSlider.title}*/}
            {/*                     description={data.irregularSlider.description}*/}
            {/*                     images={data.irregularSlider.images}*/}
            {/*                     button={data.irregularSlider.button}*/}
            {/*    />*/}

            {/*    <Divider color="primary"/>*/}

            {/*    <ContactSection*/}
            {/*        title={data.contactSection.title}*/}
            {/*        subtitle={data.contactSection.subtitle}*/}
            {/*        employees={data.contactSection.employees}*/}
            {/*        employeList={[...data.contactSection.contactPageList, ...data.contactSection.employeList]}*/}
            {/*        contactPageList={data.contactSection.contactPageList}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<ShufflingImageGrid images={data.shufflingImageGrid.images} />*/}
        </section>

    );
};

export default Home;
