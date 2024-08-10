'use client'

import DataTable from "@/components/shared/DataTable/DataTable";
import { useDeleteTuitionMutation, useGetMyPostedTuitionsQuery } from "@/redux/features/tuition/tuitionApi";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";
import { RiEdit2Line } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import EditPostedTuitionModal from "@/components/Modals/EditPostedTuitionModal";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader/Loader";
import dayjs from "dayjs";
import { useState } from "react";
import { capitalize } from "lodash";
import { MdDeleteOutline } from "react-icons/md";


const PostedTuitions = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetMyPostedTuitionsQuery([
        { name: 'page', value: page },
    ]);
    const [deleteTuition] = useDeleteTuitionMutation()

    // console.log(data);

    const handleDelete = async (tuitionId) => {
        const toastId = toast.loading('please wait...');
        const res = await deleteTuition(tuitionId);
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId });
        } else {
            toast.error("something went wrong", { id: toastId });
        }
    }

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
            name: 'Medium',
            row: "medium",
        },
        {
            name: 'Contact No',
            row: "contactNo",
        },
        {
            name: 'Salary',
            row: "salary",
        },
        {
            name: 'Gender',
            row: "gender",
        },
        {
            name: 'Duration',
            row: (rowData) => `${dayjs(rowData?.schedule?.startTime).format("hh:mm A")} - ${dayjs(rowData?.schedule?.endTime).format("hh:mm A")}`,
        },
        {
            name: 'Days',
            row: (rowData) => rowData?.schedule?.days?.join(', ')
        },
        {
            name: 'Address',
            row: (rowData) => `${rowData?.address?.address}, ${rowData?.address?.area}, ${rowData?.address?.district}`
        },
        {
            name: 'Status',
            row: (rowData) => rowData.status === 'available' ?
                <div className="badge badge-info  text-white text-xs">{capitalize(rowData.status)}</div>
                :
                <div className="badge  badge-success text-white text-xs">{capitalize(rowData.status)}</div>
        },
        {
            name: 'Action',
            row: (rowData) => <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl z-[1] w-44 p-2 ">
                    {
                        rowData?.status === 'booked' ?
                            <>
                                <li><Link href={{ pathname: `/tutor/${rowData?.selected_tutor}`, query: { details: true } }}><FaRegEye /> Tutor Details</Link></li>
                            </> :
                            <>
                                <EditPostedTuitionModal postedTuition={rowData} />
                                <li onClick={() => handleDelete(rowData.tuition_id)}><a><MdDeleteOutline fontSize={"20px"} /> Delete</a></li>
                                <li>
                                    <Link href={`/dashboard/student/posted_tuitions/${rowData?.tuition_id}/applied`}><PiUserList fontSize={"20px"} /> Applied Tutors</Link>
                                </li>
                            </>
                    }
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
                        meta={data?.meta}
                        onPageChange={setPage}
                    />
            }
        </>
    );
};

export default PostedTuitions;