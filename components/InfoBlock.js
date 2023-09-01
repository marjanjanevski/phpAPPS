const InfoBlock = ({ title, subtitle, description, showButton, buttonText }) => {
    return (
        <div className="lg:mt-8 mt-4 lg:mb-16 mb-8 flex flex-col lg:gap-6 gap-4 mbp-container">
            <div className="flex flex-col gap-4">
                <h3 className="lg:text-[36px] md:text-3xl text-[20px] leading-[120%] text-pinkprimary font-secondary">{subtitle}</h3>
                <h2 className="lg:text-[57px] md:text-[40px] text-[32px] leading-[120%] text-primary font-secondary">{title}</h2>
            </div>
            <p className="lg:text-3xl md:text-[18px] text-[16px] leading-[120%] text-primary">{description}</p>
            {showButton && <button className="border-2 border-pinkprimary px-10 py-4 rounded-full text-base lg:text-3xl text-primary w-full md:max-w-max hover:bg-pinkprimary hover:text-white"> {buttonText || 'Click me'} </button>}
        </div>
    );
};

export default InfoBlock;