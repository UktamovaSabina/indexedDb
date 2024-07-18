import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import "./Product.css"

const Product = ({ products }) => {
    const [data, setData] = useState([]);
    const [counts, setCounts] = useState([]);

    const fetchData = useCallback(() => {
        setData(products)
    }, [products])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className='wishlist-item-wrapper'>
            {
                data.map(d => {
                    return <article className='wishlist-item' key={d.id}>
                        <div className='left-info'>
                            <img src={d.img} alt={d.name} />
                            <div>
                                <h4>{d.name}</h4>
                                <p>{d.info}</p>
                            </div>
                        </div>
                        <div className='right-info'>
                            <input type="number" value={d.count} />
                            <span>${d.price * d.count}</span>
                            <RiDeleteBinLine style={{fontSize: "30px", color: "#393939", cursor: "pointer"}}/>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default Product