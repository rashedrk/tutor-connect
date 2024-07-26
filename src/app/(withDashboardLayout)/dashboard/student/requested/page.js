//This is the page where students can see the list of tutors and status they requested for
'use client'
import EditTuitionRequestModal from "@/components/Modals/EditTuitionRequestModal";
import DataTable from "@/components/shared/DataTable/DataTable";
import Loader from "@/components/shared/Loader/Loader";
import { useCancelTuitionRequestMutation, useGetMyTuitionRequestQuery } from "@/redux/features/tuition/tuitionApi";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import Link from "next/link";
import { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

const Requested = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetMyTuitionRequestQuery([
        { name: 'page', value: page },
    ]);
    const [cancelRequest] = useCancelTuitionRequestMutation()
    // console.log(data);


    const columns = [
        {
            name: 'Tutor Name',
            row: "tutor.profile.name",
        },
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
            row: (rowData) => rowData?.status === 'pending' ?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent "><SlOptionsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl text-xs border z-[1] w-32 ">
                        <EditTuitionRequestModal tuitionRequest={rowData}/>
                        <li onClick={() => cancelRequest(rowData?.tuition_request_id)}><a>Cancel</a></li>

                    </ul>
                </div>
                :
                <div className="btn bg-transparent cursor-default hover:bg-transparent m-1 text-gray-400"><SlOptionsVertical /></div>
        },
    ];

    return (
        <>
            {
                isLoading ? <Loader/> :
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

export default Requested;