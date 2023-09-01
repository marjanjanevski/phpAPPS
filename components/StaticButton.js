import Link from 'next/link'
const StaticButton = ({config}) => {

    const buttonColor = () => {
        switch (config.color) {
            case "green":
                return "bg-turquoise text-primary group-hover:text-info group-hover:bg-primary duration-200";
            case "pink":
                return "bg-punchpink text-white group-hover:text-primary group-hover:bg-lemonyellow duration-200";
            case "blue":
                return "bg-cobaltblue text-white group-hover:text-white group-hover:bg-punchpink duration-200";
            case "primary":
                return "bg-primary text-white group-hover:text-primary group-hover:bg-turquoise duration-200";
            case "yellow":
                return "bg-lemonyellow text-primary group-hover:bg-turquoise duration-200";
            default:
                return "text-cobaltblue border-cobaltblue border-2 hover:text-primary hover:border-primary duration-200";
        }
    }

    const buttonStyle = buttonColor();

    return (
        <Link href={config.link || '#'}
              className={`${buttonStyle} mt-auto w-fit inline-block cursor-pointer font-secondary text-sm tracking-2 uppercase p-4 rounded-lg`}>
            {config.label}
        </Link>
    );
}
export default StaticButton;
