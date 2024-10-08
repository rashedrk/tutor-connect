"use client"

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import './navbar.css'
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    const userInfo = useUserInfo();
    const router = useRouter();


    const navItems = <>
        <li className={pathname == "/" ? "font-semibold text-[#00A5A7] underline" : ""}>
            <Link href="/">Home</Link>
        </li>
        <li className={pathname == "/all_tutors" ? "font-semibold text-[#00A5A7] underline" : ""}>
            <Link href='/all_tutors'>Tutors</Link>
        </li>
        {
            !userInfo && <li>
                <Link href='/register/tutor'>Become a Tutor</Link>
            </li>
        }
        <li className={pathname == "/about_us" ? "font-semibold text-[#00A5A7] underline" : ""}>
            <Link href='/about_us'>About Us</Link>
        </li>
        <li className={pathname == "/contact_us" ? "font-semibold text-[#00A5A7] underline" : ""}>
            <Link href='/contact_us'>Contact</Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    userInfo?.role ?


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
                                        <MdOutlineDashboard /> Dashboard
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

                        :
                        <Link href={"/sign_in"} className="primary-btn btn btn-sm h-10">sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;