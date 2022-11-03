import React from 'react';

const OrderDisplay = ({order, cancelOrder, handleStatusUpdate}) => {
    const {_id, img, title,price, status} = order;
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr className='border-b-2 border-slate-200'>
                            <td>
                                <div className="flex items-center space-x-2 text-left">
                                    <img src={img} alt={title} className="rounded-lg w-20 h-20"/>
                                    <div>
                                        <div className="font-bold">{title}</div>
                                        <div className="text-sm opacity-50">Quantity: 1</div>
                                    </div>
                                </div>
                            </td>
                            <td className='font-bold'>
                                Price: ${price}
                            </td>
                            <td className='font-bold'>Total: ${price}</td>
                            <th>
                                <button onClick={()=> cancelOrder(_id)} className="p-3 rounded-full bg-car text-white">X</button>
                                <button onClick={()=> handleStatusUpdate(_id)} className={`py-2 px-2 rounded-md text-white ml-2 ${status? 'bg-green-600': 'bg-car'}`}>{status ? status : 'Pending'}</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default OrderDisplay;