import CasesHero from "../../../components/CasesHero/CasesHero";
import Divider from "../../../components/Divider/Divider";
import IntroductionCard from "../../../components/IntroductionCard";
import ParagraphCard from "../../../components/ParagraphCard";
import VerticalImageCard from "../../../components/VerticalImageCard";
import ContactCard from "../../../components/ContactCard";
import HugeSlider from "../../../components/HugeSlider/HugeSlider";
const data = require('./data.json');

const Cases = () => {
    return (
        <section className="mbp-container">
            <CasesHero subtitle={data.casesHero.subtitle}
                       title={data.casesHero.title}
                       description={data.casesHero.description}
                       img={data.casesHero.img}
                       imgOverlay={data.casesHero.imgOverlay}
                       heroCta={data.casesHero.heroCta}
                       button={data.casesHero.button}
                       highlights={data.casesHero.highlights}
            />

            <IntroductionCard label={data.introductionCard.label}
                              subtitle={data.introductionCard.subtitle}
                              cardTitle={data.introductionCard.cardTitle}
                              description={data.introductionCard.description}
                              quoteTitle={data.introductionCard.quoteTitle}
                              subDescription={data.introductionCard.subDescription}
            />

            <ParagraphCard label={data.paragraphCard.label}
                           quote={data.paragraphCard.quote}
                           cardTitle={data.paragraphCard.cardTitle}
                           description={data.paragraphCard.description}
                           subDescription={data.paragraphCard.subDescription}
            />

            <HugeSlider images={data.hugeSlider.images} />

            <ParagraphCard label={data.paragraphCard2.label}
                           quote={data.paragraphCard2.quote}
                           cardTitle={data.paragraphCard2.cardTitle}
                           description={data.paragraphCard2.description}
                           subDescription={data.paragraphCard2.subDescription}
                           followedByDivider={data.paragraphCard2.followedByDivider}
            />

            <Divider color="black"/>

            <ContactCard label={data.contactCard.label}
                         cardTitle={data.contactCard.cardTitle}
                         list={data.contactCard.list}
                         subtitle={data.contactCard.subtitle}
                         employee={data.contactCard.employee}
                         button={data.contactCard.button}
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

export default Cases;
