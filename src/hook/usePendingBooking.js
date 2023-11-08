import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePendingBooking = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // get my pending bookings data
    const { data: myPendingBookings = [], refetch } = useQuery({
        queryKey: ['pendingBookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/get-pending-booking?providerEmail=${user?.email}`)
            return res.data;
        }
    })
    return [myPendingBookings, refetch];
};

export default usePendingBooking;