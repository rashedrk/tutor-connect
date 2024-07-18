'use client'

import DataTable from "@/components/shared/DataTable/DataTable";
import { useGetMyPostedTuitionsQuery } from "@/redux/features/tuition/tuitionApi";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";
import { RiEdit2Line } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";


const PostedTuitions = () => {
    const { data, isLoading } = useGetMyPostedTuitionsQuery(undefined);

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
            name: 'Status',
            row: "status",
        },
        {
            name: 'Action',
            row: (rowData) => <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent m-1"><SlOptionsVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-2xl z-[1] w-44 p-2 ">
                    <li><Link href={""}><RiEdit2Line fontSize={"20px"} /> Edit</Link></li>
                    <li><Link href={`/dashboard/posted_tuitions/${rowData.tuition_id}/applied`}><PiUserList fontSize={"20px"}/> Applied Tutors</Link></li>
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

export default PostedTuitions;