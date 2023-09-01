import ServicesHero from "../../../components/ServicesHero/ServicesHero";
import VerticalImageCard from "../../../components/VerticalImageCard";
import Divider from "../../../components/Divider/Divider";
import ContactCard from "../../../components/ContactCard";
const data = require('./data.json');
const Services = () => {
    return (
        <section className="mbp-container">

           <ServicesHero subtitle={data.servicesHero.subtitle}
                            title={data.servicesHero.title}
                            description={data.servicesHero.description}
                            img={data.servicesHero.img}
                            button={data.servicesHero.button}
            />

            <div className="grid grid-cols-12 col-span-12 mt-16">
                <p className="col-span-12 text-sm text-info font-secondary uppercase">våra erbjudanden</p>
                <h2 className="col-span-12 font-secondary text-4xl lg:text-6xl text-primary my-8">Vi har tre erbjudanden.  Mixa och välj själv vad som passar bäst eller följ dem som en process.</h2>
            </div>


            <div className="grid gap-4 grid-cols-12 col-span-12">
                <VerticalImageCard img={data.verticalImageCard.image}
                                   imgOverlay={data.verticalImageCard.imgOverlay}
                                   perRow={3}
                                   cardTitle={data.verticalImageCard.cardTitle}
                                   description={data.verticalImageCard.description}
                                   button={data.verticalImageCard.button}
                />
                <VerticalImageCard img={data.verticalImageCard2.image}
                                   imgOverlay={data.verticalImageCard2.imgOverlay}
                                   perRow={3}
                                   cardTitle={data.verticalImageCard2.cardTitle}
                                   description={data.verticalImageCard2.description}
                                   button={data.verticalImageCard2.button}
                />
                <VerticalImageCard img={data.verticalImageCard3.image}
                                   imgOverlay={data.verticalImageCard3.imgOverlay}
                                   perRow={3}
                                   cardTitle={data.verticalImageCard3.cardTitle}
                                   description={data.verticalImageCard3.description}
                                   button={data.verticalImageCard3.button}
                />
            </div>

            <Divider color="blue" />

            <ContactCard label={data.contactCard1.label}
                         cardTitle={data.contactCard1.cardTitle}
                         list={data.contactCard1.list}
                         subtitle={data.contactCard1.subtitle}
                         employee={data.contactCard1.employee}
                         button={data.contactCard1.button}
            />

        </section>

    );
};

export default Services;
