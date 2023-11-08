import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';
import usePendingBooking from '../../hook/usePendingBooking';
import { Link } from 'react-router-dom';
import MyBookingRow from './myBookingRow';
import useMyBookings from '../../hook/useMyBookings';
import MyPendingBookingsRow from './MyPendingBookingsRow';

const MySchedules = () => {
    useTitle('My Schedules');
    const [myBookings, reload = refetch] = useMyBookings();
    const [myPendingBookings, refetch] = usePendingBooking();

    return (
        <div>
            <SectionTitle sectionTitle={'My Schedules'} />

            <div className='w-fit bg-green-200 rounded-md py-2 px-4 text-xl font-semibold mb-4'>
                <h3>My Bookings: {myBookings.length}</h3>
            </div>
            <>{myBookings.length > 0 ? <>
                <div className="overflow-x-auto">
                    <table className="w-full p-3 text-xs text-left whitespace-nowrap">
                        <thead>
                            <tr className="bg-green-500 text-white text-lg">
                                <th className="p-3">No</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {myBookings.map((myBooking, index) => <MyBookingRow
                                key={index}
                                index={index}
                                myBooking={myBooking}
                                reload={reload}
                            />)}
                        </tbody>
                    </table>
                </div></> :
                <div className='flex items-center justify-center py-12'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-center text-2xl text-red-500 font-normal'>You can not Purchase any service.</h2>
                        <Link to='/services' className='w-fit py-2 px-4 border border-rose-500 hover:bg-rose-500 hover:text-white rounded font-semibold transition-all duration-300'>Explore our services</Link>
                    </div>
                </div>
            }

            </>


            {/* Pending bookings section */}
            <div className='w-fit bg-red-200 rounded-md py-2 px-4 text-xl font-semibold mt-16 mb-6'>
                <h3>My Pending Works: {myPendingBookings?.length}</h3>
            </div>

            <>{myPendingBookings?.length > 0 ? <>

                <div className="overflow-x-auto">
                    <table className="w-full p-3 text-xs text-left whitespace-nowrap">
                        <thead>
                            <tr className="bg-rose-500 text-white text-lg">
                                <th className="p-3">No</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {
                                myPendingBookings.map((pendingBookings, i) => <MyPendingBookingsRow
                                    key={pendingBookings._id}
                                    index={i}
                                    pendingBookings={pendingBookings}
                                    refetch={refetch}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </> :

                <div className='flex items-center justify-center py-12'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-center text-2xl text-red-500 font-normal'>Nobody can not Purchase your service.</h2>
                    </div>
                </div>
            }</>

        </div>
    );
};

export default MySchedules;