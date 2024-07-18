import React from 'react';
import './CardCredentials.css';

const CardCredentials = ({ reset, setReset, credentials, setCredentials }) => {

    const handleCardNumberChange = (e) => {
        setReset(false)
        let value = e.target.value;
        value = value.replace(/[^0-9]/g, '');
        value = value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCredentials((prev) => {
            return { ...prev, cardNumber: value }
        });
    }

    const handleExpiryChange = (e) => {
        setReset(false)
        let value = e.target.value;
        value = value.replace(/[^0-9\/]/g, '');
        if (value.length >= 2 && value[2] !== '/') {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length > 5) {
            value = value.slice(0, 5);
        }
        setCredentials((prev) => {
            return { ...prev, cardExpiry: value }
        });
    };

    const handleKeyDown = (e) => {
        const key = e.key;
        const value = e.target.value;
        if (key === 'Backspace' && value.length === 3) {
            e.preventDefault();
            setCredentials((prev) => {
                return { ...prev, cardExpiry: value.slice(0, 2) }
            });
        }
    };


    const handleCvvChange = (e) => {
        setReset(false)
        let value = e.target.value;
        value = value.replace(/[^0-9]/g, '');
        setCredentials((prev) => {
            return { ...prev, cardCvv: value }
        });
    }

    return (
        <>
            <label htmlFor="card-name">Name on card</label>
            <input
                type="text"
                id='card-name'
                placeholder='Name'
                minLength={6}
                required
                onChange={(e) => {
                    setReset(false)
                    setCredentials((prev) => { return { ...prev, cardName: e.target.value } })
                }}
                value={(credentials.cardName && !reset) ? credentials.cardName : ''} />

            <label htmlFor="card-number">Card Number</label>
            <input
                type="text"
                id='card-number'
                placeholder='1111 2222 3333 4444'
                maxLength={19}
                minLength={19}
                required
                onChange={handleCardNumberChange}
                value={(credentials.cardNumber && !reset) ? credentials.cardNumber : ''}
            />

            <div className='expiry-info'>
                <div>
                    <label htmlFor="card-expiration">Expiration date</label>
                    <input
                        type="text"
                        id='card-expiration'
                        placeholder='mm/yy'
                        minLength={5}
                        maxLength={5}
                        required
                        onChange={handleExpiryChange}
                        onKeyDown={handleKeyDown}
                        value={(credentials.cardExpiry && !reset) ? credentials.cardExpiry : ''}
                    />

                </div>
                <div>
                    <label htmlFor="card-cvv">CVV</label>
                    <input
                        type="text"
                        id='card-cvv'
                        placeholder='123'
                        minLength={3}
                        maxLength={3}
                        required
                        onChange={handleCvvChange}
                        value={(credentials.cardCvv && !reset) ? credentials.cardCvv : ''}
                    />
                </div>
            </div>
        </>
    )
}

export default CardCredentials