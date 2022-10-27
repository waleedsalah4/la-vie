import React from 'react'
import { Facebook } from '@mui/icons-material';
import facebopkImg from '../../assests/sign/Facebook.png';
import googleImg from '../../assests/sign/Google.png';


function Auth() {
    return (
        <div className='flex flex-col mb-12'>
            <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-40 bg-border"></span>
                <span className="text-gray-300 font-normal">or continue with</span>
                <span className="h-px w-40 bg-border"></span>
            </div>
            <div className='flex justify-around flex-wrap'>
                <button className='bg-white text-black flex items-center py-2 px-8 rounded border-green border-2'>
                    <img src={googleImg} alt='playstore' className='w-6 mr-2 ml-1'/>
                    google
                </button>
                <button className='bg-white text-Black flex items-center py-2 px-8 rounded border-green border-2'>
                    {/* <img src={facebopkImg} alt='playstore' className='w-4 mr-2 ml-1'/> */}
                    <Facebook style={{color: '#337FFF', marginRight: '0.5rem'}} />
                    FaceBook
                </button>
            </div>
          
        </div>
    )
}

export default Auth