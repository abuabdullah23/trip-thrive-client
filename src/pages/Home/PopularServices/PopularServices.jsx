import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServicesCard from '../../../components/ServicesCard/ServicesCard';
import { Link } from 'react-router-dom';
import useAllServices from '../../../hook/useAllServices';
import EmptyContent from '../../../components/EmptyContent/EmptyContent';

const PopularServices = () => {
    const allServices = useAllServices();

    return (
        <div className='py-12'>
            <SectionTitle sectionTitle={'Popular Services'} />

            <>
                {
                    allServices?.length > 0 ? <>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                allServices?.slice(0, 4).map((services, i) => <ServicesCard
                                    key={i}
                                    singleService={services}
                                />)
                            }
                        </div>

                        <div className='mt-12 flex items-center justify-center'>
                            <Link to='/services' className='py-2 px-8 border border-rose-500 hover:bg-rose-500 hover:text-white rounded font-semibold transition-all duration-300'>Show All</Link>
                        </div>
                    </> : <>
                        <div className='py-8'>
                            <EmptyContent emptyText={'Server Error, Services Not Found!'} />
                        </div>
                    </>
                }
            </>
        </div>
    );
};

export default PopularServices;