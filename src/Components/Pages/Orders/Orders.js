import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import OrderDisplay from './OrderDisplay';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    const totalPrice = orders.reduce((prev, current) => prev + parseFloat(current.price), 0)
    useEffect(() => {
        fetch(`https://car-doctor-server-hazel.vercel.app/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email, logOut])

    //Handle Cancel Order
    const cancelOrder = (id) => {
        const agree = window.confirm('Do you Want to Cancel?')
        if (agree) {
            fetch(`https://car-doctor-server-hazel.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('One Item Cancelled')
                        const remainingItem = orders.filter(order => order._id !== id)
                        setOrders(remainingItem)
                    }
                })
        }
    }
    //Handle Update Status
    const handleStatusUpdate = (id) => {
        fetch(`https://car-doctor-server-hazel.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Your Order is Approved')
                    const remaining = orders.filter(order => order._id !== id);
                    const approved = orders.find(order => order._id === id);
                    approved.status = 'Approved';
                    const updatedOrders = [approved, ...remaining]
                    setOrders(updatedOrders)
                }
            })
    }
    return (
        <div className='w-11/12 lg:w-2/4 mx-auto py-10'>
            <h1 className='text-2xl font-bold text-car'>Order Summery</h1>
            <div>
                {
                    orders.map(order => <OrderDisplay
                        key={order._id}
                        order={order}
                        cancelOrder={cancelOrder}
                        handleStatusUpdate={handleStatusUpdate}
                    ></OrderDisplay>)
                }
            </div>
            <div className='my-5 p-5 bg-slate-300 rounded-md w-2/4 ml-auto text-right'>
                <h3 className='text-xl font-semibold'>Total Items: {orders.length}</h3>
                <h3 className='text-xl font-semibold'>Total Price : ${totalPrice}</h3>
                <h4 className='text-md font-semibold'>Delivery Charge : $0</h4>
                <hr className='border border-black' />
                <h2 className='text-2xl font-bold'>Sub Total : ${totalPrice}</h2>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Orders;