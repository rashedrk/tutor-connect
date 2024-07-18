//This is the page where students can see the list of tutors and status they requested for
'use client'
import DataTable from "@/components/shared/DataTable/DataTable";
import { useCancelTuitionRequestMutation, useGetMyTuitionRequestQuery } from "@/redux/features/tuition/tuitionApi";
import Link from "next/link";
import { RiEdit2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

const Requested = () => {
    const { data, isLoading } = useGetMyTuitionRequestQuery(undefined);
    const [cancelRequest] = useCancelTuitionRequestMutation()
    console.log(data);


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
            name: 'Address',
            row: "address.address",
        },
        {
            name: 'Area',
            row: "address.area",
        },
        {
            name: 'District',
            row: "address.district",
        },
        {
            name: 'Status',
            row: "status",
        },
        {
            name: 'Action',
            row: (rowData) => <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent "><SlOptionsVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl text-xs border z-[1] w-32 ">
                    <li><a><RiEdit2Line fontSize={"20px"} />Edit</a></li>
                    <li onClick={() => cancelRequest(rowData.tuition_request_id)}><a>Cancel</a></li>

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

export default Requested;