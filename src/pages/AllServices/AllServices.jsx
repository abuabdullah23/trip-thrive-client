import { BiSearch } from "react-icons/bi";
import AllServicesCard from "./AllServicesCard";
import useTitle from "../../hook/useTitle";
import useAllServices from "../../hook/useAllServices";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import EmptyContent from "../../components/EmptyContent/EmptyContent";

const AllServices = () => {
    useTitle('All Services');
    const allServices = useAllServices();
    const [servicesLength, setServicesLength] = useState(6);

    const handleShowAllData = () => {
        setServicesLength(allServices?.length);
    }

    // search method
    const [searchValue, setSearchValue] = useState('');
    const [filteredServices, setFilteredServices] = useState([]);

    // Filter the services data by search value
    useEffect(() => {
        if (searchValue) {
            const filteredData = allServices?.filter((name) =>
                name.service.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredServices(filteredData);
        } else {
            setFilteredServices(allServices);
        }
    }, [searchValue, allServices]);

    // scroll motion
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (
        <>
            <motion.div className="fixed top-[49px] left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-500 z-10 transform origin-top-left" style={{ scaleX }} />

            <div className="w-full flex flex-col gap-12">
                <div className="flex items-center justify-center">
                    <div className="relative w-full md:w-2/3 lg:w-1/2">
                        <input
                            onChange={(text) => setSearchValue(text.target.value)}
                            type="text" placeholder="search by services name" className="w-full py-3 px-5 outline-none border border-gray-300 focus:border-rose-500 rounded-full" />
                        <BiSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                <div className='w-full grid gap-6'>
                    {
                        filteredServices.length > 0
                            ? <>
                                {
                                    filteredServices?.slice(0, servicesLength).map((services, i) => <AllServicesCard
                                        key={i}
                                        services={services}
                                    />)
                                }
                            </>
                            :
                            <>
                                <EmptyContent emptyText={'Not Matched any service. Try again.'} />
                            </>
                    }
                </div>
                <div className={`mt-6 flex items-center justify-center ${servicesLength === filteredServices?.length || filteredServices?.length < 7 ? 'hidden' : ''}`} >
                    <button onClick={handleShowAllData} className='py-2 px-8 border border-rose-500 hover:bg-rose-500 hover:text-white rounded font-semibold transition-all duration-300'>Show All Services</button>
                </div>
            </div>
        </>
    );
};

export default AllServices;