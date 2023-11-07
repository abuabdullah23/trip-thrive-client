import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';
import MyServicesCard from './MyServicesCard';

const MyServices = () => {
    useTitle('My Services');
    const myServices = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div>
            <SectionTitle sectionTitle={'Manage Services'} />

            {/* User Info */}
            <div className='flex items-center gap-3 p-3 text-gray-600 text-lg w-full border-2 border-rose-200 rounded-md'>
                <img title='Service provider photo' className='h-8 w-8 border border-rose-400 rounded-full' src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt="user photo" />

                <div className='flex flex-col'>
                    <span title='Provider name' className='text-xl font-semibold'>Ruhan ahmed</span>
                </div>
                <span>|</span>
                <p>My all services: {myServices.length}</p>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    myServices.map((service, i) => <MyServicesCard
                        key={i}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default MyServices;