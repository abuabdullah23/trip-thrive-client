import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';
import useAuth from '../../hook/useAuth';
import { useParams } from 'react-router-dom';
import { getSingleService } from '../../api/services';
import Loader from '../../components/Loader/Loader';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const UpdateService = () => {
    useTitle('Add new Service');
    const { user } = useAuth();
    const { id } = useParams();
    const [loader, setLoader] = useState(false);
    const [singleService, setService] = useState([])
    const axiosSecure = useAxiosSecure();
    const { _id, service, image, price, providerName, providerInfo, providerEmail, location, description } = singleService;

    // get single service
    useEffect(() => {
        getSingleService(id)
            .then(data => setService(data))
            .catch(error => console.log(error))
    }, [id])

    // update service method
    const handleUpdateService = (event) => {
        event.preventDefault();
        setLoader(true);
        const form = event.target;
        const service = form.service.value;
        const image = form.image.value;
        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const location = form.location.value;
        const price = form.price.value;
        const description = form.description.value;
        const providerInfo = form.providerInfo.value;
        const updateInfo = {
            service,
            image,
            providerName,
            providerEmail,
            providerPhoto: user?.photoURL,
            price: parseInt(price),
            location,
            description,
            providerInfo
        }

        // update service using axiosSecure
        axiosSecure.put(`/update-service/${_id}`, updateInfo)
            .then(res => {
                console.log(res.data.modifiedCount);
                if (res.data.modifiedCount > 0) {
                    toast.success('Update service successful');
                    setLoader(false);
                }
                else {
                    toast.error('You cannot change anything.');
                    setLoader(false);
                }
            })
            .catch(error => {
                toast.error(error.message);
                setLoader(false)
            })
    }

    return (
        <div>
            <SectionTitle sectionTitle={'Update Your Service'} />

            <div className='flex items-center justify-center mb-8'>
                <img className='h-[120] w-[240px] border p-1 object-cover rounded-sm' src={image} alt="" />
            </div>

            <form onSubmit={handleUpdateService}>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Photo Url</label>
                            <input required type="text" name='image' defaultValue={image} placeholder='Photo Url is here' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Service Name</label>
                            <input required type="text" name='service' defaultValue={service} placeholder='Service name is here' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Provider Name</label>
                            <input readOnly value={providerName} type="text" name='providerName' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Provider Email</label>
                            <input readOnly value={providerEmail} type="text" name='providerEmail' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Price</label>
                            <input required type="number" min={0} name='price' placeholder='$ Price' defaultValue={price} className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Location</label>
                            <input required type="text" name='location' placeholder='Location/Area' defaultValue={location} className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full  md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Description</label>
                            <textarea required type="text" name='description' placeholder='Write your service description' defaultValue={description} className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full  md:w-1/2'>
                            <label className='font-semibold' htmlFor="">About you</label>
                            <textarea required type="text" name='providerInfo' placeholder='Write about you...' defaultValue={providerInfo} className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>
                    <div className='flex justify-center w-full mt-5'>
                        <button
                            disabled={loader ? true : false}
                            type="submit"
                            className={`py-2 px-4 w-fit bg-rose-500 hover:shadow-rose-500/20 hover:shadow-lg font-semibold text-white rounded-md mb-3 ${loader && 'bg-rose-400'} `}>
                            {
                                loader ? <Loader loadingText={'Updating...'} /> : 'Update Service'
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateService;