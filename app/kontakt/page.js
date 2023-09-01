"use client";
import {useEffect} from 'react';
import ContactSection from "../../components/ContactSection";
import Divider from "../../components/Divider/Divider";
const data = require('../../public/data.json');

const Contact = () => {

    useEffect(() => {
        document.body.classList.remove('bg-lightgray');
        document.body.classList.add('bg-darkgray');
        return () => {
            document.body.classList.remove('bg-darkgray');
            document.body.classList.add('bg-lightgray');
        }
    }, [])

    return (
        <section>
            <div className={`mbp-container grid grid-cols-12`}>
                <div className="col-span-12 md:col-span-6 md:col-start-3 lg:col-start-2 md:ml-4 pb-10 pt-36 font-secondary">
                    <p className="text-sm uppercase text-info">visualisera din lösning</p>
                    <h2 className="text-7xl lg:text-9xl text-white my-8">Vill du prata digital tjänsteutveckling?</h2>
                    <p className="text-xl lg:text-2xl text-white">Hör av dig oavsett om du har en hel digital företagsidé eller vill utveckla en ny digital tjänst inom ditt område eller optimera där du står. Eller bara vill prata.</p>
                </div>
                <Divider color={"white"} />
            </div>
            <div className="contact-container grid grid-cols-12">
                <div className="col-span-12 md:col-start-3 lg:col-start-2 md:ml-4">
                    <ContactSection
                        title={data.contactSection.title}
                        subtitle={data.contactSection.subtitle}
                        employees={data.contactSection.employees}
                        employeList={data.contactSection.employeList}
                        contactPageList={data.contactSection.contactPageList}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;