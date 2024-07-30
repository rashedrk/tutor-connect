import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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

export const { useRegisterTutorMutation, useRegisterStudentMutation } = userApi;