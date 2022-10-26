import React from 'react';
import sell1 from '../../assests/home/image75.png';
import sell2 from '../../assests/home/image71.png';
import sell3 from '../../assests/home/image74.png';
import sell4 from '../../assests/home/image73.png';

const categories = [
    {
        img: sell1,
        text: 'SPIDER PLANT',
        price: '190 EGP',
        id: '1'
    },
    {
        img: sell2,
        text: 'JUNIPER BONSAI',
        price: '100 EGP',
        id: '2'
    },
    {
        img: sell3,
        text: 'SNAKE PLANT',
        price: '100 EGP',
        id: '3'
    },
    {
        img: sell4,
        text: 'SNAKE PLANT',
        price: '70 EGP',
        id: '4'
    },
]


function BestSeller() {
    return (
        <div className='px-10 py-16'>
            <h1 className='font-Poppins font-medium text-4xl mb-5 ml-10'>Best Seller</h1>
            <div className='flex items-center justify-around flex-wrap gap-x-6 gap-y-6'>
                {categories.map((item, index) => (
                    <div className={`flex flex-col items-start ${index % 2 !== 0 ? 'mt-24' : '' }`} key={item.id}>
                        <img src={item.img} alt='best seller img' className='w-52 h-52'/>
                        <p className='mt-4 font-bold text-xl' 
                        >{item.text}</p>
                        <span>{item.price}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default BestSeller