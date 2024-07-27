
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: ['tuition', 'applied_tutors', 'tuition_request', 'all_tuition', 'applied_tuitions', 'requested_students', 'current_tuition'],
    baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL }),
    endpoints: () => ({}),
});