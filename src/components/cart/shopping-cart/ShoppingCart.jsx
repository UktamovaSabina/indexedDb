import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import './ShoppingCart.css';
import { getCartItems } from '../../../db/indexedDB';
import Product from './Product';

const ShoppingCart = () => {
  const [pendingProducts, setPendingProducts] = useState([]);
  const [length, setLength] = useState(0);

  const settingData = useCallback(async () => {
    let data = await getCartItems()
    setPendingProducts(data.arr)
    setLength(data.length)
  }, [])

  useEffect(() => {
    settingData()
  }, [settingData])

  return (
    <div className='shopping-cart-wrapper'>
      <NavLink to={'/'} className="continue-heading"><SlArrowLeft /> Shopping Continue</NavLink >
      <hr style={{ border: "1px solid #D0CFCF", marginBottom: "24px" }} />
      <h4>Shopping cart </h4>
      <p>You have {length} {length > 0 ? 'items' : 'item'} in your cart</p>
      <Product products={pendingProducts} />
    </div>
  )
}

export default ShoppingCart