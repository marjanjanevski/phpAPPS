import OffersHero from "../../../components/OffersHero/OffersHero";
import ProductCard from "../../../components/ProductCard";
import ProductSlider from "../../../components/ProductSlider";
import Divider from "../../../components/Divider/Divider";
import VerticalImageCard from "../../../components/VerticalImageCard";
import ContactCard from "../../../components/ContactCard";
const data = require('./data.json');

const Digitala = () => {
    return (
        <section className="mbp-container">
            <OffersHero subtitle={data.offersHero3.subtitle}
                        title={data.offersHero3.title}
                        description={data.offersHero3.description}
                        img={data.offersHero3.img}
                        imgOverlay={data.offersHero3.imgOverlay}
                        heroCta={data.offersHero3.heroCta}
                        button={data.offersHero3.button}
            />
            <ProductCard label={data.productCard.label}
                         cardTitle={data.productCard.cardTitle}
                         description={data.productCard.description}
                         list={data.productCard.list}
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

export default Digitala;
