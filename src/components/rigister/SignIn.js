import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/signSlice';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import RegisterCard from './RegisterCard';
import FormInput from './FormInput';
// import FeedBack from '../utilities/FeedBack';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {userData, isLoading, LogError} = useSelector((state)=> state.signSlice)
  
  // useEffect(()=>{
  //   if(userData){
  //     navigate('/home')
  //   }
  // },[userData,navigate])

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  })

  return (
    <>
    <RegisterCard>
        <Box 
          component="div"  
          sx={{ mt: 3 }}>
            <Formik 
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validate}
              onSubmit={values => {
                dispatch(login(values))
                // console.log(values)
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormInput label='Email*' name='email' type='email' />
                  </Grid>
                  <Grid item xs={12}>
                      <FormInput label='Password' name='password' type='password' />
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/forgot-password" style={{ color: '#1ABC00' }}>
                      forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#1ABC00' }}
                  // disabled={isLoading}
                  >
                  {/* {isLoading ? 'Signing...' : 'Sign In'} */}
                  sign in
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/signup" style={{ color: '#1ABC00' }}>
                      Don't have an account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </Form>
              {/* )} */}
            </Formik>
      </Box>
    </RegisterCard>
    </>
  )
}

export default SignIn