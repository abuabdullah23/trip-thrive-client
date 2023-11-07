import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hook/useTitle';

const AddService = () => {
    const loader = false;
    useTitle('Add new Service');

    return (
        <div>
            <SectionTitle sectionTitle={'Add a new service'} />

            <form>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Photo Url</label>
                            <input type="text" name='image' placeholder='Photo Url is here' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Service Name</label>
                            <input type="text" name='service' placeholder='Service name is here' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Provider Name</label>
                            <input readOnly type="text" name='providerName' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Provider Email</label>
                            <input readOnly type="text" name='service' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Price</label>
                            <input type="text" name='price' placeholder='$ Price' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Location</label>
                            <input type="text" name='location' placeholder='Location/Area' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start gap-1 w-full  md:w-1/2'>
                            <label className='font-semibold' htmlFor="">Description</label>
                            <textarea type="text" name='instruction' placeholder='Write your service description' className='w-full py-2 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                        </div>
                        <div className='flex items-end justify-center w-full md:w-1/2'>
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
                </div>
            </form>
        </div>
    );
};

export default AddService;