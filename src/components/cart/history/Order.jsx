import React from 'react';
import "./Order.css"

const Order = ({ data }) => {
    return (
        <>
            <h5 className='order-heading'>Products: </h5>
            {
                (data && data.length > 0) && data.map((d, ind )=> {
                    return <div key={ind} className="ordered-food">
                        <h6>{ind + 1}. Product Name: {d.name} (${d.price} each)</h6>
                        <p>Amount: {d.count} * ${d.price} = ${d.count * d.price}</p>
                    </div>
                })
            }
        </>
    )
}

export default Order