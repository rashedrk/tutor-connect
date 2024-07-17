import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";

const DashboardLayout = ({children}) => {
    return (
        <>
            <DashboardDrawer>{children}</DashboardDrawer>
        </>
    );
};

export default DashboardLayout;