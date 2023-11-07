import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import BookingModal from '../../components/Modal/BookingModal';
import { getSingleService } from '../../api/services';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    useTitle('Service Details');
    const { id } = useParams();
    const [singleService, setService] = useState([])
    const { _id, service, image, price, providerName, providerInfo, providerEmail, providerPhoto, location, description } = singleService;

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    // get single service
    useEffect(() => {
        getSingleService(id)
            .then(data => setService(data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div className='w-full flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-2/5 h-[180px] md:h-[360px] lg:h-[512px] transition-all duration-300 p-3 border border-rose-400 rounded-md'>
                <img className='h-full w-full object-cover rounded-md' src={image} alt="service image" />
            </div>
            <div className='w-full md:w-3/5'>

                <div className='px-3 py-1 md:py-2 flex flex-col gap-3 mb-2 w-full text-gray-600'>
                    <span className='text-gray-400 text-lg font-semibold'>Service Information:</span>
                    <h2 className='text-3xl font-bold leading-tight w-full'>{service}</h2>
                    <p> <strong>Description:</strong> {description} </p>

                    <div className='flex items-center gap-3'>
                        <p className='text-red-500 text-lg font-bold'><span className='text-base font-normal text-gray-600'>Price:</span> ${price}</p>
                        <button onClick={() => setIsOpen(true)} className='text-lg font-semibold py-1 px-4 rounded border border-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300'>Book Now</button>
                    </div>


                    <span className='text-gray-400 text-lg font-semibold mt-4'>Service Provider Information:</span>
                    <div className='flex items-start gap-3'>
                        <img title='Service provider photo' className='h-16 w-16 border border-rose-400 rounded-full' src={providerPhoto} alt="Service provider photo" />

                        <div className='flex flex-col'>
                            <p title='Provider name' className='text-2xl font-semibold'><span>Name:</span> {providerName}</p>
                            <p className='text-base text-gray-500 font-semibold'>Location: {location}</p>
                            <p className='text-base'><span className='font-semibold'>Provider info:</span> {providerInfo}</p>
                        </div>
                    </div>

                </div>
            </div>

            <BookingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeModal={closeModal}
                singleService={singleService}
            />
        </div>
    );
};

export default ServiceDetails;