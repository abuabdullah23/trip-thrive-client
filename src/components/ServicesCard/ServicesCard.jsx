import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServicesCard = ({ singleService }) => {
    const { _id, service, image, price, providerName, providerEmail, providerPhoto, location, description } = singleService;

    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-3 transition-all duration-300 border border-rose-200 rounded-lg overflow-hidden text-slate-700'>
            <div className='w-full lg:w-1/3'>
                <img className='h-full w-full object-cover relative' src={image} alt="service image" />
            </div>

            <div className='px-2 py-1 flex flex-col gap-[6px] mb-2 w-full lg:w-2/3'>
                <h2 className='text-lg font-bold leading-tight'>{service}</h2>
                <p>{description.slice(0, 60)}...</p>

                <div className='flex items-center gap-3'>
                    <img title='Service provider photo' className='h-8 w-8 border border-rose-400 rounded-full' src={providerPhoto} alt="user photo" />

                    <div className='flex flex-col'>
                        <span title='Provider name' className='text-xl font-semibold'>{providerName}</span>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-2 pr-1'>
                    <p className='text-rose-500 text-lg font-bold'><span className='font-normal text-gray-600'>Price:</span> ${price}</p>
                    
                    <Link to={`/service-details/${_id}`} className='w-fit mt-2 py-1 px-3 rounded text-white text-center font-normal bg-rose-500 hover:bg-rose-600 flex items-center gap-1 hover:gap-2 transition-all duration-300 justify-center'>
                        <span>View Details</span>
                        <BsArrowRightShort className='text-2xl mt-[2px]' />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServicesCard;