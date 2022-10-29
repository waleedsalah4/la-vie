import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';

// import { boolean } from 'yup';
import { baseURL } from '../config';
import {token} from '../dummyData';


export const getAllBlogs = createAsyncThunk(
  'blogs/getAllBlogs', 
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const response: any = await fetch(`${baseURL}/api/v1/products/blogs`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                Authorization: `Bearer ${JSON.parse(token)}`,
            }
        });
        const res = await response.json();
        console.log(res)
        return res
          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error);
      }
    }
);

interface state {
  blogs:  [] | any,
  isLoading: boolean,
  error: any
}

const initialState = {
  blogs: null,
  isLoading: false,
  error: null
} as state

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
    },
    
    extraReducers:(builder: ActionReducerMapBuilder<state>) => {
      
      builder.addCase(getAllBlogs.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      builder.addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      builder.addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    }
  });

export default blogSlice.reducer;