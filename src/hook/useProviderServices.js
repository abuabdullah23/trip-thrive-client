import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useProviderServices = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: providerServices = [], refetch } = useQuery({
        queryKey: ['services', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`get-provider-services?providerEmail=${user?.email}`)
            return res.data;
        }
    })
    return [providerServices, refetch];
};

export default useProviderServices;