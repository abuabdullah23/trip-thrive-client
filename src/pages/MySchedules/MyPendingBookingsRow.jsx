import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyPendingBookingsRow = ({ pendingBookings, refetch, index }) => {
    const { _id, name, image, price, userName, userEmail, status, location, takingDate } = pendingBookings;
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
                            toast.success('Delete your pending booking successful');
                            refetch();
                        }
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        })
    }

    // handleChangeStatus
    const handleChangeStatus = (e) => {
        const updateStatus = e.target.value;
        axiosSecure.patch(`/update-service-status/${_id}`, { updateStatus })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Updated Status Successful');
                    refetch();
                }
            })
    }

    return (
        <tr className='bg-rose-50 rounded-md border-b border-gray-300 hover:bg-rose-100'>
            <td className="pl-5 text-xl font-medium">{index + 1}</td>
            <td className="px-3 py-2 w-32 h-20">
                <img className='w-full h-full object-cover rounded' src={image} alt="service image" />
            </td>
            <td className="px-3 py-2 ">
                <p className="text-lg text-gray-800 font-semibold">Service: {name.slice(0, 36)}...</p>
                <span className='text-base text-gray-500'>User Name: {userName || 'Anonymous'}</span>
                <p className='text-base text-gray-500'>User Email: {userEmail}</p>
            </td>
            <td className="px-3 py-2">
                <p className='text-lg font-semibold'>{location}</p>
                <p className='text-base font-normal'>Date: {takingDate}</p>
            </td>
            <td className="px-3 py-2">
                <p className='text-lg font-semibold'>${price}</p>
            </td>
            <td className="px-3 py-2">
                <select defaultValue={status} onChange={handleChangeStatus} className={`text-base font-semibold bg-transparent outline-none border border-rose-300 rounded py-1 px-2`}>
                    <option value="">--select--</option>
                    <option value="pending">pending</option>
                    <option value="in progress">in progress</option>
                    <option value="completed">completed</option>
                </select>
            </td>
            <td className="px-3 py-2">
                <button onClick={handleDeleteBooking} className='p-2 bg-rose-500 w-fit rounded-sm text-white hover:bg-rose-400 cursor-pointer'> <FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default MyPendingBookingsRow;