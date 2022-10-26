import React from 'react';
import cat1 from '../../assests/home/cat1.png';
import cat2 from '../../assests/home/cat2.png';
import cat3 from '../../assests/home/cat3.png';
import cat4 from '../../assests/home/cat4.png';

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
    <div className='container px-10'>
        <h1 className='font-Poppins font-medium text-2xl mb-5'>Popular Categories</h1>
        <div className='flex items-center justify-around'>
            {categories.map(item => (
                <div className='flex flex-col items-center' key={item.id}>
                    <img src={item.img} className='w-44'/>
                    <p>{item.text}</p>
                </div>

            ))}
        </div>
    </div>
  )
}

export default PopularCategories