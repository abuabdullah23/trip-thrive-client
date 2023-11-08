import React from 'react';
import { FaEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const MyServicesCard = ({ singleService, refetch }) => {
    const { _id, service, image, price, description } = singleService;
    const axiosSecure = useAxiosSecure();

    // Delete service by id
    const handleDeleteService = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-service/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success('Delete your service successful');
                            refetch();
                        }
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        })
    }

    return (
        <div className='flex flex-col gap-2 border border-rose-200 rounded-lg overflow-hidden text-slate-700'>
            <div>
                <img className='h-[196px] w-full object-cover relative' src={image} alt="service image" />
            </div>

            <div className='px-3 flex flex-col gap-2 mb-2'>

                <h2 className='text-xl font-semibold leading-tight'>{service}</h2>
                <p className='flex-grow'>{description}</p>

                <div className='flex items-center justify-between'>
                    <p className='text-rose-500 text-lg font-bold'><span className='font-normal text-gray-600'>Price:</span> ${price}</p>

                    <div className='flex items-center justify-end gap-2 h-[32px]'>
                        <Link title='View Details' to={`/service-details/${_id}`} className='w-fit h-full py-2 px-3 rounded text-white text-center font-normal bg-green-500 hover:bg-green-600 flex items-center gap-1 hover:scale-[103%] transition-all duration-300 justify-center'>
                            <FaEye />
                        </Link>
                        <Link to={`/dashboard/my-service/update/${_id}`} title='Edit Service' className='w-fit h-full py-2 px-3 rounded text-white text-center font-normal bg-yellow-400 hover:bg-yellow-500 flex items-center gap-1 hover:scale-[103%] transition-all duration-300 justify-center'>
                            <FaRegEdit />
                        </Link>
                        <button onClick={handleDeleteService} title='Delete Service' className='w-fit h-full py-2 px-3 rounded text-white text-center font-normal bg-rose-500 hover:bg-rose-600 flex items-center gap-1 hover:scale-[103%] transition-all duration-300 justify-center'>
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyServicesCard;