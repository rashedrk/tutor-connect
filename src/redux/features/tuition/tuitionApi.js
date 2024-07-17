import { baseApi } from "@/redux/api/baseApi";

const tuitionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
        requestTutor: builder.mutation({
            query: (args) => {
                console.log("from redux",args);
                return {
                    url: `/tuition/request/${args.tutorId}`,
                    method: 'POST',
                    data: args.data
                }
            },
        }),
    })

});

export const { useCreateTuitionMutation,useRequestTutorMutation, useGetMyPostedTuitionsQuery } = tuitionApi;