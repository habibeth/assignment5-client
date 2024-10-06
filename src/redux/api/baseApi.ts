import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../feature/auth/authSlice";


const baseQuery = fetchBaseQuery({
    baseUrl: 'https://assignment5-server-phi.vercel.app/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', token)
        }

        return headers
    }
})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error?.status === 401) {
        const res = await fetch('https://assignment5-server-phi.vercel.app/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: 'include'
        })

        const data = await res.json();

        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;

            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken
                })
            )

            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logout())
        }


    }

    return result
}



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['room', 'slots', 'users', 'booking'],
    endpoints: () => ({}),
})