import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query({
            query: () => {
                return {
                    url: '/user/profile',
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return {
                    data: response.data,
                }
            }
        }),
        registerTutor: builder.mutation({
            query: (data) => {
                return {
                    url: '/user/tutor/create',
                    method: 'POST',
                    data
                }
            }
        }),
        registerStudent: builder.mutation({
            query: (data) => {
                return {
                    url: '/user/student/create',
                    method: 'POST',
                    data
                }
            }
        }),
    })

});

export const { useGetMyProfileQuery, useRegisterTutorMutation, useRegisterStudentMutation } = userApi;