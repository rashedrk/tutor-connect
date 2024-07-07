'use client'
import { Fade } from "react-awesome-reveal";
import "./vision-mission.css"
const VisionMission = () => {
    return (
        <div className="vision-mission bg-fixed h-100">
            <div className="hero-overlay bg-opacity-70 drop-shadow-md text-white text-center">
                <h2 className="text-center font-bold text-4xl uppercase pt-32">Our Vision & Mission</h2>
                <p className="pb-10 pt-4">Explore our mission and vision below to learn how we are transforming <br />learning journeys</p>

                {/* vision and mission cards */}
                <div className="grid md:grid-cols-2 mb-52 text-black gap-10 justify-center relative top-28  mx-4">
                    <Fade triggerOnce direction="left">
                        <div className="card w-100 md:h-96 p-5 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="bg-teal-600 text-white card-title p-3 rounded-md w-32">Our Vision</h2>
                                <p className="text-justify pt-3">To be a catalyst for academic empowerment, where every students unique potential is recognized and nurtured. We envision a future where learning knows no bounds, and students are equipped with the tools to excel in their studies and embrace lifelong curiosity. Through personalized guidance and innovative teaching, we aspire to redefine education and inspire a generation of confident, lifelong learners.</p>

                            </div>
                        </div>
                    </Fade>
                    <Fade triggerOnce direction="right">
                        <div className="card w-100 md:h-96 p-5 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-white p-3 rounded-md bg-[#004E7C] w-36">Our Mission</h2>
                                <p className="text-justify pt-3">To revolutionize education by providing personalized learning experiences that empower students to excel academically and embrace lifelong curiosity. Through innovative teaching and a supportive community, we aim to equip learners with the skills, knowledge, we are dedicated to inspiring lifelong learners who thrive with confidence in a changing world.</p>

                            </div>
                        </div>
                    </Fade>
                </div>


            </div>
        </div>
    );
};

export default VisionMission;