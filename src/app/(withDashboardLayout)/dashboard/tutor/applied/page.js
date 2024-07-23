'use client'
import DataTable from '@/components/shared/DataTable/DataTable';
import { useCancelAppliedTuitionMutation, useGetMyAppliedTuitionsQuery } from '@/redux/features/tuition/tuitionApi';
import React from 'react';
import { toast } from 'sonner';

const AppliedTuitionPage = () => {
    const { data, isLoading } = useGetMyAppliedTuitionsQuery(undefined);
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
            row: "status",
        },
        {
            name: 'Duration',
            row: (rowData) => `${rowData?.tuition?.schedule?.startTime} - ${rowData?.tuition?.schedule?.endTime}`,
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
            row: (rowData) => rowData?.status === 'cancelled' ?
                <button disabled className='btn btn-xs primary-btn text-xs'>Cancelled</button>
                :
                (
                    rowData?.status === 'accepted' ?
                    <button disabled className='btn btn-xs text-xs'>Cancel</button>:
                    <button onClick={() => handleCancel(rowData?.tuition_id)} className='btn btn-xs bg-red-500 text-white hover:bg-red-600 text-xs'>Cancel</button>
                )
        },
    ];

    const handleCancel =async (tuitionId) => {
        toast.loading('Cancelling...')
        const res = await cancelApplication(tuitionId);
        console.log(res);
        if (res.data.success) {
            toast.success('Application cancelled');
        }
        else{
            toast.error('Application cancel request failed');
        }
    }

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

export default AppliedTuitionPage;