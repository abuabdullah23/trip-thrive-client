import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServicesCard = ({ singleService }) => {
    const { _id, service, image, price, providerName, providerEmail, providerPhoto, location, description } = singleService;

    return (
        <div className='flex flex-col gap-2 border border-rose-200 rounded-lg overflow-hidden text-slate-700'>
            <div className='relative'>
                <img className='h-[196px] w-full object-cover relative' src={image} alt="service image" />

                <div className='flex items-center gap-3 p-3 text-white w-full bg-gray-950/90 absolute left-0 bottom-0'>
                    <img title='Service provider photo' className='h-8 w-8 border border-rose-400 rounded-full' src={providerPhoto} alt="user photo" />

                    <div className='flex flex-col'>
                        <span title='Provider name' className='text-xl font-semibold'>{providerName}</span>
                    </div>
                </div>
            </div>

            <div className='px-3 flex flex-col gap-2 mb-2'>
                <h2 className='text-lg font-bold leading-tight'>{service}</h2>
                <p className='text-red-600 text-lg font-bold'><span className='text-base font-normal text-gray-600'>Price:</span> ${price}</p>
                <p>{description}</p>
                <Link to={`/service-details/${_id}`} className='w-full py-1 rounded text-white text-center font-normal bg-rose-500 hover:bg-rose-600 flex items-center gap-1 hover:gap-2 transition-all duration-300 justify-center'>
                    <span>View Details</span>
                    <BsArrowRightShort className='text-2xl mt-[2px]' />
                </Link>
            </div>

        </div>
    );
};

export default ServicesCard;