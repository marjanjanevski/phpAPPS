import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const NewProject = ({ title }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [branch, setBranch] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                'service_iivxmsd',
                'template_vdrx0ij',
                e.target,
                'TfzmArvlaWzOx5CBt'
            );

            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email');
        }
    };

    return (
        <div className="bg-[#E6E6E6] py-8 lg:py-16">
            <div className="mbp-container grid grid-cols-12 items-center">

                    <form className={`col-span-12 lg:col-span-6 lg:col-start-7 lg:ml-16 flex flex-col gap-8 flex flex-col gap-8`} onSubmit={handleSubmit}>
                        <h2 className="text-pinkprimary font-tertiary lg:text-[36px] md:text-3xl text-[20px]">{title}</h2>
                        <div className={`flex-col flex lg:flex-row gap-4`}>
                            <label className="text-3xl text-[#252525] font-tertiary">Name</label>
                            <input className={`border-b-2 border-[#252525] text-pinkprimary bg-transparent grow placeholder-pinkprimary focus:outline-none focus:border-b-pinkprimary`} type="text" name="name" placeholder="Please enter your name:" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={`flex-col flex lg:flex-row gap-4`}>
                            <label className="text-3xl text-[#252525] font-tertiary">Email</label>
                            <input className={`border-b-2 border-[#252525] text-pinkprimary bg-transparent grow placeholder-pinkprimary focus:outline-none focus:border-b-pinkprimary`} type="email" name="email" placeholder="Please enter your email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={`flex-col flex lg:flex-row gap-4`}>
                            <label className="text-3xl text-[#252525] font-tertiary">Phone Number</label>
                            <input className={`border-b-2 border-[#252525] text-pinkprimary bg-transparent grow placeholder-pinkprimary focus:outline-none focus:border-b-pinkprimary`} type="number" name="phoneNumber" placeholder="Please enter your phone number:" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className={`flex-col flex lg:flex-row gap-4`}>
                            <label className="text-3xl text-[#252525] font-tertiary">Company Name</label>
                            <input className={`border-b-2 border-[#252525] text-pinkprimary bg-transparent grow placeholder-pinkprimary focus:outline-none focus:border-b-pinkprimary`} type="text" name="companyName" placeholder="Please enter your company name:" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            <input className={`border-b-2 border-[#252525] text-pinkprimary bg-transparent grow placeholder-pinkprimary focus:outline-none focus:border-b-pinkprimary`} type="text" name="branch" placeholder="Branch:" value={branch} onChange={(e) => setBranch(e.target.value)} />
                        </div>
                        <div className={`flex-col flex lg:flex-row gap-4`}>
                            <label className="text-3xl text-[#252525] font-tertiary">Message</label>
                            <textarea className={`border-b-2 border-[#252525] text-pinkprimary bg-transparent grow placeholder-pinkprimary focus:outline-none focus:border-b-pinkprimary`} name="message" placeholder="Write something to us:" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button className="border-2 border-pinkprimary px-10 py-4 rounded-full text-base lg:text-3xl text-primary w-full md:max-w-max hover:bg-pinkprimary hover:text-white self-end" type="submit">
                            Submit
                        </button>
                    </form>
            </div>
        </div>
    );
};

export default NewProject;
