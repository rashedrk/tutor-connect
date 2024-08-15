import Image from 'next/image';
import dashboardBg from '@/assets/svg/dashboard.svg'
import TutorDashboard from '@/components/Dashboard/TutorDashboard/TutorDashboard';

const DashboardHome = () => {
    return (
        <div className='flex justify-center items-center'>
           <TutorDashboard/>
            {/* <Image src={dashboardBg} alt='Welcome to Dashboard' width={500} height={500} /> */}
        </div>
    );
};

export default DashboardHome;