import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import './ShoppingCart.css';
import { getCartItems } from '../../../db/indexedDB';
import Product from './Product';

const ShoppingCart = () => {
  const [pendingProducts, setPendingProducts] = useState([]);

  useEffect(() => {
    let data;
    async function pr() {
      data = await getCartItems()
      setPendingProducts(data)
    }
    pr()
    console.log(pendingProducts);
  }, [])

  return (
    <div className='shopping-cart-wrapper'>
      <NavLink to={'/'} className="continue-heading"><SlArrowLeft /> Shopping Continue</NavLink >
      <hr style={{ border: "1px solid #D0CFCF", marginBottom: "24px" }} />
      <h4>Shopping cart </h4>
      <p>You have {pendingProducts.length} {pendingProducts.length > 0 ? 'items' : 'item'} in your cart</p>
      {
        pendingProducts.map((p, i) => {
          return <Product key={i} product={p} />
        })
      }
    </div>
  )
}

export default ShoppingCart