'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import './dashboardDrawer.css'
import { sidebarGenerator } from "@/utils/sidebarGenerator";
import { adminSidebarItems, studentSidebarItems, tutorSidebarItems } from "@/constant/sidebar.constant";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
const DashboardDrawer = ({ children }) => {
    const userInfo = useUserInfo()

    const pathname = usePathname();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F2F4F7] flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-white border-b w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>


                    <div className="flex justify-between items-center w-full">
                        <div>
                            Dashboard
                        </div>
                        {
                            userInfo?.role &&
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            alt="profile image"
                                            src={userInfo?.profileImage}
                                            width={50}
                                            height={50}
                                        />

                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link href="/dashboard">
                                            <MdOutlineDashboard /> Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a>
                                            <FaRegUserCircle /> Profile
                                        </a>
                                    </li>
                                    <li><a onClick={() => logoutUser(router)}><IoIosLogOut /> Logout</a></li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                {/* Page content here */}

                <div className="p-4 w-screen lg:w-full">
                    {children}
                </div>

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="md:flex justify-center   hidden border-e">
                    <Link href="/" className="btn btn-ghost hover:bg-transparent normal-case  font-[800] text-xl ">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
                </div>
                <ul className="menu bg-white min-h-full w-52 p-4 border-e">
                    <div className="flex justify-center mb-3 md:hidden border-b">
                        <Link href="/" className="btn btn-ghost hover:bg-transparent normal-case  font-[800] text-xl ">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
                    </div>
                    {/* Sidebar content here */}
                    {
                        userInfo.role === 'tutor' &&
                        sidebarGenerator(tutorSidebarItems, pathname)
                    }
                    {
                        userInfo.role === 'student' &&
                        sidebarGenerator(studentSidebarItems, pathname)
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashboardDrawer;