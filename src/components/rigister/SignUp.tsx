import React, {useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../store/signSlice';
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../store';
// import FeedBack from '../utilities/FeedBack';
import * as Yup from 'yup';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const {userData, isLoading, signupError} = useSelector((state)=> state.signSlice)

  // useEffect(()=>{
  //   if(userData){
  //     navigate('/home')
  //   }
  // },[userData,navigate])
/*
  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be more that 3 characters')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Must be more that 3 characters')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    country: Yup.string()
      .required('Password is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
*/
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: object) => {
    dispatch(signup(data))
    // console.log(data)
  };

  return (
    <>
      {/* <RegisterCard> */}
           
          <Box 
            component="div" 
            sx={{ mt: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-row gap-x-8 gap-y-8'>
                            <div className='flex flex-col gap-y-2'>
                                <label>First Name</label>
                                <input 
                                  {...register("firstName", { required: true })} 
                                  type='text'
                                  className='p-3 rounded-md outline-none border-2 border-border bg-footer' />
                                  {errors.email && <p>This field is required</p>}
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label>Last Name</label>
                                <input 
                                  {...register("lastName", { required: true })}  
                                  type='text'
                                  className='p-3 rounded-md outline-none border-2 border-border bg-footer'
                                  
                                  />
                                  {errors.email && <p>This field is required</p>}
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <label>Email*</label>
                            <input 
                              {...register("email", { required: true })} 
                              type='email'
                              className='p-3 rounded-md outline-none border-2 border-border bg-footer'
                              />
                              {errors.email && <p>This field is required</p>}
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="">password</label>
                            <input 
                              {...register("password", { required: true })} 
                              type='password' 
                              className='p-3 rounded-md outline-none border-2 border-border bg-footer'
                            />
                            {errors.email && <p>This field is required</p>}
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label>Confirm Password</label>
                            <input 
                              {...register("confirmPassword", { required: true })} 
                              type='password' 
                              className='p-3 rounded-md outline-none border-2 border-border bg-footer'
                              />
                              {errors.email && <p>This field is required</p>}
                        </div> 
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2,backgroundColor: '#1ABC00'  }}
                    // disabled={isLoading}
                  >
                   {/* {isLoading ? 'Signing...' : 'Sign Up'} */}
                   Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/signin" style={{ color: '#1ABC00' }}>
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
              </form>
        
        </Box>
      {/* </RegisterCard> */}
      </>
  )
}

export default SignUp
 