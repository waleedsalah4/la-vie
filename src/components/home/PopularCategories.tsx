import React from 'react';
import cat1 from '../../assests/home/cat1.png';
import cat2 from '../../assests/home/cat2.png';
import cat3 from '../../assests/home/cat3.png';

const categories = [
    {
        img: cat1,
        text: 'Tools',
        id: '1'
    },
    {
        img: cat2,
        text: 'Seeds',
        id: '2'
    },
    {
        img: cat3,
        text: 'Low Light Plants',
        id: '3'
    },
    {
        img: cat1,
        text: 'Bright Plants',
        id: '4'
    },
]

function PopularCategories() {
  return (
    <div className=' px-10'>
        <h1 className='font-Poppins font-medium text-4xl mb-5 ml-10'>Popular Categories</h1>
        <div className='flex items-center justify-around flex-wrap gap-x-6 gap-y-6'>
            {categories.map(item => (
                <div className='flex flex-col items-center' key={item.id}>
                    <img src={item.img} alt='category' className='w-44'/>
                    <p className='mt-4 font-bold text-xl'>{item.text}</p>
                </div>

            ))}
        </div>
    </div>
  )
}

export default PopularCategories