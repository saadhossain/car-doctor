import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title, price, _id, img } = useLoaderData()
    const [customerInfo, setCustomerInfo] = useState({})

    const handlePlaceOrder = () => {
        const orderInfo = {
            service_id: _id,
            img,
            title,
            price,
            customerName: `${customerInfo.firstname} ${customerInfo.lastname}`,
            email: customerInfo.email,
            phone: customerInfo.phone,
            city: customerInfo.city

        };
        if (customerInfo.email) {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Order Placed Successfully...')
                    }
                })
        }
        else{
            toast.error('Please Input Billing Information...')
            return
        }


    }
    const handleInputValue = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const customer = { ...customerInfo }
        customer[field] = value;
        setCustomerInfo(customer)
    }
    return (
        <div className='w-10/12 mx-auto py-5'>
            <div className='flex gap-10'>
                {/* Billing Information */}
                <div className='w-3/5'>
                    <h2 className='text-2xl font-font text-car mb-2'>Billing Details</h2>
                    <div className="flex flex-col  p-5 rounded-md">
                        <form className="w-full">
                            <div className='flex gap-2 mb-2'>
                                <span>
                                    <label htmlFor='firstname' className='block text-md font-semibold'>First Name</label>
                                    <input onBlur={handleInputValue} type="text" name='firstname' className="input input-bordered w-full" />
                                </span>
                                <span>
                                    <label htmlFor='lastname' className='block text-md font-semibold'>Last Name</label>
                                    <input onBlur={handleInputValue} type="text" name='lastname' className="input input-bordered w-full" />
                                </span>
                            </div>
                            <div className='flex gap-2 mb-2'>
                                <span>
                                    <label htmlFor='phone' className='block text-md font-semibold'>Phone Number</label>
                                    <input onBlur={handleInputValue} type="text" name='phone' className="input input-bordered w-full" />
                                </span>
                                <span>
                                    <label htmlFor='email' className='block text-md font-semibold'>Email Address</label>
                                    <input onBlur={handleInputValue} type="text" name='email' className="input input-bordered w-full" />
                                </span>
                            </div>
                            <div className='flex gap-2 mb-2'>
                                <span>
                                    <label htmlFor='post' className='block text-md font-semibold'>Post Code</label>
                                    <input onBlur={handleInputValue} type="text" name='post' className="input input-bordered w-full" />
                                </span>
                                <span>
                                    <label htmlFor='city' className='block text-md font-semibold'>City</label>
                                    <select name="city" id="city" className="input input-bordered w-full">
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chattogram">Chattogram</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                    </select>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Product details */}
                <div className='w-2/5'>
                    <h2 className='text-2xl font-font text-car mb-2'>Product Details</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{title}</td>
                                    <td>${price}</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td>Free</td>
                                </tr>
                                <tr className='font-bold'>
                                    <td>Total</td>
                                    <td>${price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className='text-2xl font-font text-car mb-2'>Payment Method</h2>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-5">
                            <input type="checkbox" className="checkbox" disabled />
                            <span className="label-text text-xl">Credit Card</span>
                        </label>
                        <label className="label cursor-pointer justify-start gap-5">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-xl">Cash on Delivery</span>
                        </label>
                    </div>
                    <button onClick={handlePlaceOrder} type='submit' className='py-2 px-3 bg-car text-white font-semibold rounded-md'>Place Order</button>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Checkout;