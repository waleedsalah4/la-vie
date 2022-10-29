import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
// import { boolean } from 'yup';
import { baseURL } from '../config';

interface signupInterface { 
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // confirmPassword: string;
}
interface signinInterface { 

  email: string;
  password: string;
  // confirmPassword: string;
}

export const login = createAsyncThunk<signinInterface, Object|any>(
  'sign/logIn', 
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        console.log(data)
        const response = await fetch(`${baseURL}/api/v1/auth/signin`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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


export const signup = createAsyncThunk<signupInterface, Object|any>(
  'sign/signup', 
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const response: any = await fetch(`${baseURL}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        // const res = await response.json();
        console.log(response)
        return response
          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error);
      }
    }
);

interface userDataState {
  userData:  object | null;
  isLoading: boolean;
  isLogged: boolean;
  LogError: any;
  signupError: any;
}

const initialState = {
  userData: null,
  isLoading: false,
  isLogged: false,
  LogError: null,
  signupError: null
} as userDataState

const signSlice = createSlice({
    name: 'sign',
    initialState,
    reducers: {
    },
    
    extraReducers:(builder) => {
      
      builder.addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.LogError = null;
      })
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogged= true;
        state.userData = action.payload;
      })
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.LogError = action.payload;
      })

      //sign up
      builder.addCase(signup.pending, (state, action) => {
        state.isLoading = true;
        state.signupError = null;
      })
      builder.addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogged= true;
        state.userData = action.payload;
      })
      builder.addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.signupError = action.payload;
      })
    }
  });

export default signSlice.reducer;

