import React from 'react';
import mobileImg1 from '../../assests/home/mob1.png';
import mobileImg2 from '../../assests/home/mob2.png';
import playstore from '../../assests/home/playstore.png';
import apple from '../../assests/home/apple.png';

function MobileApp() {
    return (
        <div className='mt-28 px-10'>
            <div className='flex flex-wrap items-center justify-around gap-x-6 gap-y-6'>
                <div className='flex relative'>
                    <img src={mobileImg1} alt="rectangle" className='w-96' />
                    <img src={mobileImg2} alt="rectangle" className='w-96 absolute top-8 left-28' />
                </div>
                <div className='max-w-lg flex flex-col gap-y-4'>
                    <h1 
                        className="font-Poppins font-medium text-4xl"
                    >
                        Mobile Application
                    </h1>
                    <p className='text-grey'>
                    You can install La Vie mobile application and enjoy with new featurs, earn more points and get discounts <br />
                    Also you can scan QR codes in your plants’ pots so that you can get discount on everything in the website up to 70%
                    </p>
                    <h6 className='font-medium font-Poppins'>installed by</h6>
                    <div className='flex gap-x-8'>
                        <button className='bg-black text-white flex items-center py-2 px-4 rounded'>
                            <img src={playstore} alt='playstore' className='w-4 mr-2 ml-1'/>
                            Play Store
                        </button>
                        <button className='bg-black text-white flex items-center py-2 px-4 rounded'>
                        <img src={apple} alt='apple' className='w-4 mr-2 ml-1'/>
                            App Store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp