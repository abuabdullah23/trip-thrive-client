import { useEffect, useState } from "react";
import { getAllServices } from "../api/services";

const useAllServices = () => {
    const [allServices, setAllServices] = useState([]);

    // get all services
    useEffect(() => {
        getAllServices()
            .then(data => setAllServices(data))
    }, [])

    return allServices
};

export default useAllServices;