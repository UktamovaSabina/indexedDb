import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import './ShoppingCart.css';
import { getCartItems } from '../../../db/indexedDB';
import { deleteCartItem } from '../../../db/indexedDB';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShoppingCart = ({setTotal}) => {
  const [pendingProducts, setPendingProducts] = useState([]);
  const [length, setLength] = useState(0);

  const deleteItem = async (id) => {
    try {
      await deleteCartItem(id)
      let data = await getCartItems()
      setPendingProducts(data.arr)
      setLength(data.length)
      setTotal(prev => {
        prev = 0;
        data.arr.map(d => {
          return prev += (d.price * d.count)
        })
        console.log(prev);
        return prev
      })
      console.log(data.arr);
      toast.success("successully deleted!");
    } catch (error) {
      toast.error(error.message);
    }
  }

  const settingData = useCallback(async () => {
    let data = await getCartItems()
    setPendingProducts(data.arr.sort((a, b) => b.product_id > a.product_id))
    setLength(data.length)
    setTotal(prev => {
      prev = 0;
      data.arr.map(d => {
        return prev += (d.price * d.count)
      })
      return prev
    })
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
      <ToastContainer/>
    </div>
  )
}

export default ShoppingCart