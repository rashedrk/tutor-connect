'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import { useApplyToTuitionMutation, useGetAllTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { toast } from 'sonner';

const TuitionsPage = () => {

    //TODO: make time only 

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
            name: 'Action',
            row: (rowData) => rowData.isApplied ?
                <button disabled className='btn btn-xs primary-btn text-xs'>Applied</button>
                :
                (
                    rowData.status === 'booked' ?
                    <button disabled className='btn btn-xs primary-btn text-xs'>booked</button>
                    :
                    <button onClick={() => handleRequest(rowData.tuition_id)} className='btn btn-xs primary-btn text-xs'>Request</button>
                )
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