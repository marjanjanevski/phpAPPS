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
            </div>


            <ImageText5050 img={data.imageText5050.img}/>

            <NewProject title={data.newProject.title} />

            <div className="mbp-container">
                <ClientSlider slides={data.clientSlider.slides} />
            </div>

            <LogoSlider logos={data.logoSlider.logos} />

        </section>

    );
};

export default Home;
