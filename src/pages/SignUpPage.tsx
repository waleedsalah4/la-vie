import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../components/rigister/Auth';
import SignUp from '../components/rigister/SignUp';
import Header from '../components/ui/Header';

function SignUpPage() {
    const navigate = useNavigate()
    const handleShowSignIn= () => {
        navigate('/signin')
    }
    const handleShowSignUp= () => {
        navigate('/signup')
    }
  return (
    <>
    <Header />
    <div className='mt-7 flex flex-col items-center bg-footer'>
        <div className='flex items-center justify-center gap-y-1 gap-x-28 w-4/5 border-b border-border'>
            <button 
                className='p-4 bg-none border-none text-2xl'
                onClick={handleShowSignIn}
            >
                Sign in
            </button>
            <button 
                className='p-4 bg-none text-2xl border-b-2 border-green'
                onClick={handleShowSignUp}
            >
                Sign Up
            </button>
        </div>
         <SignUp />
         <Auth />
    </div>
    </>
  )
}

export default SignUpPage