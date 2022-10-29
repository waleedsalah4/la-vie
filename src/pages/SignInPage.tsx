import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../components/rigister/Auth';
import SignIn from '../components/rigister/SignIn';
import Header from '../components/ui/Header';

function SignInPage() {
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
        <div className='flex items-center justify-evenly gap-y-1 w-4/5 border-b border-border'>
            <button 
                className='p-4 bg-none text-2xl border-b-2 border-green'
                onClick={handleShowSignIn}
            >
                Sign in
            </button>
            <button 
                className='p-4 bg-none border-none text-2xl'
                onClick={handleShowSignUp}
            >
                Sign Up
            </button>
        </div>
         <SignIn />
         <Auth />
    </div>
    </>
  )
}

export default SignInPage