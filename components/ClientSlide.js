const ClientSlide = ({title, subtitle, description, clientName ,companyName, clientPosition, companyLocation}) => {

    return (
        <div className={`flex flex-col gap-4 justify-center text-left p-0 lg:py-8 mb-4`}>
            <h3 className={`lg:text-[36px] md:text-3xl text-[20px] text-pinkprimary font-secondary`}>{subtitle}</h3>
            <h2 className={`font-secondary text-primary lg:text-[57px] md:text-[40px] text-[32px] leading-[120%]`}>{title}</h2>
            <p className={`text-primary text-3xl`}>{description}</p>
            <p className={`text-3xl text-pinkprimary font-secondary mt-4 lg:mt-8`}>{clientName} | {clientPosition}, {companyName} - {companyLocation}</p>
        </div>
    );
}

export default ClientSlide;