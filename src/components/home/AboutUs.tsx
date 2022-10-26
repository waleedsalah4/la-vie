import React from 'react';
import rectangle from '../../assests/home/rectangle.png';
import aboutImg from '../../assests/home/aboutus.png';

function AboutUs() {
    return (
    <div className='mt-28 px-10'>
            <div className='flex items-center justify-around flex-wrap gap-x-6 gap-y-6'>
                <div className='max-w-md '>
                    <h1 className='font-Poppins font-medium text-4xl mb-5'>About us</h1>
                    <p className='text-grey'>
                        Welcome to La Vie, your number one source for planting. We're dedicated to giving you the very best of plants, with a focus on dependability, customer service and uniqueness.<br />
                        Founded in 2020, La Vie has come a long way from its beginnings in a  home office our passion for helping people and give them some advices about how to plant and take care of plants. We now serve customers all over Egypt, and are thrilled to be a part of the eco-friendly wing .
                    </p>
                </div>
                <div className='relative'>
                    <img src={rectangle} alt="rectangle" className='w-96' />
                    <img src={aboutImg} alt="aboutus" className='w-96 absolute bottom-4 left-5'/>
                </div>
            </div>
    </div>
    )
}

export default AboutUs