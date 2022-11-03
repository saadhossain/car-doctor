import React, { useEffect, useState } from 'react';
import OrderDisplay from './OrderDisplay';

const Orders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders);
    const totalPrice = orders.reduce((prev, current)=> prev + parseFloat(current.price), 0)
    console.log(totalPrice);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=tonuhossain92@gmail.com')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='w-2/4 mx-auto py-10'>
            <h1 className='text-2xl font-bold text-car'>Order Summery</h1>
            <div>
                {
                    orders.map(order => <OrderDisplay key={order._id} order={order}></OrderDisplay>)
                }
            </div>
            <div className='my-5 p-5 bg-slate-300 rounded-md w-2/4 ml-auto text-right'>
                <h3 className='text-xl font-semibold'>Total Items: {orders.length}</h3>
                <h3 className='text-xl font-semibold'>Total Price : ${totalPrice}</h3>
                <h4 className='text-md font-semibold'>Delivery Charge : $0</h4>
                <hr className='border border-black'/>
                <h2 className='text-2xl font-bold'>Sub Total : ${totalPrice}</h2>
            </div>
        </div>
    );
};

export default Orders;