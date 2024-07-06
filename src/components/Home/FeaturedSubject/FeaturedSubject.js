'use client'

import { Fade } from "react-awesome-reveal";
import Image from "next/image";


import ai from "@/assets/subjects/ai.png";
import art from "@/assets/subjects/art.png";
import biology from "@/assets/subjects/biology.png";
import english from "@/assets/subjects/english.png";
import history from "@/assets/subjects/history.png";
import math from "@/assets/subjects/math.png";
import physics from "@/assets/subjects/physics.png";
import programming from "@/assets/subjects/programming.png";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const FeaturedSubject = () => {
    return (
        <div>
            <SectionTitle
                titleFirst="Featured"
                titleLast="Subjects"
            />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 justify-center mb-20 mx-5 md:mx-10">
                    {/* put fade component inside the parent div so that it gets all inside div as child and able to cascade */}
                    <Fade direction="left" cascade duration={600}>
                        <div className="flex flex-col  justify-center items-center">
                            <Image
                                src={biology}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">Biology</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={art}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">Art & Drawing</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={history}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">History</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={english}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">English</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={math}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">Mathematics</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={ai}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">Artificial Intelligence</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={programming}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">Programming</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={physics}
                                alt=""
                                width={150}
                                height={150}
                            />
                            <h2 className="pt-2 text-center text-2xl">Physics</h2>
                        </div>
                    </Fade>
                </div>
        </div>
    );
};

export default FeaturedSubject;