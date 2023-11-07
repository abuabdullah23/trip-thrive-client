import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const BookingModal = ({ isOpen, closeModal }) => {



    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-center font-medium leading-6 text-gray-900"
                                    >
                                        Review Info Before Book
                                    </Dialog.Title>

                                    <form>
                                        <div className="flex flex-col gap-3 mt-2 text-base">
                                            <div className='w-full h-[180px] md:h-[240px] lg:h-[360px] transition-all duration-300 p-3 border border-rose-400 rounded-md'>
                                                <img className='h-full w-full object-cover rounded-md' src="https://i.ibb.co/k2mfbrY/slider1.jpg" alt="service image" />
                                            </div>
                                            <div className='bg-rose-100 p-2 rounded-md'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <label className='font-semibold' htmlFor="">Service Name:</label>
                                                        <p>Service Name will be here</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <label className='font-semibold' htmlFor=""> Provider Email:</label>
                                                        <p>Provider will be here</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <label className='font-semibold' htmlFor=""> Price:</label>
                                                        <p>$654</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex items-center gap-2'>
                                                    <label className='font-semibold' htmlFor="">User Email:</label>
                                                    <p>User email will be here</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex items-center gap-2'>
                                                    <label className='font-semibold' htmlFor="">Service Taking Date:</label>
                                                    <input type="date" name='takingDate' className='py-1 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col items-start gap-2'>
                                                    <label className='font-semibold' htmlFor="">Special Instruction:</label>
                                                    <textarea type="text" name='instruction' placeholder='Write Instruction, anything like address , area, customized service plan' className='w-full py-1 px-2 border border-rose-200 focus:border-rose-500 rounded outline-none' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex justify-center">
                                            <button
                                                type="button"
                                                className="rounded-md border-2 hover:border-rose-500 py-2 px-3 bg-rose-500 font-semibold hover:bg-transparent text-white hover:text-rose-500 transition-all duration-300"
                                                onClick={closeModal}
                                            >
                                                Purchase this Service
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default BookingModal;