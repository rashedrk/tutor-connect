// import { Fade } from "react-awesome-reveal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import TutorCard from "@/components/TutorCard/TutorCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";




const FeaturedTutors = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/tutor`, { cache: "no-store" });
    const tutors = await res.json();



    return (
        <div className="bg-[#E8E8E8]">
            <SectionTitle
                titleFirst="Featured"
                titleLast="Tutors"
            />
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl justify-center pb-10 mx-auto">
                {/* <Fade triggerOnce direction="left" cascade duration={600} damping={0.2}> */}
                {
                    tutors?.data?.slice(0, 6).map(tutor => <TutorCard
                        key={tutor?.tutor_id}
                        tutor={tutor}
                    >

                    </TutorCard>)
                }
                {/* </Fade> */}
            </div>
            <div className="text-center pb-5">
                <Link href="/all_tutors" className="secondary-btn btn">See All Tutors <FaArrowRight /></Link>
            </div>
        </div>
    );
};

export default FeaturedTutors;