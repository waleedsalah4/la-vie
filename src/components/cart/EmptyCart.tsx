import React from 'react';
import { useNavigate } from 'react-router-dom';
import emptyCartImg from '../../assests/cart/emptyCart.png';

function EmptyCart() {
    const navigate = useNavigate();
    const goToShoppingPage = () => {
        navigate('/shop')
    }
    return (
        <div className='px-10 py-16'>
            <h1 className='font-Poppins font-medium text-center text-4xl mb-8'>My Cart</h1>
            <div className='flex flex-col justify-center items-center gap-x-6 gap-y-6'>
                <img src={emptyCartImg} alt='empty cart' className='mt-12' />
                <p className='font-Poppins font-semibold text-xl'>Your Cart is Empty</p>
                <button className='p-4 text-white bg-green rounded-lg font-semibold' onClick={goToShoppingPage}>Keep Shopping</button>
            </div>
        </div>
    )
}

export default EmptyCart