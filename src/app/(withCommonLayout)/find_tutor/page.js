'use client'
import SearchTutor from '@/components/SearchTutor/SearchTutor';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import TutorCard from '@/components/TutorCard/TutorCard';
import { constructQueryParams } from '@/utils/constructQueryParams';
import { useEffect, useRef, useState } from 'react';

const FindTutorPage = () => {
    const [filter, setFilter] = useState(null);
    const [tutors, setTutors] = useState([]);
    const tutorSectionRef = useRef(null);

    useEffect(() => {
        if (filter !== null) {
            const queryParams = constructQueryParams(filter);
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/tutor?${queryParams}`)
                .then(res => res.json())
                .then(data => {
                    setTutors(data.data)
                    if (tutorSectionRef.current) {
                        tutorSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                })
                .catch(err => console.error(err));
        }
    }, [filter]);

    return (
        <>
            <SearchTutor setFilter={setFilter} />
            <div ref={tutorSectionRef} >
                {
                    tutors.length > 0 &&
                    <>
                        <SectionTitle titleFirst="Available" titleLast="Tutors" />
                        <div className="grid md:grid-cols-3 gap-10 max-w-6xl justify-center pb-10 mx-auto">
                            {
                                tutors.map(tutor => <TutorCard tutor={tutor} key={tutor.tutor_id} />)
                            }
                        </div>
                    </>

                }
            </div>
        </>
    );
};

export default FindTutorPage;