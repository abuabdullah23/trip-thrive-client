import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyBookings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // get my pending bookings data
    const { data: myBookings = [], refetch } = useQuery({
        queryKey: ['myBookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/get-my-booking?userEmail=${user?.email}`)
            return res.data;
        }
    })
    return [myBookings, refetch];
};

export default useMyBookings;