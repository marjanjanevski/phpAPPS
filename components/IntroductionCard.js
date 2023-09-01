import VerticalLabel from "./VerticalLabel";

const IntroductionCard = ({ label, subtitle, cardTitle, smallTitle, description, quoteTitle, subDescription }) => {

    return (
        <div className="grid col-span-12 grid-cols-12 gap-2 mb-16">

            <div className="col-span-12 lg:col-span-10 lg:col-start-1 grid grid-cols-12 mb-8 xl:mb-16">

                <div className="col-start-2 lg:-ml-4 xl:ml-8 col-span-10">

                    <h4 className="font-secondary text-sm tracking-2 font-bold uppercase text-primary">{subtitle}</h4>

                    { cardTitle && <h2 className={`mt-4 xl:mt-8" text-7xl xl:text-9xl text-primary font-secondary lg:tracking-n1`}>{cardTitle}</h2>}

                    { smallTitle && <p className={`font-secondary text-primary text-6xl mb-4 xl:-mb-12`}>{smallTitle}</p>}

                </div>
            </div>

            <div className="col-span-12 lg:col-span-10 lg:col-start-1 grid grid-cols-12">

                <VerticalLabel label={label}/>

                <div className="col-start-2 lg:-ml-4 xl:ml-8 col-span-10">

                    <p className="text-primary font-secondary font-medium text-xl lg:text-3xl pb-16">
                        {description}
                    </p>

                    { quoteTitle && <p className={`font-secondary text-primary text-4xl lg:text-6xl ${quoteTitle ? "pb-8" : ""}`}>{quoteTitle}</p>}

                    {subDescription && <p className="text-primary text-base md:text-lg lg:text-2xl">
                        {subDescription}
                    </p>}

                </div>
            </div>

        </div>
    );
};
export default IntroductionCard;