import Link from 'next/link'
const AnimatedButton = ({config}) => {

    const whiteTextColorArray = ['pink', 'blue', 'primary'];
    const bgColorSwitch = () => {
        switch (config.color) {
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
        <Link href={config.link}
              className={`text-sm font-secondary uppercase text-sm tracking-2 group relative py-1 px-3 ${(whiteTextColorArray.includes(config.color)) ? 'hover:text-white' : 'text-primary'}`}>
            {config.label}
            <span className={`absolute -z-10 left-0 top-n1 w-6 h-6 rounded-full ${bgColor}
                                group-hover:duration-300 group-hover:w-full group-hover:h-full group-hover:transition-height-width `}/>
        </Link>
    );
}
export default AnimatedButton;