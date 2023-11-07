import React, { useState } from 'react';
import useTitle from '../../hook/useTitle';
import BookingModal from '../../components/Modal/BookingModal';

const ServiceDetails = () => {
    useTitle('Service Details');

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className='w-full py-12 flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-2/5 h-[180px] md:h-[360px] lg:h-[512px] transition-all duration-300 p-3 border border-rose-400 rounded-md'>
                <img className='h-full w-full object-cover rounded-md' src="https://i.ibb.co/k2mfbrY/slider1.jpg" alt="service image" />
            </div>
            <div className='w-full md:w-3/5'>

                <div className='px-3 py-1 md:py-2 flex flex-col gap-3 mb-2 w-full text-gray-600'>
                    <span className='text-gray-400 text-lg font-semibold'>Service Information:</span>
                    <h2 className='text-3xl font-bold leading-tight w-full'>Ride Sharing for senior person, child and others</h2>
                    <p> <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum deserunt repellendus cumque ipsa unde ullam, officiis nobis tenetur ea eos debitis alias animi odit veritatis harum minima cum, ipsam expedita et enim! Quia atque iste adipisci cumque quos mollitia quasi placeat non labore laudantium! Exercitationem, illo? Voluptatem, quis ea.</p>

                    <div className='flex items-center gap-3'>
                        <p className='text-red-500 text-lg font-bold'><span className='text-base font-normal text-gray-600'>Price:</span> $254</p>
                        <button onClick={() => setIsOpen(true)} className='text-lg font-semibold py-1 px-4 rounded border border-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300'>Book Now</button>
                    </div>


                    <span className='text-gray-400 text-lg font-semibold mt-4'>Service Provider Information:</span>
                    <div className='flex items-start gap-3'>
                        <img title='Service provider photo' className='h-16 w-16 border border-rose-400 rounded-full' src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt="user photo" />

                        <div className='flex flex-col'>
                            <p title='Provider name' className='text-2xl font-semibold'><span>Name:</span> Ruhan ahmed</p>
                            <p className='text-base text-gray-500 font-semibold'>Location: Rangpur, Bangladesh</p>
                            <p className='text-base'><span className='font-semibold'>Provider info:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cum sapiente voluptates perspiciatis minus, ipsum voluptatum labore nisi numquam nesciunt!</p>
                        </div>
                    </div>

                </div>
            </div>

            <BookingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeModal={closeModal} />
        </div>
    );
};

export default ServiceDetails;