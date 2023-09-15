const ProductSlide = ({title, description, bgColor, textColor}) => {

    return (

            <div className={`bg-${bgColor} flex flex-col justify-center text-left p-8 mb-4`}>
                <span className={"bg-pinkprimary"}></span>
                <h2 className={`font-secondary text-${textColor} text-3xl mt-8 mb-[50px]`}>{title}</h2>
                <hr className="w-8 h-[2px] bg-white mb-4"></hr>
                <p className={`text-${textColor} text-3xl h-[350px]`}>{description}</p>
            </div>
    );
}

export default ProductSlide;
