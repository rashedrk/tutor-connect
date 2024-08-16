'use client'
import TutorDashboard from '@/components/Dashboard/TutorDashboard/TutorDashboard';
import Loader from '@/components/shared/Loader/Loader';
import { useGetDashboardOverviewQuery } from '@/redux/features/dashboard/dashboardApi';

const DashboardHome = () => {
    const { data, isLoading } = useGetDashboardOverviewQuery(undefined);
    
    
    return (
        isLoading ? <Loader /> :
            <TutorDashboard data = {data?.data} />

    );
};

export default DashboardHome;