import { baseApi } from "@/redux/api/baseApi";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardOverview: builder.query({
            query: () => {
                
                return {
                    url: '/dashboard',
                    method: 'GET',
                    
                }
            },
        }),
    })

});

export const {useGetDashboardOverviewQuery} = dashboardApi;