import React from 'react';
import Cart from '../components/cart/Cart';
import Header from '../components/ui/Header';
import { cartItems } from '../dummyData';
import EmptyCart from '../components/cart/EmptyCart';

function CartPage() {
    return (
        <>
           <Header /> 
           {cartItems.length !==0 ? <Cart /> : <EmptyCart />}
        </>
    )
}

export default CartPage