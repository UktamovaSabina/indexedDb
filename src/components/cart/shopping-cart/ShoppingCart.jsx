import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import './ShoppingCart.css';
import { getCartItems } from '../../../db/indexedDB';
import { deleteCartItem } from '../../../db/indexedDB';
import Product from './Product';

const ShoppingCart = () => {
  const [pendingProducts, setPendingProducts] = useState([]);
  const [length, setLength] = useState(0);

  const deleteItem = async (id) => {
    try {
      await deleteCartItem(id)
      let data = await getCartItems()
      setPendingProducts(data.arr)
      setLength(data.length)
      console.log("success");
    } catch (error) {
      console.log(error.message);
    }
  }

  const settingData = useCallback(async () => {
    let data = await getCartItems()
    setPendingProducts(data.arr.sort((a, b) => b.id > a.id))
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
      <Product products={pendingProducts} deleteItem={deleteItem} />
    </div>
  )
}

export default ShoppingCart