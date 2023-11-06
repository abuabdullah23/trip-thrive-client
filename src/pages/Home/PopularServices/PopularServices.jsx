import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServicesCard from '../../../components/ServicesCard/ServicesCard';
import { Link } from 'react-router-dom';

const PopularServices = () => {
    return (
        <div className='py-12'>
            <SectionTitle sectionTitle={'Popular Services'} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    [1, 2, 3, 4].map((service, i) => <ServicesCard
                        key={i}
                        service={service}
                    />)
                }
            </div>

            <div className='mt-12 flex items-center justify-center'>
                <Link to='/services' className='py-2 px-8 border border-rose-500 hover:bg-rose-500 hover:text-white rounded font-semibold transition-all duration-300'>Show All</Link>
            </div>
        </div>
    );
};

export default PopularServices;