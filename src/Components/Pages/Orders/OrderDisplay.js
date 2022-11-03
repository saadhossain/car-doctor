import React from 'react';

const OrderDisplay = ({order}) => {
    const {img, title,price} = order;
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
                                <button className="py-2 px-2 rounded-md bg-car text-white">Cancel</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default OrderDisplay;