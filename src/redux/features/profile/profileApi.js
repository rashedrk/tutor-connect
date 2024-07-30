import { baseApi } from "@/redux/api/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query({
            query: () => {
                return {
                    url: '/profile',
                    method: 'GET'
                }
            },
            transformResponse: (response) => {
                return response.data
            },
            providesTags: ['profile']
        }),
        updateDetails: builder.mutation({
            query: (data) => {
                return {
                    url: "/profile/details",
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: ['profile']
        }),
        updatePersonalInfo: builder.mutation({
            query: (data) => {
                return {
                    url: "/profile/personalInfo",
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: ['profile']
        }),
        updateAddress: builder.mutation({
            query: (data) => {
                return {
                    url: "/profile/address",
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: ['profile']
        }),
        updateAcademicInfo: builder.mutation({
            query: (data) => {
                return {
                    url: "/profile/academicInfo",
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: ['profile']
        }),
        updateOthersInfo: builder.mutation({
            query: (data) => {
                return {
                    url: "/profile/othersInfo",
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: ['profile']
        }),
    })

});

export const { useGetMyProfileQuery, useUpdatePersonalInfoMutation, useUpdateDetailsMutation, useUpdateAcademicInfoMutation, useUpdateAddressMutation, useUpdateOthersInfoMutation } = profileApi;