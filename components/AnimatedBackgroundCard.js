import Link from 'next/link'
import Image from 'next/image'
const AnimatedBackgroundCard = ({ cardTitle, description, color, link, digit }) => {

    const whiteTextColorArray = ['pink', 'blue', 'primary'];
    const bgColorSwitch = () => {
        switch (color) {
            case "green":
                return "bg-turquoise"
            case "pink":
                return "bg-punchpink"
            case "blue":
                return "bg-cobaltblue"
            case "primary":
                return "bg-primary"
            case "yellow":
                return "bg-lemonyellow"
            default:
                return "bg-primary"
        }
    }

    const bgColor = bgColorSwitch();

    return (
        <div className="grid-cols-12 grid col-span-12 lg:col-span-6 gap-2">

            <div className="hidden lg:flex col-span-1 flex items-end font-secondary text-info text-sm pb-4">
                {digit}
            </div>

            <Link href={link} className="col-span-12 lg:col-span-11 rounded-lg p-8 group relative flex flex-col">
                <div className={`text-sm font-secondary mb-4 lg:hidden ${(whiteTextColorArray.includes(color)) ? 'text-white' : 'text-primary'} lg:text-info`}>{digit}</div>
                <h3 className={`text-3.5xl lg:text-6xl font-secondary lg:tracking-075  ${(whiteTextColorArray.includes(color)) ? 'text-white lg:group-hover:text-white lg:transition-all duration-200 ease-in-out' : 'text-primary'} lg:text-primary`}>
                    {cardTitle}
                </h3>
                <span className={`absolute -z-10 left-0 top-0 w-full h-full lg:w-3 lg:h-3 ${bgColor} lg:rounded-full`}/>
                <span className={`absolute -z-10 left-0 top-0 w-0 h-0 ${bgColor} lg:group-hover`}/>

                <p className={`pt-2 pb-4 md:text-lg lg:text-2xl lg:text-primary ${(whiteTextColorArray.includes(color)) ? 'text-white lg:group-hover:text-white lg:transition-all ease-in duration-200' : 'text-primary'}`}>
                    {description}
                </p>

                <div className={`inline-block font-secondary ${(digit === '02') ? '' : 'text-white group-hover:text-white'} group text-xs tracking-2 uppercase mt-auto lg:text-primary`}>
                    LÄS MER
                </div>
            </Link>

        </div>
    );
};
export default AnimatedBackgroundCard;
