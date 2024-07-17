import React from 'react';
import ShoppingCart from './shopping-cart/ShoppingCart';
import CardDetails from './card-details/CardDetails';
import './Cart.css'


const Cart = () => {
    return (
        <section className='cart-section'>
            <div className='cart-container'>
                <ShoppingCart />
                <CardDetails />
            </div>
        </section>
    )
}

export default Cart