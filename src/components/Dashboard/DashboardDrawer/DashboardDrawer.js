'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import './dashboardDrawer.css'
import { sidebarGenerator } from "@/utils/sidebarGenerator";
import { studentSidebarItems, tutorSidebarItems } from "@/constant/sidebar.constant";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from "@/services/actions/logoutUser";
import dayjs from "dayjs";
import { capitalize } from "lodash";
const DashboardDrawer = ({ children }) => {
    const userInfo = useUserInfo()
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F2F4F7] flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-white border-b w-full px-4">
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
                        <div >
                            <h4 className=" font-semibold text-[#004E7C]">Welcome to TutorConnet Dashboard!</h4> 
                            <p className="text-xs text-gray-600">{dayjs().format('dddd, MMMM D, YYYY')}</p>
                        </div>
                        {
                            userInfo?.role &&
                            <div className="flex gap-3 items-center ">
                                <button className="btn btn-ghost btn-circle me-5">
                                    <div className="indicator ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="badge badge-xs bg-[#004E7C]  indicator-item"></span>
                                    </div>
                                </button>
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
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                                        <li>
                                            <Link href="/">
                                                <IoHomeOutline /> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/profile">
                                                <FaRegUserCircle /> Profile
                                            </Link>
                                        </li>
                                        <li><a onClick={() => logoutUser(router)}><IoIosLogOut /> Logout</a></li>
                                    </ul>


                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">{capitalize(userInfo?.username)}</h4>
                                    <p className="text-xs">{capitalize(userInfo?.role)}</p>
                                </div>
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
                    <Link href="/" className="btn btn-ghost hover:bg-transparent normal-case  font-[800] text-xl text-[#004E7C] ">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
                </div>
                <ul className="menu bg-white min-h-full w-56 p-4 border-e">
                    <div className="flex justify-center mb-3 md:hidden border-b">
                        <Link href="/" className="btn btn-ghost hover:bg-transparent normal-case  font-[800] text-xl text-[#004E7C]">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
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