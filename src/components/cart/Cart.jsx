import React, { useCallback, useState, useEffect } from 'react';
import ShoppingCart from './shopping-cart/ShoppingCart';
import CardDetails from './card-details/CardDetails';
import History from './history/History';
import './Cart.css'
import { addHistory, deleteHistory, getHistories } from '../../db/historyIndexedDb';
import { getCartItems } from '../../db/indexedDB';
import { toast } from 'react-toastify';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([])
    const [historyTrans, setHistoryTrans] = useState(null);

    const deleteTransaction = async (id) => {
        if (confirm("Are you sure to delete?")) {
            await deleteHistory(id);
            const data1 = await getHistories();
            setHistoryTrans(data1)
            toast.success("deleted!", {
                transition: Flip,
                autoClose: 500
            })
        } else {
            toast.info("cancelled!", {
                transition: Flip,
                autoClose: 500
            })
        }
    }

    const fetchHistory = useCallback(async () => {
        const data1 = await getHistories();
        setHistoryTrans(data1)
    }, [])
    const fetchData = useCallback(async () => {
        const data2 = await getCartItems();
        setData(data2.arr)
    }, [])

    useEffect(() => {
        fetchHistory();
    }, [fetchHistory])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const addHistoryTransaction = async (d) => {
        await addHistory({ ...d })
        const getData = await getHistories();
        setHistoryTrans(getData)
    }
    return (
        <section className='cart-section'>
            <div className='cart-container'>
                <ShoppingCart data={data} setData={setData} setTotal={setTotal} />
                <CardDetails data={data} setData={setData} total={total} addHistoryTransaction={addHistoryTransaction} />
            </div>
            <div>
                <History deleteTransaction={deleteTransaction} historyTrans={historyTrans} />
            </div>
        </section>
    )
}

export default Cart