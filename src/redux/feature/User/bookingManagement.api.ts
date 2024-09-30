
import { TBooking, TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/bookings',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['booking'],
            transformResponse: (response: TResponseRedux<TBooking[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),

        createBooking: builder.mutation({
            query: (data) => ({
                url: '/bookings/create-booking',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['booking']
        }),

        updateBooking: builder.mutation({
            query: (args) => ({
                url: `/bookings/${args.id}`,
                method: 'PATCH',
                body: args.data,
            }),
            invalidatesTags: ['booking']
        }),

        getMyBookings: builder.query({
            query: () => {
                return {
                    url: `/bookings/my-bookings`,
                    method: 'GET',
                }
            },
            providesTags: ['booking'],
            transformResponse: (response: TResponseRedux<TBooking[]>) => {
                return {
                    data: response.data
                }
            }
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['booking']
        }),
    })
})


export const {
    useCreateBookingMutation,
    useGetAllBookingsQuery,
    useUpdateBookingMutation,
    useGetMyBookingsQuery,
    useDeleteBookingMutation
} = bookingManagementApi