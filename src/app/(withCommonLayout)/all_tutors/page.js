'use client'

import AllTutorCard from "@/components/AllTutors/AllTutorCard";
import TutorFilter from "@/components/AllTutors/TutorFilter";
import Loader from "@/components/shared/Loader/Loader";
import { useGetAllTutorsQuery } from "@/redux/features/users/userApi";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './pagination.css'
import { constructQueryParams } from "@/utils/constructQueryParams";
import { useSearchParams } from "next/navigation";
import { lowerCase } from "lodash";
import NoDataFound from "@/components/shared/NoDataFound/NoDataFound";

const AllTutorsPage = () => {
    const searchParams = useSearchParams()
    const [filter, setFilter] = useState({});
    const [page, setPage] = useState(1);
    const queryParams = constructQueryParams(filter);
    const defaultValues = {
        district: searchParams.get('district'),
        upozila: lowerCase(searchParams.get('upozila')),
        class: searchParams.get('class'),
        medium: searchParams.get('medium'),
        experties: searchParams.get('experties'),
        gender: searchParams.get('gender'),
    }
    const filterParams = constructQueryParams(defaultValues);
    const { data: tutors, isLoading } = useGetAllTutorsQuery([
        { name: 'page', value: page },
        ...(queryParams || []),
        ...(filterParams || [])
    ]);

    const meta = tutors?.meta;
    const totalPages = Math.ceil(meta?.total / meta?.limit);

    return (
        isLoading ? <Loader /> :
            <div className="bg-[#F2F4F7] relative">
                <div className="py-5 flex justify-center md:justify-end lg:mx-14 mx-5">
                    <div className="join ">
                        <input className="input input-bordered join-item lg:w-96 " placeholder="Search for tutor" />
                        <button className="btn primary-btn join-item "> <FaSearch /> Search </button>
                    </div>

                </div>
                <div className="drawer lg:drawer-open ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                    <div className="drawer-content flex flex-col items-center  justify-center mx-2 mb-3">
                        {/* Page content here */}
                        {
                            tutors?.data?.length > 0 ?
                            tutors?.data?.map(tutor => <AllTutorCard key={tutor.tutor_id} tutor={tutor} />)
                            :
                            <NoDataFound/>
                        }
                        <div className="self-start md:ms-10 mt-3">
                            <ResponsivePagination
                                current={meta?.page}
                                total={totalPages}
                                onPageChange={setPage}
                                maxWidth={20}
                            />
                        </div>

                        {/* button to open drawer  */}
                        <label htmlFor="my-drawer-2" className="btn primary-btn p-2 drawer-button lg:hidden top-1/2 -left-2 fixed">
                            <IoIosArrowForward className="text-2xl font-bold" />
                        </label>
                    </div>
                    {/* Drawer sidebar  */}
                    <div className="drawer-side  lg:ms-5">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu  text-base-content min-h-full w-80 p-4 bg-white">
                            {/* Sidebar content here */}
                            <TutorFilter setFilter={setFilter} defaultValues={defaultValues} />
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default AllTutorsPage;