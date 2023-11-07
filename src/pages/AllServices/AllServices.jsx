import { BiSearch } from "react-icons/bi";
import AllServicesCard from "./AllServicesCard";
import useTitle from "../../hook/useTitle";

const AllServices = () => {
    useTitle('All Services')
    const services = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="w-full flex flex-col gap-12">
            <div className="flex items-center justify-center">
                <div className="relative w-full md:w-2/3 lg:w-1/2">
                    <input type="text" placeholder="search by services name" className="w-full py-3 px-5 outline-none border border-gray-300 focus:border-rose-500 rounded-full" />
                    <BiSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div>
            </div>

            <div className='w-full grid gap-6'>
                {
                    services.map((services, i) => <AllServicesCard
                        key={i}
                        services={services}
                    />)
                }
            </div>
        </div>
    );
};

export default AllServices;