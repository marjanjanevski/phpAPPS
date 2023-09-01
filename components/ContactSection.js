"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";
const ContactSection = ({title,subtitle,employees, employeList, contactPageList}) => {
    const pathname = usePathname()
    const configSwitch = () => {
        switch (pathname) {
            case "/kontakt":
                return {
                    visibility: "block",
                    titleVisibility: "hidden",
                    divVisibility: "block",
                    color:"text-white",
                    subtitleColor:"text-lemonyellow",
                    backgroundColor:"bg-gray",
                }
            default:
                return {
                    visibility: "hidden",
                    titleVisibility: "block",
                    divVisibility: "lg:block",
                    color: "",
                    subtitleColor:"text-info",
                    backgroundColor: "",
                    margin:"2xl:mr-60",
                }
        }
    }

    const isContactPage =  pathname === '/kontakt';

    const config = configSwitch();
    return (
        <div className={`grid grid-cols-12 col-span-12 mb-8 ${config.divVisibility} relative`}>

            <h2 className={`text-7xl lg:text-7.5xl font-secondary col-span-12  ${config.titleVisibility}`}>{title}</h2>

            <p className={`uppercase font-secondary text-sm ${config.subtitleColor} col-span-12 my-8 ${(isContactPage ? 'px-4 sm:px-20 md:px-0' : '' )}`}>{subtitle}</p>

            <div className={`grid grid-cols-12 col-span-12 mb-8 ${(isContactPage ? 'px-4 sm:px-20 md:px-0' : '' )}`}>
                {employees.map((employee, index) => (
                    <div key={employee.email} className={`col-span-12 mb-8 ${(index === 0) ? 'xl:col-span-3' : 'xl:col-span-4'}  ${(index !== 0 && index !== employees.length - 1) ? 'xl:ml-16' : ''}  ${(index === employees.length - 1) ? 'xl:ml-10' : ''}`}>
                        <h2 className={`text-4xl lg:text-6xl font-secondary  ${config.color}`}>{employee.name}</h2>
                        <p className={`${isContactPage ? 'text-info' : ''}`}>{employee.profession}</p>
                        <Link href={`tel:${employee.number}`} className={`wavey inline-block cursor-pointer text-2xl py-1 ${config.color}`}>{employee.number}</Link>
                        <br/>
                        <Link href={`mailto:${employee.email}`} className={`wavey inline-block cursor-pointer text-2xl py-1 ${config.color} `}>{employee.email}</Link>
                    </div>
                ))}
            </div>

            <div className={`${config.backgroundColor} w-0 absolute md:w-screen -z-50 bottom-0 md:-right-20 xl:right-36 h-[105%] md:h-[63%] lg:h-[60%] xl:h-[65%] lg:bottom-3 xl:-bottom-6 `}>
            </div>

            <div className={`grid grid-cols-12 col-span-12 lg:pb-10 xl:pb-0 ${(isContactPage ? 'bg-gray px-4 sm:px-20 md:px-0' : '' )} md:bg-transparent pb-8`}>

                <p className={`uppercase text-sm font-secondary ${config.subtitleColor} col-span-12 my-8`}>ALLA POLARE</p>

                <div className={`col-span-12 mb-8 xl:mb-0 xl:col-span-3 flex flex-col gap-8 ${config.visibility}`}>
                    {contactPageList.map((employee) => (
                        <div key={employee.email} className={`mb-5`}>
                            <p className={`text-4xl xl:text-6xl font-secondary ${config.color}`}>{employee.name}</p>
                            <p className={`${isContactPage ? 'text-info' : ''}`}>{employee.profession}</p>
                            <Link href={`tel:${employee.number}`} className={`wavey inline-block cursor-pointer text-2xl py-1 ${config.color}`}>{employee.number}</Link>
                            <Link href={`mailto:${employee.email}`} className={`wavey inline-block cursor-pointer text-2xl py-1 ${config.color} `}>{employee.email}</Link>
                        </div>
                    ))}
                </div>

                <div className={`col-span-12  ${(isContactPage ? 'xl:col-span-4 xl:ml-16' : 'sm:col-span-6 xl:col-span-3 xl:ml-0' )}`}>
                    {employeList.slice(0, 6).map((employee, index) => (
                        <div key={index} className={`text-3.5xl relative font-secondary group hover:text-turquoise duration-500 mb-4  ${config.color}`}>
                            <Link href={`mailto:${employee.email}`}>
                                {employee.name}
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="opacity-0 w-6 h-6 stroke-turquoise lg:group-hover:opacity-100 duration-500 absolute top-0 lg:right-40 xl:right-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                            </svg>
                        </div>
                    ))}
                </div>

                <div className={`col-span-12  xl:col-span-4 ${(isContactPage ? 'xl:ml-10' : 'sm:col-span-6 sm:ml-8 lg:ml-0 xl:ml-16' )}  `}>
                    {employeList.slice(6).map((employee, index) => (
                        <div key={index} className={`text-3.5xl relative font-secondary group hover:text-turquoise duration-500 mb-4 ${(isContactPage ? 'xl:mr-16' : '' )} ${config.color}`}>
                            <Link href={`mailto:${employee.email}`}>
                                {employee.name}
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="opacity-0 w-6 h-6 stroke-turquoise lg:group-hover:opacity-100 duration-500 absolute top-0 lg:right-40 xl:right-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                            </svg>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default ContactSection;
