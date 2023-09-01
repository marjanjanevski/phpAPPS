import VerticalLabel from "./VerticalLabel";
const ParagraphCard = ({ label, cardTitle, description, subDescription, quote, followedByDivider }) => {

    return (
        <div className={`grid col-span-12 grid-cols-12 gap-2 ${followedByDivider === 'true' ? '' : 'mb-16'} `}>

            <div className="col-span-12 xl:col-span-10 grid grid-cols-12">
                <VerticalLabel label={label}/>

                <div className="col-start-2 lg:-ml-8 xl:ml-8 col-span-10 ">

                    {quote && <p className="text-4xl md:text-5xl lg:text-6xl font-secondary text-primary lg:tracking-075">{quote}</p>}

                    <h3 className="text-3xl md:text-4xl text-primary font-secondary lg:tracking-075">{cardTitle}</h3>

                    {description && (<p className="my-4 text-primary text-base md:text-lg lg:text-2xl lg:leading-normal"
                        dangerouslySetInnerHTML={{ __html: description }} >
                    </p>)}

                    {subDescription && (
                        <p
                        className="text-primary text-base md:text-lg lg:text-2xl lg:leading-normal"
                        dangerouslySetInnerHTML={{ __html: subDescription }}>                            
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
};
export default ParagraphCard;