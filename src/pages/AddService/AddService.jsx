import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hook/useTitle';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const AddService = () => {
    useTitle('Add new Service');
    const { user } = useAuth();
    const [loader, setLoader] = useState(false);
    const axiosSecure = useAxiosSecure();

    // Add service method
    const handleAddService = (event) => {
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
        const serviceInfo = {
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

        axiosSecure.post('/add-service', serviceInfo)
            .then(res => {
                if (res.status === 200) {
                    toast.success('Added service successful');
                    setLoader(false);
                    form.reset('');
                }
            })
            .catch(error => {
                toast.error(error.message);
                setLoader(false)
            })
    }

    return (
        <div>
            <SectionTitle sectionTitle={'Add a new service'} />

            <form onSubmit={handleAddService}>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Photo Url</label>
                            <input required type="text" name='image' placeholder='Photo Url is here' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Service Name</label>
                            <input required type="text" name='service' placeholder='Service name is here' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Provider Name</label>
                            <input readOnly value={user?.displayName} type="text" name='providerName' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Provider Email</label>
                            <input readOnly value={user?.email} type="text" name='providerEmail' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Price</label>
                            <input required type="number" min={0} name='price' placeholder='$ Price' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Location</label>
                            <input required type="text" name='location' placeholder='Location/Area' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full  md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Description</label>
                            <textarea required type="text" name='description' placeholder='Write your service description' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full  md:w-1/2'>
                            <label className='font-semibold' htmlFor="">About you</label>
                            <textarea required type="text" name='providerInfo' placeholder='Write about you...' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>
                    <div className='flex justify-center w-full mt-5'>
                        <button
                            disabled={loader ? true : false}
                            type="submit"
                            className={`py-2 px-4 w-fit bg-rose-500 hover:shadow-rose-500/20 hover:shadow-lg font-semibold text-white rounded-md mb-3 ${loader && 'bg-rose-400'} `}>
                            {
                                loader ? <Loader loadingText={'Adding Service...'} /> : 'Add Service'
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;