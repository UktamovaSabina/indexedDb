import React from 'react';
import { NavLink } from "react-router-dom"
import products from '../../db/products';
import "./Products.css";
import { BsCart4 } from "react-icons/bs";
import { addItemToCart, getCartItems } from '../../db/indexedDB';
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {

    const [pendingProducts, setPendingProducts] = useState(0);

    useEffect(() => {
        let data;
        async function pr() {
            data = await getCartItems()
            setPendingProducts(data.length)
        }
        pr()
    }, [pendingProducts])

    async function addToDb(product) {
        await addItemToCart({ ...product });
        const data = await getCartItems()
        setPendingProducts(data.length)
    }

    return (
        <section>
            <div className="container">
                <h1>Meals: </h1>
                <NavLink to={'/cart'} className='cart-icon'>{pendingProducts}<BsCart4 /></NavLink>
                <div className='products-wrapper'>{
                    products.map((product) => {
                        return <article key={product.product_id} className="products-wrapper__item">
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.info}</p>
                            <p><strong>${product.price}</strong></p>
                            <button className='add-btn' onClick={() => { addToDb(product) }}>add to cart<BsCart4 /></button>
                        </article>
                    })
                }</div>
            </div>
        </section>
    )
}

export default Products