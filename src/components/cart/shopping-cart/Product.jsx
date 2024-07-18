import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import "./Product.css"

const Product = ({ products, deleteItem }) => {
    const [data, setData] = useState([]);

    const fetchData = useCallback(() => {
        setData(products)
    }, [products])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className='wishlist-item-wrapper'>
            {
                data.length > 0 ? data.map(d => {
                    return <article className='wishlist-item' key={d.id}>
                        <div className='left-info'>
                            <img src={d.img} alt={d.name} />
                            <div>
                                <h4>{d.name}</h4>
                                <p>{d.info}</p>
                            </div>
                        </div>
                        <div className='right-info'>
                            <span><strong>{d.count}</strong></span>
                            <span><strong>/</strong></span>
                            <span><strong>${d.price * d.count}</strong></span>
                            <RiDeleteBinLine className='delete-btn' onClick={() => { deleteItem(d.id) }} />
                        </div>
                    </article>
                }) : <h2>No product yet....</h2>
            }
        </div>
    )
}

export default Product