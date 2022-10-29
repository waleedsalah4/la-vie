import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {login} from '../../store/signSlice';
// import { useAppDispatch } from '../../store';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import { useLogUserInMutation } from '../../store/signSlice';

interface FormValues {
  email: string;
  password: string | any;
};

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const formSchema = Yup.object().shape({
    password: Yup.string()
    .required("Password is required")
    .min(8, "Password length should be at least 8 characters"),
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
    
  });

  const [logUserIn,{isLoading,isSuccess, isError,error,data}] = useLogUserInMutation()
  // console.log('isLoading', isLoading);
  // console.log('error', error)
  // console.log('data', data)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(formSchema)
  });
  const onSubmit = async(data: FormValues) => {
    // console.log(data);
    await logUserIn(data)
  };
  // const {userData, isLoading, LogError} = useSelector((state)=> state.signSlice)
  
  useEffect(()=>{
    if(isSuccess){
        navigate('/home')
    }
  },[isSuccess])

  return (
    <>
    {/* <RegisterCard> */}
        <Box 
          component="div"  
          sx={{ mt: 3 }}
          className='w-[100%] sm:w-[50%]'
          >
              <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-4  w-[80%]'>
                  <div className='flex flex-col gap-y-2'>
                    <label>Email</label>
                    <input  
                      type='email'
                      {...register("email")}
                      className=' p-3 rounded-md outline-none border-2 border-border bg-footer' /> 
                      
                      {errors.email && <p>This field is required</p>}
                  </div>
                  <div className='flex flex-col gap-y-2'>
                      <label>Password</label>
                      <input 
                        type='password' 
                        {...register("password")}
                        className=' p-3 rounded-md outline-none border-2 border-border bg-footer'
                      />
                     {errors.password && <span>password is required and must be more that 8 char</span>}
                  </div>
                </div>
                <div className='w-[80%]'>
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

