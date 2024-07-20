'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import { useGetCurrentTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';

const StudentCurrentTuitionPage = () => {
    const {data, isLoading} = useGetCurrentTuitionsQuery(undefined);
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
            row: "selectedTutor.profile.name",
        },
        {
            name: 'Contact No',
            row: "selectedTutor.profile.contactNo",
        },
        {
            name: 'Email',
            row: "selectedTutor.profile.email",
        },
        {
            name: 'Duration',
            row: (rowData) => `${rowData.schedule.startTime} - ${rowData.schedule.endTime}`,
        },
        {
            name: 'Days',
            row: (rowData) => rowData.schedule.days.join(', ')
        },
        {
            name: 'Action',
            row: (rowData) => <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl z-[1] w-44 p-2 ">
                    {
                        // rowData.status === 'booked' ?
                        //     <>
                        //     <li><Link href={`/tutor/${rowData.selected_tutor}`}><FaRegEye /> Tutor Details</Link></li>
                        //     </> :
                        //     <>
                        //         <li><Link href={""}><RiEdit2Line fontSize={"20px"} /> Edit</Link></li>
                        //         <li><Link href={`/dashboard/student/posted_tuitions/${rowData.tuition_id}/applied`}><PiUserList fontSize={"20px"} /> Applied Tutors</Link></li>
                        //     </>
                    }
                </ul>
            </div>
        },
    ];

    return (
        <>
            {
                isLoading ? "Loading,,," :
                    <DataTable
                        columns={columns}
                        data={data}
                    />
            }
        </>
    );
};

export default StudentCurrentTuitionPage;