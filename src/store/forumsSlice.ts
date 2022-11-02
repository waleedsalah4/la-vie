import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';
import {token} from '../dummyData'
import { Items } from '../components/community/types';

interface forumsTypes {
  type: string,
  message: string,
  items: Items
}

export const forums = createApi({
  reducerPath: 'forums',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: (builder) => ({
    getAllForums: builder.query<forumsTypes, number>({
      query: (page)=>{
        console.log('page ====>',page)
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