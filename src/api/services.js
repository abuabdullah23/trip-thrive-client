// get all services
export const getAllServices = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/get-services`)
    const data = await response.json();
    return data;
}