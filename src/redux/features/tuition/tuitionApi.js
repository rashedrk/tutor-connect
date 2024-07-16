import { baseApi } from "@/redux/api/baseApi";

const tuitionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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

export const { useRequestTutorMutation } = tuitionApi;