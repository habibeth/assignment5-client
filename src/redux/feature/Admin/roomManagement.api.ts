import { TQueryParam, TResponseRedux, TRoom } from "../../../types";
import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRooms: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/rooms',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['room'],
            transformResponse: (response: TResponseRedux<TRoom[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),

        createRoom: builder.mutation({
            query: (data) => ({
                url: '/rooms/create-room',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['room']
        }),

        updateRoom: builder.mutation({
            query: (args) => ({
                url: `/rooms/${args.id}`,
                method: 'PATCH',
                body: args.data,
            }),
            invalidatesTags: ['room']
        }),

        getSingleRoom: builder.query({
            query: (id) => {
                return {
                    url: `/rooms/${id}`,
                    method: 'GET',
                };
            },
            providesTags: ['room'],
            transformResponse: (response: TResponseRedux<any>) => {
                return {
                    data: response.data,
                };
            },
        }),

        deleteRoom: builder.mutation({
            query: (id) => {
                return {
                    url: `/rooms/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['room']
        }),
    })
})


export const {
    useGetAllRoomsQuery,
    useCreateRoomMutation,
    useUpdateRoomMutation,
    useGetSingleRoomQuery,
    useDeleteRoomMutation
} = roomManagementApi