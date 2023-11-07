import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AllServicesCard = ({ services }) => {
    const { _id, service, image, price, providerName, providerEmail, providerPhoto, location, description } = services;

    return (
        <div className='flex flex-col gap-2 md:flex-row border border-rose-200 rounded-lg overflow-hidden text-slate-700'>
            <div className='h-[164px] md:h-[240px] transition-all duration-300 w-full md:w-1/3'>
                <img className='h-full w-full object-cover relative' src={image} alt="service image" />
            </div>

            <div className='px-3 py-1 md:py-2 flex flex-col gap-[6px] mb-2 w-full md:w-2/3'>
                <h2 className='text-xl font-bold leading-tight'>{service}</h2>
                <p>{description}</p>
                <p>Area: {location}</p>

                <p className='text-red-500 text-lg font-bold'><span className='text-base font-normal text-gray-600'>Price:</span> ${price}</p>

                <div className='flex items-center gap-3'>
                    <img title='Service provider photo' className='h-8 w-8 border border-rose-400 rounded-full' src={providerPhoto} alt="user photo" />

                    <div className='flex flex-col'>
                        <span title='Provider name' className='text-xl font-semibold'>{providerName}</span>
                    </div>
                </div>

                <div className='flex justify-start mt-2'>
                    <Link to={`/service-details/${_id}`} className='w-fit px-5 py-1 rounded text-white text-center font-normal bg-rose-500 hover:bg-rose-600 flex items-center gap-1 hover:gap-2 transition-all duration-300 justify-center'>
                        <span>View Details</span>
                        <BsArrowRightShort className='text-2xl mt-[2px]' />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AllServicesCard;