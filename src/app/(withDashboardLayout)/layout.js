'use client'

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    
    if (!isLoggedIn()) {
        return router.push('/sign_in');
    }

    return (
        <>
            <DashboardDrawer>{children}</DashboardDrawer>
        </>
    );
};

export default DashboardLayout;