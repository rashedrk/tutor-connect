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
    })

});

export const { useGetMyProfileQuery } = userApi;