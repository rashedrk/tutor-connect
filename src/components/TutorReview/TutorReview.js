'use client'

import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './tutorReview.css'
const TutorReview = () => {

    const reviews = [
        {
            name: "Abir Hasan",
            rating: 4.5,
            img: "https://randomuser.me/api/portraits/men/11.jpg",
            description: "Great tutor! Helped me understand complex concepts with ease. Highly recommend."
        },
        {
            name: "Tania Rahman",
            rating: 5,
            img: "https://randomuser.me/api/portraits/women/12.jpg",
            description: "Absolutely amazing experience. The tutor was very knowledgeable and patient."
        },
        {
            name: "Mizanur Rahman",
            rating: 4,
            img: "https://randomuser.me/api/portraits/men/13.jpg",
            description: "Good tutor, but sometimes hard to schedule. Overall, I learned a lot."
        },
        {
            name: "Farhana Islam",
            rating: 4.8,
            img: "https://randomuser.me/api/portraits/women/14.jpg",
            description: "Exceptional tutoring experience! I saw a significant improvement in my grades."
        },
        {
            name: "Rafiqul Alam",
            rating: 3.5,
            img: "https://randomuser.me/api/portraits/men/15.jpg",
            description: "The tutor was helpful, but the pace was a bit fast for me."
        },
        {
            name: "Sharmin Akter",
            rating: 4.9,
            img: "https://randomuser.me/api/portraits/women/16.jpg",
            description: "The best tutor I’ve ever had. Very clear explanations and supportive."
        },
        {
            name: "Jahangir Hossain",
            rating: 4.2,
            img: "https://randomuser.me/api/portraits/men/17.jpg",
            description: "Good experience, but I would have liked more practice exercises."
        },
        {
            name: "Nusrat Jahan",
            rating: 5,
            img: "https://randomuser.me/api/portraits/women/18.jpg",
            description: "Fantastic tutor! I felt very confident during my exams thanks to her."
        },
        {
            name: "Anwar Hossain",
            rating: 3.8,
            img: "https://randomuser.me/api/portraits/men/19.jpg",
            description: "Overall good, but there were some communication issues."
        },
        {
            name: "Ruma Begum",
            rating: 4.7,
            img: "https://randomuser.me/api/portraits/women/20.jpg",
            description: "Wonderful experience! The tutor was very engaging and knowledgeable."
        }
    ];




    return (
        <div className="mx-10">
            <h6 className="uppercase text-xs font-semibold text-gray-400 mb-3">Student Reviews</h6>

            <Swiper
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[FreeMode, Pagination, Autoplay]}
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 4,

                    },
                }}
                autoplay={{
                    delay: 2400,
                    disableOnInteraction: false,
                }}
                className="mySwiper justify-center"
            >


                {
                    reviews.map(review => <SwiperSlide
                        key={review.name}
                    >
                        <ReviewCard review={review} />
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default TutorReview;