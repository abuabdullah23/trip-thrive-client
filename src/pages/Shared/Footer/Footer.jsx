import React from 'react';
import logo from '../../../assets/images/TripThrive logo.png'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';

const Footer = () => {
    return (
        <div className='bg-rose-100'>
            <Container>
                <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center py-16 text-slate-800">
                    <div className='md:col-span-2 pe-5'>
                        <Link to="/"> <div className='flex gap-5 items-center'>
                            <img className='h-10 mb-2' src={logo} alt="Tech Shop Logo" />
                        </div></Link>
                        <p>
                            Trip Thrive offers a user-friendly interface allowing riders to effortlessly book their desired trips with just a few clicks. Whether it is immediate or scheduled rides, users can easily input their pickup and drop-off locations.
                        </p>

                        <div className='flex gap-3 mt-5 text-white'>
                            <a className='bg-rose-500 hover:bg-rose-300 hover:text-rose-600 rounded-full p-2 text-center cursor-pointer'><FaFacebook className='w-5 h-5' /></a>

                            <a className='bg-rose-500 hover:bg-rose-300 hover:text-rose-600 rounded-full p-2 text-center cursor-pointer'><FaTwitter className='w-5 h-5' /></a>

                            <a className='bg-rose-500 hover:bg-rose-300 hover:text-rose-600 rounded-full p-2 text-center cursor-pointer'><FaLinkedin className='w-5 h-5' /></a>

                            <a className='bg-rose-500 hover:bg-rose-300 hover:text-rose-600 rounded-full p-2 text-center cursor-pointer'><FaInstagram className='w-5 h-5' /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className="text-lg font-bold">Website</span>
                        <Link to='/' className="link link-hover">Home</Link>
                        <Link to='/add-service' className="link link-hover">Add Service</Link>
                        <Link to='/my-schedule' className="link link-hover">My Schedule</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className="text-lg font-bold">Company</span>
                        <Link to='/services' className="link link-hover">Services</Link>
                        <Link to='/login' className="link link-hover">Login</Link>
                        <Link to='/register' className="link link-hover">Register</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className="text-lg font-bold">Contact</span>
                        <a className="link link-hover">tripthrive@gmail.com</a>
                        <a className="link link-hover">+00 557 855 522</a>
                        <a className="link link-hover">+00 137 254 854</a>
                    </div>
                </footer>
            </Container>
            <div className='flex gap-2 items-center justify-center bg-red-100 border-t border-rose-700 text-rose-600 px-5 py-3'>
                <FaCopyright />
                <p><small>All right reserved 2023</small></p>
            </div>
        </div>
    );
};

export default Footer;