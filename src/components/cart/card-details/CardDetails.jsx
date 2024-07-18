import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCartItems } from '../../../db/indexedDB';
import CardCredentials from './CardCredentials';
import './CardDetails.css';
import CardType from './CardType';
import TotalCounts from './TotalCounts';

const CardDetails = ({total}) => {
  const [credentials, setCredentials] = useState({});
  const [data, setData] = useState([]);
  
  const [reset, setReset] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.cardType) {
      toast.error("choose 'card type'")
    } else {
      console.log(credentials, 'card cred');
      console.log(data, 'products');
      console.log(total + 4, 'products');
      setReset(true)
      setCredentials({})
      toast.success('Form submitted');
    }
  };

  const dataFetching = useCallback(async () => {
    let dataP = await getCartItems()
    setData(dataP.arr)
  }, [])

  useEffect(() => {
    dataFetching();
  }, [dataFetching])

  useEffect(() => {
    
  }, [])

  return (
    <div className='card-details'>
      <div className='card-title-wrapper'>
        <h3>Card Details</h3>
        <img src="https://s3-alpha-sig.figma.com/img/e328/8c96/e6e92ecd0a4e3d8eae3e4490ce9ce877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~Kl5DhDnWGyz5reL-dHjJs-~caAEQIM7LW-uWrlW-jpUCSxXFYbUoP9eijNL70t8e1LvDvkX8rR--saBsn8ZzDi6UeQnpu7tFX3ZoR3V8N0SkFYzeEkjnv67GEO9Tzhrag3aAf6vE4Qm2KRB0WEGfbKWgLMlbxWp6IEss8xZEpq-wG7X4Vwp7ulrQBtWZ3VW2gqPXVGDKv9ixyyyhLu3p5DBqdcwK0Fdt5Ayw~41yP3fI32G0bYr24qYR4earCXdk1peuMKZ~C8k5MMYlLZEZrCNEnpEcnuTPS8Q41Uf2Oo3X5W2ZI~QeFOyfXa8q8Mp21mmDEV9UG9HDof4ZpbXg__" alt="profile" />
      </div>
      <form onSubmit={handleSubmit}>
        <CardType setCredentials={setCredentials} reset={reset} />
        <CardCredentials reset={reset} setReset={setReset} credentials={credentials} setCredentials={setCredentials} />
        <hr style={{ border: "1px, solid, #5F65C3", marginBottom: "14px" }} />
        <TotalCounts total={total} />
      </form>
      <ToastContainer />
    </div>
  )
}

export default CardDetails