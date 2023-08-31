'use client'

import { Fade } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle/SectionTitle";
import TutorCard from "../TutorCard/TutorCard";


const FeaturedTutors = () => {

    const tutors = [
        {
            id: 1,
            name: "Sadia Rahman",
            description: "Dedicated math tutor with a focus on building strong foundations in mathematics.",
            price: 40,
            image: "https://i.ibb.co/MkJgrwZ/pexels-andrea-piacquadio-789822.jpg",
            expertise: ["Mathematics", "Algebra", "Geometry"],
            rating: 4.8
        },
        {
            id: 2,
            name: "Rahat Ahmed",
            description: "Experienced physics tutor specializing in advanced concepts and exam preparation.",
            price: 45,
            image: "https://i.ibb.co/rf29bzb/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
            expertise: ["Physics", "Mechanics", "Thermodynamics"],
            rating: 4.9
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            description: "Passionate language tutor helping students improve conversational skills and fluency.",
            price: 35,
            image: "https://i.ibb.co/3ht8tF4/pexels-max-fischer-5212320.jpg",
            expertise: ["Language", "Bengali", "English"],
            rating: 4.7
        },
        {
            id: 4,
            name: "Tareq Rahman",
            description: "Experienced biology tutor with a focus on simplifying complex concepts for students.",
            price: 50,
            image: "https://i.ibb.co/DrRG5Xm/warren-VVEw-JJRRHgk-unsplash.jpg",
            expertise: ["Biology", "Genetics", "Ecology"],
            rating: 4.6
        },
        {
            id: 5,
            name: "Ayesha Khan",
            description: "Enthusiastic history tutor offering engaging lessons to connect students with the past.",
            price: 38,
            image: "https://i.ibb.co/zXKx01f/edward-cisneros-H6wpor9mjs-unsplash.jpg",
            expertise: ["History", "World History", "Ancient Civilizations"],
            rating: 4.9
        },
        {
            id: 6,
            name: "Zubair Hassan",
            description: "Passionate coding instructor guiding students through hands-on programming projects.",
            price: 55,
            image: "https://i.ibb.co/JF2PJq1/foto-sushi-6anudmp-ILw4-unsplash.jpg",
            expertise: ["Programming", "Python", "Web Development"],
            rating: 4.7
        },
        {
            id: 7,
            name: "Fariha Ahmed",
            description: "Experienced music tutor offering personalized lessons in various instruments.",
            price: 42,
            image: "https://i.ibb.co/s35gLfY/pexels-daniel-xavier-1239291.jpg",
            expertise: ["Music", "Piano", "Guitar"],
            rating: 4.8
        },
        {
            id: 8,
            name: "Imran Hossain",
            description: "Passionate literature tutor with a deep appreciation for literary analysis.",
            price: 37,
            image: "https://i.ibb.co/TWNYzQd/counselor-4305394-1280.jpg",
            expertise: ["Literature", "Bangla Literature", "Classic Novels"],
            rating: 4.6
        },
        {
            id: 9,
            name: "Sakina Ali",
            description: "Experienced art tutor helping students unleash their creativity and improve technique.",
            price: 40,
            image: "https://i.ibb.co/C1ngdZb/pexels-andrea-piacquadio-3761508.jpg",
            expertise: ["Art", "Drawing", "Painting"],
            rating: 4.9
        }
    ]


    return (
        <div className="bg-[#E8E8E8]">
            <SectionTitle
                titleFirst="Featured"
                titleLast="Tutors"
            />
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl justify-center pb-10 mx-auto">
                <Fade direction="left" cascade duration={600} damping={0.2}>
                    {
                        tutors.map(tutor => <TutorCard
                            key={tutor.id}
                            tutor={tutor}
                        >

                        </TutorCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default FeaturedTutors;