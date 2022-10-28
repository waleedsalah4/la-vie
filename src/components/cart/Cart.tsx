import React from 'react';
import {cartItems} from '../../dummyData';
import CartItem from './CartItem';

function Cart() {
    return (
        <div className='px-10 py-16'>
        <h1 className='font-Poppins font-medium text-center text-4xl mb-8'>My Cart</h1>
        <div className='flex flex-col justify-around sm:flex-row items-center gap-x-6 gap-y-6'>
            <div className='flex flex-col w-[100%] sm:w-[60%] gap-y-8'>
                {cartItems && cartItems.map((item: any) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>

           <div className='flex flex-col gap-y-8 w-[60%] sm:w-[30%]'>
                <div className='p-4 flex flex-col gap-y-4 shadow-lg rounded'>
                    <div className='flex justify-between pt-4'>
                        <p>Sub Total</p>
                        <span className='text-blogText'>200 Egp</span>
                    </div>
                    <div className='flex justify-between border-b-2 border-bgCart pb-4'>
                        <p>Shipping</p>
                        <span className='text-blogText'>0.00 Egp</span>
                    </div>

                    <div className='flex justify-between'>
                        <p>Total</p>
                        <span className='text-green'>0.00 Egp</span>
                    </div>
                    <button className='bg-green text-white font-medium p-3 mt-4 rounded'>Checkout</button>
                </div>
                <div className='flex'>
                    <input type='text' placeholder='Enter your Coupon' className='outline-none p-4 shadow rounded-l-lg w-[80%]' />
                    <button className='bg-green text-white font-medium p-4 rounded-r-lg'>Apply</button>
                </div>
           </div>
        </div>
    </div>
    )
}

export default Cart