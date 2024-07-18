import React from 'react';
import './TotalCounts.css';

const TotalCounts = ({ total }) => {

    return (
        <>
            <div className='total-count__item'>
                <span>Subtotal</span>
                <span>${total}</span>
            </div>
            <div className='total-count__item'>
                <span>Shipping</span>
                <span>$4</span>
            </div>
            <div className='total-count__item'>
                <span>$Total (Tax incl.)</span>
                <span>${total + 4}</span>
            </div>
            <button className='checkout-btn'>
                <span></span> <span>Checkout<img src="https://s3-alpha-sig.figma.com/img/990e/de34/614b620013d504d51cf403647af97471?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYPEZuNDMep7OHK6kR3SotkvJJDxmCkhTrK9-tXvq08HimybzZvJXZLdsfggPAkSM5~-i3xXi1bWUikpGobTbPD1hL4bSxMKPzeBjkv4TFw-wyVcBQSPB1CoJyzxZSx2DJwOujxe~WQW91WQwnIF0xLDilX~JS4WkwOpNIqD1i2UIgpdcvPjnQWmBiUh00WOQc~BX6XT3wH18edfF1qpn2UkFTWUwNnMNBc8DqwCqRjouWm3spx-0wIS9nk6ljwuBn3N5QhxxOi4b~sCgihG8wYCSJ15~40BWODjDyiRPoWIFbdm-1bJmRJ4O1n8AgNdr9ee6N-dbqHYJE~7DB60lA__" alt="arrow" width={25} /></span>
            </button>
        </>
    )
}

export default TotalCounts