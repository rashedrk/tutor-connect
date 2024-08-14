'use client'

import dynamic from 'next/dynamic';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';

const MapComponent = dynamic(() => import("../MapComponent/MapComponent"), {
    loading: () => <span className="loading loading-spinner loading-xs"></span>,
    ssr: false
})

const OurNetwork = () => {
    return (
        <>
            <SectionTitle
                titleFirst="Our"
                titleLast="Network"
            />
            <div className='flex flex-col md:flex-row  gap-10 px-5 md:px-28 justify-between mb-5' >
                <div className='md:w-1/2 text-justify flex flex-col items-start justify-center'>
                    <Fade triggerOnce direction='right'>
                        <h2 className='font-semibold text-3xl'>Over <span className='text-[#004E7C]'>50,000</span> people are connected</h2>
                        <p className='py-6'>At Tutor Connect, we are dedicated to making a difference throughout our great nation. Explore how our services touch lives in every corner of Bangladesh. Our commitment to empowering individuals and communities nationwide shines through in every connection we make. Dive into the map below to see how we are transforming education and fostering growth right here at home.</p>
                        <Link href="/about_us" className="btn primary-btn">Read More</Link>
                    </Fade>
                </div>

                <MapComponent />


            </div >
        </>
    );
};

export default OurNetwork;
