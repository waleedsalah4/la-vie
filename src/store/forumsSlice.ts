import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';
import {token} from '../dummyData'
import { Item } from '../components/community/types';

export const forums = createApi({
  reducerPath: 'getAllForums',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: (builder) => ({
    getAllForums: builder.query<Item[], void>({
      query: ()=> {
        return {
          url: 'api/v1/forums',
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      }
      
    }),
  })
})

export const { useGetAllForumsQuery} = forums;