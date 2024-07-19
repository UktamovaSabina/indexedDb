import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import "./Product.css"

const Product = ({ data, deleteItem }) => {

    return (
        <div className='wishlist-item-wrapper'>
            {
                (data && data.length > 0) ? data.map(d => {
                    return <article className='wishlist-item' key={d.id}>
                        <div className='left-info'>
                            <img src={d.img} alt={d.name} />
                            <div>
                                <h4>{d.name} ${d.price}</h4>
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
                }) : <h2 className='no-product-indicator'>No product yet....</h2>
            }
        </div>
    )
}

export default Product