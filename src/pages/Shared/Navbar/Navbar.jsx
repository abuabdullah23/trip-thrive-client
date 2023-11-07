import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import { allNav, loggedUserNav } from './NavItem';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { GrList } from 'react-icons/gr';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../../assets/images/TripThrive logo.png'
import smallLogo from '../../../assets/images/favicon.png'
import useAuth from '../../../hook/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut, setLoading } = useAuth();
    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // handleLogOut
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('Log Out Successful!');
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    return (
        <div className='sticky top-0 z-[9999] shadow shadow-gray-500/10 py-3 bg-white'>
            <Container>
                <div className='flex items-center justify-between relative'>
                    <Link to={'/'} className='hidden lg:block'>
                        <img className='h-7' src={logo} alt="logo image" />
                    </Link>

                    <div onClick={() => setShow(!show)} className='lg:hidden p-1 rounded bg-gray-100 hover:bg-slate-200 cursor-pointer'>
                        <GrList className='text-xl' />
                    </div>

                    <Link to={'/'} className='lg:hidden'>
                        <img className='h-6' src={smallLogo} alt="logo image" />
                    </Link>

                    {/* show only from medium device */}
                    <div className={`${show ? 'absolute bg-white z-20 w-3/4 h-screen -top-3 -left-5 p-8' : 'hidden'} lg:hidden`}>
                        <ul className='flex flex-col items-start gap-2 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                            {/* dropdown menu in medium device */}
                            {
                                user && <>
                                    <div className=' relative'>
                                        <div onClick={() => setShowDropdown(!showDropdown)} className='hover:text-red-500 flex gap-2 items-center cursor-pointer'>
                                            <span className='select-none'>Dashboard</span>
                                            <MdKeyboardArrowDown className='mt-1' />
                                        </div>
                                        <div className={`flex flex-col w-fit whitespace-nowrap absolute top-7 bg-gray-100 rounded ease-in-out ${showDropdown ? 'visible' : 'invisible'}`}>
                                            {
                                                loggedUserNav.map((item) => <Link
                                                    key={item.id}
                                                    to={item.path}
                                                    onClick={() => {
                                                        setShow(false)
                                                        setShowDropdown(false)
                                                    }}
                                                    className='py-1 px-3 rounded-md hover:bg-rose-500 hover:text-white'
                                                >
                                                    {item.title}
                                                </Link>)
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </ul>
                    </div>

                    {/* show in large device */}
                    <div className='hidden lg:block'>
                        <ul className='lg:flex items-center gap-5 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                            {/* dropdown menu */}
                            {
                                user && <>
                                    <div className=' relative'>
                                        <div onClick={() => setShowDropdown(!showDropdown)} className='hover:text-red-500 flex gap-2 items-center cursor-pointer'>
                                            <span className='select-none'>Dashboard</span>
                                            <MdKeyboardArrowDown className='mt-1' />
                                        </div>
                                        <div className={`flex flex-col w-fit whitespace-nowrap absolute top-7 bg-gray-100 rounded ease-in-out ${showDropdown ? 'visible' : 'invisible'}`}>
                                            {
                                                loggedUserNav.map((item) => <Link
                                                    key={item.id}
                                                    to={item.path}
                                                    onClick={() => setShowDropdown(false)}
                                                    className='py-1 px-3 rounded-md hover:bg-rose-500 hover:text-white'
                                                >
                                                    {item.title}
                                                </Link>)
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        {
                            user ? <>
                                <div className='flex items-center gap-3'>
                                    <img title={user?.displayName} className='h-8 w-8 rounded-full' src={user?.photoURL} alt="user image" />
                                    <button onClick={handleLogOut} className='text-gray-600 hover:text-red-500 font-semibold'>Log Out</button>
                                </div>
                            </> : <>
                                <Link className='text-gray-600 hover:text-rose-500 font-semibold' to={'/login'}>Log In</Link>
                            </>
                        }
                    </div>
                </div>
            </Container>
            <div onClick={() => setShow(false)} className={`fixed duration-200 ${!show ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10 lg:hidden`}></div>

        </div>
    );
};

export default Navbar;