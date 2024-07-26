import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineEventNote, MdPostAdd } from "react-icons/md";
import { BsCalendar4Week, BsCardChecklist, BsFileEarmarkMedical, BsMailbox } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";


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
        icon: <MdOutlineDashboard className="text-xl" />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <PiUsersThree className="text-xl"/>,
        label: 'Tuitions',
        path: '/dashboard/tutor/tuitions'
    },
    {
        icon: <BsCardChecklist className="text-lg" />,
        label: 'Applied Tuitions',
        path: '/dashboard/tutor/applied'
    },
    {
        icon:<BsCalendar4Week className="text-lg" />,
        label: 'Current Tuitions',
        path: '/dashboard/tutor/current_tuition'
    },
    {
        icon: <BsMailbox className="text-lg"  />,
        label: 'Requests',
        path: '/dashboard/tutor/requests'
    },
];

export const studentSidebarItems = [
    {
        icon: <MdOutlineDashboard className="text-xl" />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <IoIosAddCircleOutline  className="text-xl"/>,
        label: 'Create Tuition',
        path: '/dashboard/student/create_tuition'
    },
    {
        icon:  <MdOutlineEventNote  className="text-xl"/>,
        label: 'Posted Tuition',
        path: '/dashboard/student/posted_tuitions'
    },
    {
        icon: <BsCalendar4Week className="text-lg" />,
        label: 'Current Tuition',
        path: '/dashboard/student/current_tuition'
    },
    {
        icon: <BsFileEarmarkMedical className="text-lg" />,
        label: 'Requested Tuition',
        path: '/dashboard/student/requested'
    },
]