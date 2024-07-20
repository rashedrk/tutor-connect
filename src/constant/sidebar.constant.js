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
];

export const tutorSidebarItems = [
    {
        icon: <MdOutlineDashboard className="text-lg" />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: "",
        label: 'Tuitions',
        path: '/dashboard/tutor/tuitions'
    },
    {
        icon: "",
        label: 'Applied Tuitions',
        path: '/dashboard/tutor/applied'
    },
    {
        icon: "",
        label: 'Current Tuitions',
        path: '/dashboard/tutor/current_tuition'
    },
    {
        icon: "",
        label: 'Requested Students',
        path: '/dashboard/tutor/requests'
    },
];

export const studentSidebarItems = [
    {
        icon: <MdOutlineDashboard className="text-lg" />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: "",
        label: 'Create Tuition',
        path: '/dashboard/student/create_tuition'
    },
    {
        icon: "",
        label: 'Posted Tuition',
        path: '/dashboard/student/posted_tuitions'
    },
    {
        icon: "",
        label: 'Current Tuition',
        path: '/dashboard/student/current_tuition'
    },
    {
        icon: "",
        label: 'Requested Tuition',
        path: '/dashboard/student/requested'
    },
]