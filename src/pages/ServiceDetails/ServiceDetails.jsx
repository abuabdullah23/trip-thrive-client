import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import BookingModal from '../../components/Modal/BookingModal';
import { getAllServices, getSingleService } from '../../api/services';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { motion, useScroll, useSpring } from "framer-motion";
import EmptyContent from '../../components/EmptyContent/EmptyContent';

const ServiceDetails = () => {
    useTitle('Service Details');
    const { id } = useParams();
    const [singleService, setService] = useState([])
    const { _id, service, image, price, providerName, providerInfo, providerEmail, providerPhoto, location, description } = singleService;
    const [allServices, setAllServices] = useState([]);

    // filter related services
    const relatedServices = allServices?.filter((services) => services.providerEmail === providerEmail);

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

    // get all services for related services
    useEffect(() => {
        getAllServices()
            .then(data => setAllServices(data))
            .catch(error => console.log(error))
    }, [providerEmail])

    // scroll motion
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="fixed top-[49px] left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-500 z-10 transform origin-top-left" style={{ scaleX }} />

            <div className='w-full flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-2/5 h-[300px] md:h-[360px] lg:h-[512px] transition-all duration-300 p-3 border border-rose-400 rounded-md'>
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

            {/* Related Products */}
            {
                relatedServices?.length > 1 ? <section className='w-full h-full mx-auto'>
                    <h2 className='text-2xl font-semibold mt-16 mb-5 text-slate-600 '>Related Services</h2>
                    <div>
                        <Swiper
                            slidesPerView='auto'
                            breakpoints={{
                                1280: {
                                    slidesPerView: 4
                                },
                                565: {
                                    slidesPerView: 3
                                },
                                340: {
                                    slidesPerView: 2
                                },
                            }}
                            spaceBetween={25}
                            loop={true}
                            pagination={{
                                clickable: true,
                                el: '.custom_bullet'
                            }}
                            modules={[Pagination]}
                            className='mySwipper'
                        >
                            {
                                relatedServices?.map((p, i) => <SwiperSlide key={i}>
                                    <Link to={`/service-details/${p._id}`}>
                                        <div className='w-full h-[240px] '>
                                            <img className='object-cover w-full h-full' src={p.image} alt="product image" />
                                            <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-10 hover:opacity-50 transition-all duration-500'>
                                            </div>
                                        </div>
                                        <div className='p-4 flex flex-col gap-1'>
                                            <h2 className=' text-lg'>{p.service.slice(0, 25)}...</h2>
                                            <div className='flex justify-start items-center gap-3'>
                                                <h2 className='text-rose-500 text-lg font-bold'>Price: ${p.price}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                    <div className='w-full flex justify-center items-center py-10'>
                        <div className='custom_bullet justify-center gap-3 !w-auto'></div>
                    </div>
                </section > :
                    <div className='flex items-center flex-col justify-center py-24 text-center'>
                        <EmptyContent />
                        <p className='text-4xl font-thin text-rose-500'>No related services available</p>
                    </div>
            }

        </>

    );
};

export default ServiceDetails;