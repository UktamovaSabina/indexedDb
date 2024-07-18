import React, { useState } from 'react';
import ShoppingCart from './shopping-cart/ShoppingCart';
import CardDetails from './card-details/CardDetails';
import History from './history/History';
import './Cart.css'


const Cart = () => {
    const [total, setTotal] = useState(0)
    return (
        <section className='cart-section'>
            <div className='cart-container'>
                <ShoppingCart setTotal={setTotal} />
                <CardDetails total={total} />
            </div>
            <div>
                <History />
            </div>
        </section>
    )
}

export default Cart