import VerticalLabel from "./VerticalLabel";
const ProductCard = ({ label, cardTitle, description, list }) => {

    let blockBackground = "bg-white";
    let textColor = "text-primary";

    if(list) {
        blockBackground = (list.color === "blue") ? "bg-primary" : "bg-white";
        textColor = (list.color === "blue") ? "text-white" : "text-primary";
    }
    return (
        <div className="grid col-span-12 grid-cols-12 gap-2 my-16 lg:mt-0">

            <div className="col-span-12 lg:col-span-7 lg:col-start-1 grid grid-cols-12">
                <VerticalLabel label={label}/>

                <div className="col-start-2 xl:ml-16 col-span-11">
                    <h3 className="text-2xl md:text-5xl lg:text-6xl text-primary font-secondary lg:tracking-075">{cardTitle}</h3>

                    {description && <p className="pt-4 xl:pt-8 text-primary md:text-lg lg:text-2xl">
                        {description}
                    </p>}

                </div>
            </div>
            { list && <div className={`grid grid-cols-12 col-span-12 lg:col-span-5 lg:col-start-8 mt-4 xl:mt-0`}>
                <div className="col-span-11 col-start-2">

                    <div className={`p-4 md:p-8 2xl:p-16 rounded-lg ${blockBackground}`}>
                        <p className={`font-secondary text-sm tracking-widest font-bold uppercase ${textColor}`}>
                            {list.title}
                        </p>

                        <ul className={`p-2 md:text-lg lg:text-2xl ${textColor}`}>
                            {list.items.map((item, i) => {
                                    return (
                                        <li key={i} className="ml-5 pb-1 list-disc">
                                            {item}
                                        </li>
                                    )

                                }
                            )}
                        </ul>
                    </div>
                </div>

            </div> }


        </div>
    );
};
export default ProductCard;
