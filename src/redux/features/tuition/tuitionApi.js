import { baseApi } from "@/redux/api/baseApi";

const tuitionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        //student roles api
        createTuition: builder.mutation({
            query: (data) => {
                return {
                    url: '/tuition/create',
                    method: 'POST',
                    data
                }
            },
        }),
        getMyPostedTuitions: builder.query({
            query: () => {
                return {
                    url: '/tuition/posted',
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
            providesTags: ['tuition']
        }),
        getAppliedTutors: builder.query({
            query: ({ tuitionId }) => {
                return {
                    url: `/tuition/${tuitionId}/applied`,
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
            providesTags: ['applied_tutors']
        }),
        requestTutor: builder.mutation({
            query: (args) => {
                console.log("from redux", args);
                return {
                    url: `/tuition/request/${args.tutorId}`,
                    method: 'POST',
                    data: args.data
                }
            },
        }),
        //get the tuitions / tutors list that student requested for tuition
        getMyTuitionRequest: builder.query({
            query: () => {
                return {
                    url: `/tuition/requested`,
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
            providesTags: ['tuition_request']
        }),
        cancelTuitionRequest: builder.mutation({
            query: (tuitionRequestId) => {
                return {
                    url: `/tuition/cancel/${tuitionRequestId}`,
                    method: 'PUT',
                }
            },
            invalidatesTags: ['tuition_request', 'applied_tutors']
        }),
        selectTutor: builder.mutation({
            query: (appliedTuitionId) => {
                return {
                    url: `/tuition/select/${appliedTuitionId}`,
                    method: 'POST',
                }
            },
            invalidatesTags: ['tuition_request']
        }),
        updateRequestToTutor: builder.mutation({
            query: (data) => {
                return {
                    url: `/tuition/request/update/${data.tuitionRequestId}`,
                    method: 'PUT',
                    data: data.data
                }
            },
            invalidatesTags: ['tuition_request']
        }),
        updateTuition: builder.mutation({
            query: (data) => {
                return {
                    url: `/tuition/update/${data.tuitionId}`,
                    method: 'PUT',
                    data: data.data
                }
            },
            invalidatesTags: ['tuition']
        }),
        deleteTuition: builder.mutation({
            query: (tuitionId) => {
                return {
                    url: `/tuition/${tuitionId}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['tuition']
        }),




        getCurrentTuitions: builder.query({
            query: () => {
                return {
                    url: `/tuition/current`,
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
        }),

        //tutor roles api
        getAllTuitions: builder.query({
            query: () => {
                return {
                    url: `/tuition`,
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
            providesTags: ['all_tuition']
        }),
        applyToTuition: builder.mutation({
            query: (tuitionId) => {
                return {
                    url: `/tuition//apply/${tuitionId}`,
                    method: 'POST',
                }
            },
            invalidatesTags: ['all_tuition', 'tuition', 'applied_tuitions']
        }),
        getMyAppliedTuitions: builder.query({
            query: () => {
                return {
                    url: `/tuition/applied`,
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
            providesTags: ['applied_tuitions']
        }),
        cancelAppliedTuition: builder.mutation({
            query: (appliedTuitionId) => {
                return {
                    url: `/application/cancel/${appliedTuitionId}`,
                    method: 'PUT',
                }
            },
            invalidatesTags: ['applied_tuitions']
        }),
        getAllRequestedStudents: builder.query({
            query: () => {
                return {
                    url: `/tuition/request`,
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data;
            },
            providesTags: ['requested_students']
        }),
        changeStudentRequestStatus: builder.mutation({
            query: (data) => {
                return {
                    url: `/tuition/request/${data.tuitionRequestId}`,
                    method: 'PUT',
                    data: {
                        status: data.status
                    }
                }
            },
            invalidatesTags: ['requested_students']
        }),
    })

});

export const {
    useCreateTuitionMutation,
    useRequestTutorMutation,
    useGetMyPostedTuitionsQuery,
    useGetAppliedTutorsQuery,
    useGetMyTuitionRequestQuery,
    useCancelTuitionRequestMutation,
    useGetCurrentTuitionsQuery,
    useGetAllTuitionsQuery,
    useApplyToTuitionMutation,
    useGetMyAppliedTuitionsQuery,
    useCancelAppliedTuitionMutation,
    useSelectTutorMutation,
    useGetAllRequestedStudentsQuery,
    useChangeStudentRequestStatusMutation,
    useUpdateRequestToTutorMutation,
    useUpdateTuitionMutation,
    useDeleteTuitionMutation
} = tuitionApi;