import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/signSlice';
import { useAppDispatch } from '../../store';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { login } from '../store/signSlice';


// import FeedBack from '../utilities/FeedBack';

import Box from '@mui/material/Box';

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: object) => {
    // console.log(data);
    dispatch(login(data))
  };
  // const {userData, isLoading, LogError} = useSelector((state)=> state.signSlice)
  
  // useEffect(()=>{
  //   if(userData){
  //     navigate('/home')
  //   }
  // },[userData,navigate])

  return (
    <>
    {/* <RegisterCard> */}
        <Box 
          component="div"  
          sx={{ mt: 3 }}
          className='w-[50%]'
          >
              <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-4  w-[80%]'>
                  <div className='flex flex-col gap-y-2'>
                    <label>Email</label>
                    <input  
                      type='email'
                      {...register("email", { required: true })}
                      className=' p-3 rounded-md outline-none border-2 border-border bg-footer' /> 
                      
                      {errors.email && <p>This field is required</p>}
                  </div>
                  <div className='flex flex-col gap-y-2'>
                      <label>Password</label>
                      <input 
                        type='password' 
                        {...register("password", { required: true })}
                        className=' p-3 rounded-md outline-none border-2 border-border bg-footer'
                      />
                      {errors.password && <p>This field is required</p>}
                  </div>
                </div>
                <div className='w[80%]'>
                    <Link to="/forgot-password" style={{ color: '#1ABC00' }}>
                      forgot password?
                    </Link>
                </div>
                <button
                  type="submit"
                  className='w-[80%] bg-green text-white p-1 rounded mt-4 mb-4 font-medium'
                  // fullWidth
                  // variant="contained"
                  // sx={{ mt: 3, mb: 2, backgroundColor: '#1ABC00' }}
                  // disabled={isLoading}
                  >
                  {/* {isLoading ? 'Signing...' : 'Sign In'} */}
                  Sign in
                </button>
                <div className='w-[80%] text-center'>
                    <Link to="/signup" >
                      Don't have an account? <span className='text-green'> Sign up</span>
                    </Link>
                </div>
              </form>
      </Box>
    </>
  )
}

export default SignIn