import img1 from '@/assets/about1.jpg'
import Image from 'next/image';
const AboutUsPage = () => {
    return (
        <div className=''>
            <div className="hero bg-base-200  md:px-20">
                <div className="hero-content flex-col lg:flex-row gap-5">
                <Image src={img1} alt='' height={500} width={500} className='rounded' />
                    <div>
                    <h2 className="text-2xl font-bold uppercase">Who <span className="text-[#004E7C]">We Are</span></h2>
                        <p className="py-6 text-gray-500">
                        At Tutor Connect, we are dedicated to bridging the gap between students and educators, creating a platform where knowledge meets opportunity. Our mission is to connect learners with qualified tutors who can guide them through their educational journey with expertise and passion. We envision a future where every student, regardless of their location or background, has the opportunity to receive high-quality, tailored education. By fostering connections between students and educators, we aim to create a world where learning is a collaborative journey, and every student can reach their full potential.
                        </p>
                        
                    </div>
                </div>
            </div>
            
            <div></div>
        </div>
    );
};

export default AboutUsPage;