'use client'

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const TrialClass = () => {
    return (
        <div className="hero  bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <Fade direction="up">
                    <Image
                        src="https://i.ibb.co/PZ0NQzq/students-doing-exam-preparation-illustration-concept-on-white-background-vector-1.jpg"
                        alt=""
                        width={1500}
                        height={1500}
                        className="md:max-w-2xl"
                    />
                </Fade>
                <Fade direction="right">
                    <div>
                        <h1 className="text-5xl font-bold text-[#004E7C]">Request A Class</h1>
                        <h2 className="mt-4 text-5xl font-semibold">For FREE Trail</h2>
                        <p className="py-6">Experience the power of personalized learning with our free trial class. Choose your preferred subject, select a convenient time slot, and let our dedicated tutors guide you through a one-on-one session tailored to your learning goals.</p>
                        <button className="btn primary-btn">search tutor</button>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default TrialClass;