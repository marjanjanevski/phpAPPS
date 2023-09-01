import VerticalLabel  from "./VerticalLabel";
import AnimatedButton from "./AnimatedButton";
import Link           from "next/link";
const ContactCard = ({ label, cardTitle, list, subtitle, employee, button }) => {

    return (
        <div className="grid col-span-12 grid-cols-12 gap-2">

            <div className="col-span-12 lg:col-span-7 grid grid-cols-12">
                <VerticalLabel label={label}/>

                <div className="col-start-2 xl:ml-16 col-span-10">
                    <h3 className="text-4xl lg:text-5xl text-primary font-secondary lg:tracking-075">{cardTitle}</h3>

                    <ul className="pt-10 md:text-lg lg:text-2xl text-primary">
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

            <div className="col-span-8 col-start-2 lg:col-span-4 lg:col-start-9 mt-8 xl:mt-0 rounded-lg">
                <p className="text-info text-sm tracking-2 uppercase font-secondary font-bold">{subtitle}</p>
                <h2 className="font-secondary text-4xl lg:text-5xl lg:tracking-075 xl:text-6xl mt-4">{employee.name}</h2>

                <div className="md:text-2xl">
                    <p className="mt-2">{employee.title}</p>
                    <Link href={`tel:${employee.contactPhone}`} className="wavey cursor-pointer inline-block">{employee.contactPhone}</Link>
                    <br/>
                    <Link href={`mailto:${employee.contactEmail}`} className="wavey cursor-pointer inline-block">{employee.contactEmail}</Link>
                </div>

                <div className="mt-10">
                    <AnimatedButton config={button}/>
                </div>
            </div>


        </div>
    );
};
export default ContactCard;
