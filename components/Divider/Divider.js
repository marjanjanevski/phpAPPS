import './divider.css';
const Divider = ({color, className = ''}) => {

    const dividerColor = () => {
        switch (color) {
            case "green":
                return "divider-green";
            case "pink":
                return "divider-pink";
            case "blue":
                return "divider-blue";
            case "primary":
                return "divider-primary";
            case "white":
                return "divider-white";
            default:
                return "divider-primary";
        }
    }

    const divider = dividerColor();

    return (
        <div className={`col-span-12 py-16 divider ${divider} ${className}`}></div>
    );
}
export default Divider;
