'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import { useApplyToTuitionMutation, useGetAllTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { toast } from 'sonner';

const TuitionsPage = () => {

    const { data, isLoading } = useGetAllTuitionsQuery(undefined);
    const [applyToTuition] = useApplyToTuitionMutation()

    // console.log(data);

    const handleRequest = async (tuitionId) => {
        const toastId = toast.loading("Application in process...")
        const res = await applyToTuition(tuitionId);
        // console.log(res);
        if (res?.data?.success) {
            toast.success("Applied Successfully", { id: toastId })
        }
        else {
            toast.error("Application failed", { id: toastId });
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
            name: 'Salary',
            row: "salary",
        },
        {
            name: 'Status',
            row: "status",
        },
        {
            name: 'Gender',
            row: "gender",
        },
        {
            name: 'Start Time',
            row: "schedule.startTime",
        },
        {
            name: 'End Time',
            row: "schedule.endTime",
        },
        {
            name: 'Days',
            row: "schedule.days",
        },
        {
            name: 'Action',
            row: (rowData) => <button onClick={() => handleRequest(rowData.tuition_id)} className='btn btn-xs primary-btn text-xs'>Request</button>
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

export default TuitionsPage;