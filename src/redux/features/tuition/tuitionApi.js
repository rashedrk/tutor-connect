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
            invalidatesTags: ['tuition_request']
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
            invalidatesTags: ['all_tuition', 'tuition']
        }),
    })

});

export const { useCreateTuitionMutation, useRequestTutorMutation, useGetMyPostedTuitionsQuery, useGetAppliedTutorsQuery, useGetMyTuitionRequestQuery, useCancelTuitionRequestMutation, useGetCurrentTuitionsQuery, useGetAllTuitionsQuery, useApplyToTuitionMutation } = tuitionApi;