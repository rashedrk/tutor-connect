'use client'

import DataTable from "@/components/shared/DataTable/DataTable";
import Loader from "@/components/shared/Loader/Loader";
import { useChangeStudentRequestStatusMutation, useGetAllRequestedStudentsQuery } from "@/redux/features/tuition/tuitionApi";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { toast } from "sonner";

const StudentRequests = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetAllRequestedStudentsQuery([
        { name: 'page', value: page },
    ]);
    const [changeStatus] = useChangeStudentRequestStatusMutation()
    // console.log(data);

    const handleStatusChange = async (tuitionRequestId, status) => {
        const toastId = toast.loading('please wait...');
        const data = {
            tuitionRequestId,
            status
        }
        const res = await changeStatus(data);

        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        } else {
            toast.error("something went wrong", { id: toastId })
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
            name: 'Student Name',
            row: "student.name",
        },
        {
            name: 'Contact No',
            row: "student.contactNo",
        },
        {
            name: 'Email',
            row: "student.email",
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
            name: 'Salary',
            row: "salary",
        },
        {
            name: 'Status',
            row: (rowData) => rowData.status === 'accepted' ?
                <div className="badge badge-success text-white text-xs">{capitalize(rowData.status)}</div>
                :
                (
                    rowData.status === 'pending' ? <div className="badge badge-warning text-white text-xs">{capitalize(rowData.status)}</div>
                        :
                        <div className="badge badge-error text-white text-xs">{capitalize(rowData.status)}</div>
                )
        },
        {
            name: 'Action',
            row: (rowData) => rowData.status === 'pending' ?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl z-[1] w-44 p-2 ">

                        <li onClick={() => handleStatusChange(rowData.tuition_request_id, 'accepted')}><a><IoMdCheckmarkCircleOutline fontSize={"15px"} /> Accept</a></li>
                        <li onClick={() => handleStatusChange(rowData.tuition_request_id, 'rejected')}><a><ImCancelCircle fontSize={"15px"}/> Reject</a></li>

                    </ul>
                </div> :
                <div className="btn bg-transparent cursor-default hover:bg-transparent m-1 text-gray-400"><SlOptionsVertical /></div>
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

export default StudentRequests;