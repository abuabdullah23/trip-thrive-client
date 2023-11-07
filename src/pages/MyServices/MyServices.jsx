import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';
import MyServicesCard from './MyServicesCard';
import useAuth from '../../hook/useAuth';
import useProviderServices from '../../hook/useProviderServices';

const MyServices = () => {
    useTitle('My Services');
    const { user } = useAuth();
    const [providerServices, refetch] = useProviderServices();

    return (
        <div>
            <SectionTitle sectionTitle={'Manage Services'} />

            {/* User Info */}
            <div className='flex items-center gap-3 p-3 text-gray-600 text-lg w-full border-2 border-rose-200 rounded-md'>
                <img title='Service provider photo' className='h-8 w-8 border border-rose-400 rounded-full' src={user?.photoURL} alt="provider photo" />

                <div className='flex flex-col'>
                    <span title='Provider name' className='text-xl font-semibold'>{user.displayName}</span>
                </div>
                <span>|</span>
                <p>My all services: {providerServices.length}</p>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    providerServices.map((service, i) => <MyServicesCard
                        key={i}
                        singleService={service}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default MyServices;