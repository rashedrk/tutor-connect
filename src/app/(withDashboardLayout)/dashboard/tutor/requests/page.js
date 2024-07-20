'use client'

import DataTable from "@/components/shared/DataTable/DataTable";
import { useChangeStudentRequestStatusMutation, useGetAllRequestedStudentsQuery } from "@/redux/features/tuition/tuitionApi";
import { SlOptionsVertical } from "react-icons/sl";
import { toast } from "sonner";

const StudentRequests = () => {
    const { data, isLoading } = useGetAllRequestedStudentsQuery(undefined);
    const [changeStatus] = useChangeStudentRequestStatusMutation()
    console.log(data);

    const handleStatusChange = async(tuitionRequestId, status) => {
        const toastId = toast.loading('please wait...');
        const data = {
            tuitionRequestId,
            status
        }
        const res = await changeStatus(data);

        if (res.data.success) {
            toast.success(res.data.message, {id: toastId})
        } else {
            toast.error("something went wrong", {id: toastId})
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
            row: (rowData) => `${rowData.schedule.startTime} - ${rowData.schedule.endTime}`,
        },
        {
            name: 'Days',
            row: (rowData) => rowData.schedule.days.join(', ')
        },
        {
            name: 'Address',
            row: (rowData) => `${rowData.address.address}, ${rowData.address.area}, ${rowData.address.district}`
        },
        {
            name: 'Salary',
            row: "salary",
        },
        {
            name: 'Status',
            row: "status",
        },
        {
            name: 'Action',
            row: (rowData) => <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl z-[1] w-44 p-2 ">

                    <li onClick={() => handleStatusChange(rowData.tuition_request_id, 'accepted')}><a>Accept</a></li>
                    <li onClick={() => handleStatusChange(rowData.tuition_request_id, 'rejected')}><a>Reject</a></li>

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

export default StudentRequests;