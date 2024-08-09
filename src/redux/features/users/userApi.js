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

        getAllTutors: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value);
                    });
                }
                return {
                    url: '/tutor',
                    method: 'GET',
                    params: params,
                }
            },
            transformResponse: (response) => {
                return {
                    data: response.data,
                    meta: response?.meta,
                };
            },
            providesTags: ['tutors']
        }),
    })

});

export const { useRegisterTutorMutation, useRegisterStudentMutation, useGetAllTutorsQuery } = userApi;