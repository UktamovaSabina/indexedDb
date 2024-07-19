import React, { useEffect, useState } from 'react';
import "./History.css"
import Order from './Order';
import { RiDeleteBinLine } from "react-icons/ri";

const History = ({ deleteTransaction, historyTrans }) => {
  const [historyData, setHistoryData] = useState(null);
  useEffect(() => {
    setHistoryData(historyTrans)
  }, [historyTrans])

  return (
    <div className='history-section__container'>
      <h2>History</h2>
      <hr style={{ border: "1px solid  rgba(0, 0, 0, 0.679)" }} />
      {
        (historyData && historyData.length > 0) ?
          <div className='transactions-wrapper'>
            {
              historyData.map(({ credentials, data, total, id }) => {
                return <div className='single-transaction' key={id}>
                  <h4>Order Transaction Info: <RiDeleteBinLine onClick={() => { deleteTransaction(id) }} className='delete-transaction' /></h4>
                  <p>Shipping cost: <span>$<strong>4</strong></span></p>
                  <p>Overall products cost: <span>$<strong>{total}</strong></span></p>
                  <p>Total cost: <span>$<strong>{total + 4}</strong></span></p>
                  <ul className='card-credentials-list'>
                    <li><p><strong>card name:</strong> <span>{credentials?.cardName}</span></p></li>
                    <li><p><strong>card number:</strong> <span>{credentials?.cardNumber}</span></p></li>
                    <li><p><strong>card expiry:</strong> <span>{credentials?.cardExpiry}</span></p></li>
                    <li><p><strong>card cvv:</strong> <span>{credentials?.cardCvv}</span></p></li>
                    <li><p><strong>card type:</strong> <span>{credentials?.cardType}</span></p></li>
                  </ul>
                  <Order data={data} />
                </div>
              })

            }
          </div>
          : <p className='no-history-indicator'>No Transaction History Yet....</p>
      }
    </div>
  )
}
export default History