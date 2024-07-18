'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import { useGetAppliedTutorsQuery } from '@/redux/features/tuition/tuitionApi';
import { useParams } from 'next/navigation';
import { SlOptionsVertical } from 'react-icons/sl';
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link';

const AppliedTutors = () => {
    const {tuitionId} = useParams();

    const {data, isLoading} = useGetAppliedTutorsQuery({tuitionId});

    console.log(data);

    const columns = [
        {
            name: 'Name',
            row: "tutor.profile.name",
        },
        {
            name: 'Contact No',
            row: "tutor.profile.contactNo"
        },
        {
            name: 'Email',
            row: "tutor.profile.email",
        },
        {
            name: 'Experience',
            row: "tutor.yearOfExperience",
        },
        {
            name: 'Qualification',
            row: "tutor.tutorQualification[0].qualification.degree",
        },
        {
            name: 'Gender',
            row: "tutor.profile.gender",
        },
        {
            name: 'Rating',
            row: "tutor.rating",
        },
        {
            name: 'Action',
            row: (rowData) => <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
                <ul tabIndex={0} className="dropdown-content text-xs menu bg-base-100 rounded-box shadow-2xl z-[1] w-36 border p-2 ">
                    <li><Link href={`/tutor/${rowData.tutor.tutor_id}`}><FaRegEye /> See Details</Link></li>
                    <li><a>Status</a></li>
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

export default AppliedTutors;