'use client'

import DataTable from '@/components/shared/DataTable/DataTable';
import Loader from '@/components/shared/Loader/Loader';
import { useApplyToTuitionMutation, useGetAllTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { toast } from 'sonner';

const TuitionsPage = () => {

    const [page, setPage] = useState(1);

    const { data, isLoading } = useGetAllTuitionsQuery([
        { name: 'page', value: page },
    ]);
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
            name: 'Action',
            row: (rowData) => rowData?.isApplied ?
                <button disabled className='btn btn-xs primary-btn text-xs'>Applied</button>
                :
                (
                    rowData?.status === 'booked' ?
                    <button disabled className='btn btn-xs primary-btn text-xs'>booked</button>
                    :
                    <button onClick={() => handleRequest(rowData?.tuition_id)} className='btn btn-xs primary-btn text-xs'>Request</button>
                )
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

export default TuitionsPage;