// import { Fade } from "react-awesome-reveal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import TutorCard from "@/components/TutorCard/TutorCard";




const Tutors = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/tutor`, { cache: "no-store" });
    const tutors = await res.json();



    return (
        <div className="bg-[#E8E8E8]">
            <SectionTitle
                titleFirst="Available"
                titleLast="Tutors"
            />
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl justify-center pb-10 mx-auto">
                {
                    tutors?.data?.map(tutor => <TutorCard
                        key={tutor?.tutor_id}
                        tutor={tutor}
                    >

                    </TutorCard>)
                }
            </div>
        </div>
    );
};

export default Tutors;