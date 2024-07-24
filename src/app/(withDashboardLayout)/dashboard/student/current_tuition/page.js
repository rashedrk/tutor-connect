'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import Loader from '@/components/shared/Loader/Loader';
import { useGetCurrentTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import dayjs from 'dayjs';
import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';

const StudentCurrentTuitionPage = () => {
    const { data, isLoading } = useGetCurrentTuitionsQuery(undefined);
    console.log(data);

    const columns = [
        {
            name: 'Subject',
            row: "subject",
        },
        {
            name: 'Class',
            row: "class"
        },
        {
            name: 'Tutor Name',
            row: (rowData) => rowData?.selectedTutor?.profile?.name || rowData?.tutor?.profile?.name,
        },
        {
            name: 'Contact No',
            row: (rowData) => rowData?.selectedTutor?.profile?.contactNo || rowData?.tutor?.profile?.contactNo,
        },
        {
            name: 'Email',
            row: (rowData) => rowData?.selectedTutor?.profile?.email || rowData?.tutor?.profile?.email,
        },
        {
            name: 'Duration',
            row: (rowData) => `${dayjs(rowData?.schedule?.startTime).format("hh:mm A")} - ${dayjs(rowData?.schedule?.endTime).format("hh:mm A")}`,
        },
        {
            name: 'Days',
            row: (rowData) => rowData?.schedule?.days?.join(', ')
        },
        // {
        //     name: 'Action',
        //     row: (rowData) => <div className="dropdown dropdown-end">
        //         <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
        //         <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl z-[1] w-44 p-2 ">
        //             {
        //                 // rowData.status === 'booked' ?
        //                 //     <>
        //                 //     <li><Link href={`/tutor/${rowData.selected_tutor}`}><FaRegEye /> Tutor Details</Link></li>
        //                 //     </> :
        //                 //     <>
        //                 //         <li><Link href={""}><RiEdit2Line fontSize={"20px"} /> Edit</Link></li>
        //                 //         <li><Link href={`/dashboard/student/posted_tuitions/${rowData.tuition_id}/applied`}><PiUserList fontSize={"20px"} /> Applied Tutors</Link></li>
        //                 //     </>
        //             }
        //         </ul>
        //     </div>
        // },
    ];

    return (
        <>
            {
                isLoading ? <Loader /> :
                    <DataTable
                        columns={columns}
                        data={data}
                    />
            }
        </>
    );
};

export default StudentCurrentTuitionPage;