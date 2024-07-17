import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export const adminSidebarItems = [
    {
        icon: <MdOutlineDashboard className="text-lg" />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <FaChalkboardTeacher className="text-lg" />,
        label: 'Manage Tutors',
        path: '/manage_tutors'
    },
]