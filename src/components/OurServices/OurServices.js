import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "../ServiceCard/ServiceCard";

import img1 from "@/assets/img1.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.svg";
import img6 from "@/assets/img6.png";
import img7 from "@/assets/img7.jpg";

const OurServices = () => {
    const services = [
        { id: 1, image: img1, title: "Online Tutoring", description: "Discover the convenience of online tutoring. Our platform connects you with verified tutors who are passionate about helping you succeed." },
        { id: 2, image: img7, title: "Group Tutoring", description: "Experience collaborative learning at its best with our group tutoring services. Join dynamic study sessions led by expert tutors..." },
        { id: 3, image: img3, title: "Personalized Tutoring", description: "Connect with experienced tutors who tailor their teaching methods to your individual learning style." },
        { id: 4, image: img4, title: "Secure Platform", description: "Your safety is our priority. Our platform employs robust security measures to ensure a safe learning environment for both students.." },
        { id: 5, image: img5, title: "Verified Tutors", description: "We take the guesswork out of finding the right tutor. All tutors go through a thorough verification, ensuring their qualifications." },
        { id: 6, image: img6, title: "Home Tutoring", description: "Our expert tutors bring education directly to your doorstep, providing personalized learning that fits your schedule and needs. " },
    ]
    return (
        <div className=" bg-white pb-10">
            <div className="mx-auto max-w-5xl">
            <SectionTitle
                titleFirst="What"
                titleLast="We offer"
            />
            <div className="grid gap-y-14 gap-x-6 justify-center md:grid-cols-3">
                {
                    services.map(service => <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    ></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default OurServices;