'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import { useGetAppliedTutorsQuery, useSelectTutorMutation } from '@/redux/features/tuition/tuitionApi';
import { useParams, useRouter } from 'next/navigation';
import { SlOptionsVertical } from 'react-icons/sl';
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link';
import { toast } from 'sonner';
import Loader from '@/components/shared/Loader/Loader';
import { FaCheck } from 'react-icons/fa6';

const AppliedTutors = () => {
    const { tuitionId } = useParams();
    const router = useRouter();

    const { data, isLoading } = useGetAppliedTutorsQuery({ tuitionId });
    const [selectTutor] = useSelectTutorMutation();

    // console.log(data);

    const handleSelectTutor = async (appliedTuitionId) => {
        const toastId = toast.loading("Please wait...")
        const res = await selectTutor(appliedTuitionId);
        // console.log(res);
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId });
            router.push('/dashboard/student/posted_tuitions')
        } else {
            toast.error('something went wrong', { id: toastId })
        }
    }

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
                    <li><Link href={{ pathname: `/tutor/${rowData?.tutor.tutor_id}`, query: { details: true } }} ><FaRegEye /> See Details</Link></li>
                    <li onClick={() => handleSelectTutor(rowData?.applied_tuition_id)}><a><FaCheck />Select</a></li>
                </ul>
            </div>
        },
    ];

    return (
        <>
            {
                isLoading ? <Loader /> :
                    <DataTable
                        columns={columns}
                        data={data.data}
                    />
            }
        </>
    );
};

export default AppliedTutors;