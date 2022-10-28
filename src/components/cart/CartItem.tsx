import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

interface itemProps{
    img: any,
    name: string,
    price: string
}

function CartItem({img, name, price}: itemProps) {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center gap-x-6 gap-y-6 p-4 rounded-lg shadow-lg font-Poppins'>
            <div className='flex flex-col sm:flex-row justify-around items-center gap-x-6 gap-y-6'>
                <img src={img} alt='plant img' className='w-20 h-20 object-cover rounded' />
            <div className='font-semibold'>{name}</div>
            </div>
            {/* <div>
            </div> */}
            <div className='flex items-center gap-x-4 bg-bgCart p-1 rounded'>
                <button className='text-green'>-</button>
                <p>1</p>
                <button className='text-green'>+</button>
            </div>
            <div className='font-medium'>{price}</div>
            <IconButton>
                <DeleteIcon className='text-green'/>
            </IconButton>
        </div>
    )
}

export default CartItem