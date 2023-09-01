import OffersHero from "../../../components/OffersHero/OffersHero";
import ProductCard from "../../../components/ProductCard";
import PointerHandSection from "../../../components/PointerHandSection";
import HorizontalImageCard from "../../../components/HorizontalImageCard";
import Divider from "../../../components/Divider/Divider";
import ContactCard from "../../../components/ContactCard";
import VerticalImageCard from "../../../components/VerticalImageCard";
import ProductSlider from "../../../components/ProductSlider";
const data = require('./data.json');

const Poc = () => {
    return (
        <section className="mbp-container">

            <OffersHero subtitle={data.offersHero.subtitle}
                          title={data.offersHero.title}
                          description={data.offersHero.description}
                          img={data.offersHero.img}
                          imgOverlay={data.offersHero.imgOverlay}
                          heroCta={data.offersHero.heroCta}
                          button={data.offersHero.button}
            />
            <ProductCard label={data.productCard.label}
                         cardTitle={data.productCard.cardTitle}
                         description={data.productCard.description}
                         list={data.productCard.list}
            />

            <HorizontalImageCard img={data.horizontalImageCard.image}
                                 subtitle={data.horizontalImageCard.subtitle}
                                 cardTitle={data.horizontalImageCard.cardTitle}
                                 description={data.horizontalImageCard.description}
                                 list={data.horizontalImageCard.list}
            />

            <HorizontalImageCard img={data.horizontalImageCard2.image}
                                 subtitle={data.horizontalImageCard2.subtitle}
                                 cardTitle={data.horizontalImageCard2.cardTitle}
                                 description={data.horizontalImageCard2.description}
                                 list={data.horizontalImageCard2.list}
            />

            <PointerHandSection icon={data.pointerHandSection.icon}
                                text={data.pointerHandSection.text}
            />

            {/*<ProductSlider slides={data.productSlider.slides} />*/}

            <Divider color="black" />

            <ContactCard label={data.contactCard1.label}
                         cardTitle={data.contactCard1.cardTitle}
                         list={data.contactCard1.list}
                         subtitle={data.contactCard1.subtitle}
                         employee={data.contactCard1.employee}
                         button={data.contactCard1.button}
            />

            <div className="grid gap-4 grid-cols-12 col-span-12 mt-16">
                <VerticalImageCard img={data.verticalImageCard.image}
                                   imgOverlay={data.verticalImageCard.imgOverlay}
                                   perRow={2}
                                   cardTitle={data.verticalImageCard.cardTitle}
                                   description={data.verticalImageCard.description}
                                   button={data.verticalImageCard.button}
                />
                <VerticalImageCard img={data.verticalImageCard2.image}
                                   imgOverlay={data.verticalImageCard2.imgOverlay}
                                   perRow={2}
                                   cardTitle={data.verticalImageCard2.cardTitle}
                                   description={data.verticalImageCard2.description}
                                   button={data.verticalImageCard2.button}
                />
            </div>

        </section>

    );
};

export default Poc;
