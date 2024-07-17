import React from 'react';
import './TotalCounts.css';

const totalCounts = [
    {
        name: "Subtotal",
        price: "$1,668"
    },
    {
        name: "Shipping",
        price: "$4",
    },
    {
        name: "Total (Tax incl.)",
        price: "$1,672"
    }
]

const TotalCounts = () => {

    return (
        <>
            {
                totalCounts.map(({ name, price }, i) => {
                    return <div className='total-count__item' key={i}>
                        <span>{name}</span>
                        <span>{price}</span>
                    </div>
                })
            }
            <button className='checkout-btn'>
                <span>$1,672</span> <span>Checkout<img src="https://s3-alpha-sig.figma.com/img/990e/de34/614b620013d504d51cf403647af97471?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYPEZuNDMep7OHK6kR3SotkvJJDxmCkhTrK9-tXvq08HimybzZvJXZLdsfggPAkSM5~-i3xXi1bWUikpGobTbPD1hL4bSxMKPzeBjkv4TFw-wyVcBQSPB1CoJyzxZSx2DJwOujxe~WQW91WQwnIF0xLDilX~JS4WkwOpNIqD1i2UIgpdcvPjnQWmBiUh00WOQc~BX6XT3wH18edfF1qpn2UkFTWUwNnMNBc8DqwCqRjouWm3spx-0wIS9nk6ljwuBn3N5QhxxOi4b~sCgihG8wYCSJ15~40BWODjDyiRPoWIFbdm-1bJmRJ4O1n8AgNdr9ee6N-dbqHYJE~7DB60lA__" alt="arrow" width={25} /></span>
            </button>
        </>
    )
}

export default TotalCounts