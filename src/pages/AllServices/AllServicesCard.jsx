import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AllServicesCard = ({ services }) => {
    return (
        <div className='flex flex-col gap-2 md:flex-row border border-rose-200 rounded-lg overflow-hidden text-slate-700'>
            <div className='h-[164px] md:h-[240px] transition-all duration-300 w-full md:w-1/3'>
                <img className='h-full w-full object-cover relative' src="https://i.ibb.co/k2mfbrY/slider1.jpg" alt="service image" />
            </div>

            <div className='px-3 py-1 md:py-2 flex flex-col gap-2 mb-2 w-full md:w-2/3'>
                <h2 className='text-xl font-bold leading-tight'>Ride Sharing for senior person</h2>
                <p>How Ride-Sharing Services are Transforming Senior Transportation</p>

                <p className='text-red-500 text-lg font-bold'><span className='text-base font-normal text-gray-600'>Price:</span> $254</p>

                <div className='flex items-center gap-3'>
                    <img title='Service provider photo' className='h-8 w-8 border border-rose-400 rounded-full' src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt="user photo" />

                    <div className='flex flex-col'>
                        <span title='Provider name' className='text-xl font-semibold'>Ruhan ahmed</span>
                    </div>
                </div>

                <div className='flex justify-start mt-2'>
                    <Link to={`/service-details/${'213'}`} className='w-fit px-5 py-1 rounded text-white text-center font-normal bg-rose-500 hover:bg-rose-600 flex items-center gap-1 hover:gap-2 transition-all duration-300 justify-center'>
                        <span>View Details</span>
                        <BsArrowRightShort className='text-2xl mt-[2px]' />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AllServicesCard;