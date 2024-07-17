'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import './dashboardDrawer.css'
import { sidebarGenerator } from "@/utils/sidebarGenerator";
import { adminSidebarItems } from "@/constant/sidebar.constant";
const DashboardDrawer = ({ children }) => {

    const pathname = usePathname();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F2F4F7] flex flex-col">
                {/* Navbar */}
                {/* <div className="navbar bg-base-300 w-full"> */}
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
                    {/* </div> */}
                </div>
                {/* Page content here */}

                {children}

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="md:flex justify-center pb-3 border-b hidden">
                    <Link href="/" className="btn btn-ghost hover:bg-transparent normal-case  font-[800] text-xl ">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
                </div>
                <ul className="menu bg-white min-h-full w-52 p-4">
                    <div className="flex justify-center mb-3 md:hidden border-b">
                        <Link href="/" className="btn btn-ghost hover:bg-transparent normal-case  font-[800] text-xl ">Tutor<span className="text-[#00A5A7]">Connect</span></Link>
                    </div>
                    {/* Sidebar content here */}
                    {
                        sidebarGenerator(adminSidebarItems, pathname)
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashboardDrawer;