'use client'

import { useGetCurrentTuitionsQuery } from "@/redux/features/tuition/tuitionApi";

const CurrentTuition = () => {
    const {data, isLoading} = useGetCurrentTuitionsQuery(undefined);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default CurrentTuition;