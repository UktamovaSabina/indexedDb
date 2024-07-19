import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import './ShoppingCart.css';
import { getCartItems, deleteCartItem } from '../../../db/indexedDB';
import Product from './Product';
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShoppingCart = ({ data, setData, setTotal }) => {
  const [length, setLength] = useState(0);
  const [products, setProducts] = useState([])

  const deleteItem = async (id) => {
    try {
      await deleteCartItem(id)
      let dataP = await getCartItems()
      setData(dataP.arr)
      setLength(dataP.length)
      toast.success("successully deleted!", {
        transition: Flip,
        autoClose: 500
      });
    } catch (error) {
      toast.error(error.message, {
        transition: Flip,
        autoClose: 500
      });
    }
  }

  const settingData = useCallback(async () => {
    setProducts(data)
    let dataP = await getCartItems()
    setLength(dataP.length)
    setTotal(prev => {
      prev = 0;
      dataP.arr.map(d => {
        return prev += (d.price * d.count)
      })
      return prev
    })
  }, [data])

  useEffect(() => {
    settingData()
  }, [settingData])

  return (
    <div className='shopping-cart-wrapper'>
      <NavLink to={'/'} className="continue-heading"><SlArrowLeft /> Shopping Continue</NavLink >
      <hr style={{ border: "1px solid #D0CFCF", marginBottom: "24px" }} />
      <h4>Shopping cart </h4>
      <p>You have {length} {length > 0 ? 'items' : 'item'} in your cart</p>
      <Product data={products} deleteItem={deleteItem} />
    </div>
  )
}

export default ShoppingCart