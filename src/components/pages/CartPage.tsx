import React from 'react';
import Cart from '../cart/Cart';
import Header from '../ui/Header';
import { cartItems } from '../../dummyData';
import EmptyCart from '../cart/EmptyCart';

function CartPage() {
    return (
        <>
           <Header /> 
           {cartItems.length !==0 ? <Cart /> : <EmptyCart />}
        </>
    )
}

export default CartPage