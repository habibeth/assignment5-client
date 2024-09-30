import { TQueryParam, TResponseRedux, TRoom } from "../../../types";
import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/users',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['users'],
            transformResponse: (response: TResponseRedux<TRoom[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),

        updateUser: builder.mutation({
            query: (args) => ({
                url: `/users/${args.id}`,
                method: 'PATCH',
                body: args.data,
            }),
            invalidatesTags: ['users']
        }),

        deleteUser: builder.mutation({
            query: (id) => {
                return {
                    url: `/users/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['users']
        }),
    })
})


export const {
    useGetAllUsersQuery,
    useUpdateUserMutation,
    useDeleteUserMutation
} = roomManagementApi