import React from 'react';
import { FaEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyServicesCard = () => {
    return (
        <div className='flex flex-col gap-2 border border-rose-200 rounded-lg overflow-hidden text-slate-700'>
            <div>
                <img className='h-[196px] w-full object-cover relative' src="https://i.ibb.co/k2mfbrY/slider1.jpg" alt="service image" />
            </div>

            <div className='px-3 flex flex-col gap-2 mb-2'>
                <h2 className='text-xl font-semibold leading-tight'>Ride Sharing for senior person</h2>
                <p>How Ride-Sharing Services are Transforming Senior Transportation</p>

                <div className='flex items-center justify-between'>
                    <p className='text-rose-500 text-lg font-bold'><span className='font-normal text-gray-600'>Price:</span> $254</p>

                    <div className='flex items-center justify-end gap-2 h-[32px]'>
                        <Link title='View Details' to={`/service-details/${'213'}`} className='w-fit h-full py-2 px-3 rounded text-white text-center font-normal bg-green-500 hover:bg-green-600 flex items-center gap-1 hover:scale-[103%] transition-all duration-300 justify-center'>
                            <FaEye />
                        </Link>
                        <button title='Edit Service' className='w-fit h-full py-2 px-3 rounded text-white text-center font-normal bg-yellow-400 hover:bg-yellow-500 flex items-center gap-1 hover:scale-[103%] transition-all duration-300 justify-center'>
                            <FaRegEdit />
                        </button>
                        <button title='Delete Service' className='w-fit h-full py-2 px-3 rounded text-white text-center font-normal bg-rose-500 hover:bg-rose-600 flex items-center gap-1 hover:scale-[103%] transition-all duration-300 justify-center'>
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyServicesCard;