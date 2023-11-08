import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const MyBookingRow = ({ myBooking, reload, index }) => {
    const { _id, name, image, price, providerName, providerEmail, status, location, takingDate } = myBooking;
    const axiosSecure = useAxiosSecure();

    // delete booking by id
    const handleDeleteBooking = () => {
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
                axiosSecure.delete(`/delete-my-booking/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success('Delete your booking successful');
                            reload();
                        }
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        })
    }

    return (
        <tr className='bg-green-50 rounded-md border-b border-gray-300 hover:bg-green-200'>
            <td className="pl-5 text-xl font-medium">{index + 1}</td>
            <td className="px-3 py-2 w-32 h-20">
                <img className='w-full h-full object-cover rounded' src={image} alt="service image" />
            </td>
            <td className="px-3 py-2 ">
                <p className="text-lg text-gray-800 font-semibold">Service: {name.slice(0, 36)}...</p>
                <span className='text-base text-gray-500'>Provider: {providerName}</span>
                <p className='text-base text-gray-500'>Provider Email: {providerEmail}</p>
            </td>
            <td className="px-3 py-2">
                <p className='text-lg font-semibold'>{location}</p>
                <p className='text-base font-normal'>Date: {takingDate}</p>
            </td>
            <td className="px-3 py-2">
                <p className='text-lg font-semibold'>${price}</p>
            </td>
            <td className="px-3 py-2">
                <p className={`text-lg font-semibold ${status === 'pending' ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
            </td>
            <td className="px-3 py-2">
                <button
                    disabled={status === 'in progress' || status === 'completed' ? true : false}
                    onClick={handleDeleteBooking} className='p-2 bg-rose-500 w-fit rounded-sm text-white hover:bg-rose-400'> <FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default MyBookingRow;