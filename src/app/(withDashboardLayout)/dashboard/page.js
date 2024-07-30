import Image from 'next/image';
import dashboardBg from '@/assets/svg/dashboard.svg'

const DashboardHome = () => {
    return (
        <div className='flex justify-center items-center'>
            <Image src={dashboardBg} alt='Welcome to Dashboard' width={500} height={500} />
        </div>
    );
};

export default DashboardHome;