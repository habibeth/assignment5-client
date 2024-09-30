import { TQueryParam, TResponseRedux, TSlots } from "../../../types";
import { baseApi } from "../../api/baseApi";


const slotsManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSlots: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/slots',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['slots'],
            transformResponse: (response: TResponseRedux<TSlots[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),

        createSlots: builder.mutation({
            query: (data) => ({
                url: '/slots/create-slots',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['slots']
        }),

        updateSlots: builder.mutation({
            query: (id) => ({
                url: `/slots/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['slots']
        }),

        deleteSlots: builder.mutation({
            query: (id) => {
                return {
                    url: `/slots/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['slots']
        }),
    })
})

export const {
    useCreateSlotsMutation,
    useGetAllSlotsQuery,
    useUpdateSlotsMutation,
    useDeleteSlotsMutation
} = slotsManagementApi