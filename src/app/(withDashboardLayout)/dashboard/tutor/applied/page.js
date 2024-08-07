'use client'
import DataTable from '@/components/shared/DataTable/DataTable';
import Loader from '@/components/shared/Loader/Loader';
import { useCancelAppliedTuitionMutation, useGetMyAppliedTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import dayjs from 'dayjs';
import { capitalize } from 'lodash';
import React, { useState } from 'react';
import { toast } from 'sonner';

const AppliedTuitionPage = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetMyAppliedTuitionsQuery([
        { name: 'page', value: page },
    ]);
    const [cancelApplication] = useCancelAppliedTuitionMutation()
    // console.log(data);

    const columns = [
        {
            name: 'Subject',
            row: "tuition.subject",
        },
        {
            name: 'Class',
            row: "tuition.class"
        },
        {
            name: 'Medium',
            row: "tuition.medium",
        },
        {
            name: 'Salary',
            row: "tuition.salary",
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
            name: 'Duration',
            row: (rowData) => `${dayjs(rowData?.tuition?.schedule?.startTime).format("hh:mm A")} - ${dayjs(rowData?.tuition?.schedule?.endTime).format("hh:mm A")}`,
        },

        {
            name: 'Days',
            row: (rowData) => rowData?.tuition?.schedule?.days?.join(', ')
        },
        {
            name: 'Address',
            row: (rowData) => `${rowData?.tuition?.address?.address}, ${rowData?.tuition?.address?.area}, ${rowData?.tuition?.address?.district}`
        },
        {
            name: 'Action',
            row: (rowData) => 
                    rowData?.status === 'accepted' || rowData?.status === 'cancelled' ?
                        <button disabled className='btn btn-xs text-xs'>Cancel</button> :
                        <button onClick={() => handleCancel(rowData?.applied_tuition_id)} className='btn btn-xs bg-red-500 text-white hover:bg-red-600 text-xs'>Cancel</button>
                
        },
    ];

    const handleCancel = async (tuitionId) => {
        const toastId = toast.loading('Cancelling...')
        const res = await cancelApplication(tuitionId);
        console.log(res);
        if (res?.data?.success) {
            toast.success('Application cancelled', { id: toastId });
        }
        else {
            toast.error('Application cancel request failed', { id: toastId });
        }
    }

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

export default AppliedTuitionPage;