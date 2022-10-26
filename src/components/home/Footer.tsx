import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../assests/logo.png';

function Footer() {
    return (
        <div className='mt-28 px-10 py-8 flex flex-wrap items-start justify-around gap-y-5 gap-x-4 bg-footer'>
            <div className='flex flex-col'>
                <div className=' relative flex font-Meddon text-3xl font-normal'>
                    La Vie <img src={logo} className='absolute right-0 left-10' alt='logo' /> 
                </div>
                <div className='font-Poppins flex mt-4'>
                    <p className='text-grey max-w-xs'><span className='text-green'>LA VIE </span> We're dedicated to giving you the very best of plants, with a focus on dependability</p>
                </div>
            </div>
            <div>
                <h5 className='text-green font-Poppins font-normal'>SECTIONS</h5>
                <p className='text-grey'>Home</p>
                <p className='text-grey'>Category</p>
                <p className='text-grey'>New</p>
                <p className='text-grey'>Request to be seller</p>
            </div>
            <div>
                <h5 className='text-green font-Poppins font-normal'>CONTACT US</h5> 
                <p className='text-grey'>Phone 01244522323</p>
                <p className='text-grey'>Phone 01331920394</p>
                <p className='text-grey'>Email : rawan@gmail.com</p>
                <p className='text-grey'>Address : 6 October city ,Giza ,egypt</p>
            </div>
            <div>
                <h5 className='text-green font-Poppins font-normal max-w-xs'>
                    SIGN FOR OUR NEWLETEER AND GET A 10% DISCOUNT
                </h5>
                <div className='mt-4 mb-4'>
                    <input type='email' placeholder='Your Email Address' className='outline-none border-b-2 border-grey mr-2' />
                    <button className='bg-none border-2 border-solid border-grey p-1'>SUBMIT</button>
                </div>
                <div>
                    <p className='text-green font-normal text-sm'>OUR SOCIAL</p>
                    <div>
                        <IconButton aria-label='facebook'>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label='instagram'>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton aria-label='twitter'>
                            <TwitterIcon />
                        </IconButton>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;