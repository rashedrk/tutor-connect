'use client'
import TutorDashboard from '@/components/Dashboard/TutorDashboard/TutorDashboard';
import Loader from '@/components/shared/Loader/Loader';
import { useGetDashboardOverviewQuery } from '@/redux/features/dashboard/dashboardApi';

const DashboardHome = () => {
    const { data, isLoading, error } = useGetDashboardOverviewQuery(undefined);
    
    // Handle loading state
    if (isLoading) return <Loader />;
    
    // Handle error or missing data state
    if (error || !data) return <div>Error loading dashboard data</div>;
    
    return <TutorDashboard data={data?.data || {}} />;
};

export default DashboardHome;