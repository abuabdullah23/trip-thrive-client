import { BiSearch } from "react-icons/bi";
import AllServicesCard from "./AllServicesCard";
import useTitle from "../../hook/useTitle";
import useAllServices from "../../hook/useAllServices";
import { useState } from "react";

const AllServices = () => {
    useTitle('All Services');
    const allServices = useAllServices();
    const [servicesLength, setServicesLength] = useState(6);

    const handleShowAllData = () => {
        setServicesLength(allServices.length);
    }
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
                    allServices.slice(0, servicesLength).map((services, i) => <AllServicesCard
                        key={i}
                        services={services}
                    />)
                }
            </div>
            <div className={`mt-6 flex items-center justify-center ${servicesLength === allServices.length || allServices.length < 7 ? 'hidden' : ''}`} >
                <button onClick={handleShowAllData} className='py-2 px-8 border border-rose-500 hover:bg-rose-500 hover:text-white rounded font-semibold transition-all duration-300'>Show All Services</button>
            </div>
        </div>
    );
};

export default AllServices;