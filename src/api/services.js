// get all services
export const getAllServices = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/get-services`)
    const data = await response.json();
    return data;
}

// get single service by id
export const getSingleService = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/service-details/${id}`)
    const data = await response.json();
    return data;
}