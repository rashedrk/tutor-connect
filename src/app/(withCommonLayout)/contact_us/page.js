'use client'

import TCForm from "@/components/Forms/TCForm";
import TCInput from "@/components/Forms/TCInput";
import TCTextArea from "@/components/Forms/TCTextArea";
import { FaPhone, FaUserClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactUsPage = () => {
    const handleSubmit = (values) => {
        console.log(values);

    }
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-center items-start md:gap-20 gap-5 py-10 px-20 bg-[#F2F4F7]">
                <div className="md:w-2/3">
                    <h1 className="font-semibold text-2xl">Send a Message</h1>
                    <p className="text-sm text-gray-500">Your email address will not be published.</p>
                    <p className="text-sm text-gray-500 mb-10">Required fields are marked.</p>
                    <TCForm onsubmit={handleSubmit}>
                        <div className="flex gap-3 mb-3">
                            <TCInput name="name" label="Name*" placeholder="Enter your name" />
                            <TCInput type="email" name="email" label="Email*" placeholder="Enter your email" />
                        </div>
                        <TCInput name="subject" label="Subject" placeholder="Enter your Subject" className="mb-3" />
                        <TCTextArea className="h-40 mb-3" name="message" placeholder="Message" label="Write your message here" />
                        <button type="submit" className="primary-btn btn my-1">send</button>
                    </TCForm>
                </div>
                <div className="md:w-1/3">
                    <h1 className="font-semibold text-2xl">Contact Info</h1>
                    <p className="text-sm text-gray-500">Welcome to our Website.
                    </p>
                    <p className="text-sm text-gray-500 mb-12"> We are glad to have you around.</p>
                    <div className="flex justify-left items-center gap-4 shadow-md p-6 rounded bg-white mb-7">
                        <FaPhone className="text-3xl text-[#00A5A7]" />
                        <div>
                            <h5 className="font-semibold text-lg">Contact Details</h5>
                            <p className="text-sm text-gray-500">Phone: (+880)17264821</p>
                            <p className="text-sm text-gray-500">Mail: info@tutorconnect.com</p>
                        </div>
                    </div>
                    <div className="flex justify-left items-center gap-4 shadow-md p-6 rounded bg-white mb-7">
                        <FaMapLocationDot className="text-3xl text-[#00A5A7]" />
                        <div>
                            <h5 className="font-semibold text-lg">Location</h5>
                            <p className="text-sm text-gray-500">PO Box 97845 Baker st. 567</p>
                            <p className="text-sm text-gray-500">Mirpur, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex justify-left items-center gap-4 shadow-md p-6 rounded bg-white mb-7">
                        <FaUserClock className="text-3xl text-[#00A5A7]" />
                        <div>
                            <h5 className="font-semibold text-lg">Opening Hours</h5>
                            <p className="text-sm text-gray-500">Monday-Friday</p>
                            <p className="text-sm text-gray-500">10:30a.m-7:00p.m</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsPage;