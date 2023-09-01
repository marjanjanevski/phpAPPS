const MissionCard = ({ label, cardTitle, description }) => {

    return (
        <div className="grid col-span-12 grid-cols-12 px-2 md:px-0 gap-2">

            <div className="col-span-12 lg:col-span-9 2xl:col-span-7 lg:col-start-1">
                    <h2 className="mb-2 text-5xl xl:text-6xl text-primary font-secondary tracking-075">{cardTitle}</h2>

                    <p className="text-primary text-xl xl:text-2xl">
                        {description}
                    </p>
            </div>

        </div>
    );
};
export default MissionCard;
