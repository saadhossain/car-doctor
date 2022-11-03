import React from 'react';
import { Link } from 'react-router-dom';

const HomeServices = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className='border border-slate-300 rounded-lg p-3'>
                <img src={img} alt='' className='h-56 rounded-t-lg' />
                <div className='p-2 flex flex-col gap-2'>
                    <h3 className='text-xl font-bold'>{title}</h3>
                    <h3 className='text-xl font-semi text-car'>Price : ${price}</h3>
                    <Link to={`/checkout/${_id}`}><button className='bg-car py-2 px-3 rounded text-white'>Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;