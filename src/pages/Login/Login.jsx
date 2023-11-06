import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../../components/Loader/Loader';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hook/useAuth';
import { toast } from 'react-toastify';


const Login = () => {
    const [seePass, setSeePass] = useState(true);
    const { loading, setLoading, login } = useAuth();

    
    // handle login form value
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                toast.success('Login Successful!');
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center">
            <div className="w-[350px] p-2">
                <div className="p-4 rounded-md">
                    <h2 className="pb-3 text-3xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmitForm}>
                        {/* email */}
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                type="email"
                                placeholder="email"
                                id="email"
                                name="email"
                                className="px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md focus:border-rose-500 overflow-hidden" />
                        </div>

                        {/* password */}
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    required
                                    type={seePass ? 'password' : 'text'}
                                    placeholder="password"
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 outline-none border border-slate-300 bg-transparent rounded-md focus:border-rose-500 overflow-hidden" />
                                <div
                                    onClick={() => setSeePass(!seePass)}
                                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2">
                                    {
                                        seePass ? <FiEye /> : <FiEyeOff />
                                    }
                                </div>
                            </div>
                        </div>

                        {/* submit button */}
                        <button
                            disabled={loading ? true : false}
                            type="submit"
                            className={`py-2 px-4 w-full bg-rose-500 hover:shadow-rose-500/20 hover:shadow-lg font-semibold text-white rounded-md mb-3 ${loading && 'bg-rose-400'} `}>
                            {
                                loading ? <Loader loadingText={'Logging in...'} /> : 'Login'
                            }
                        </button>

                        <div className="mb-3 flex items-center justify-center">
                            <p>New in this website? <Link to='/register' className="text-rose-500">Register here</Link></p>
                        </div>

                        <div className="w-full flex justify-center items-center mb-3">
                            <div className="w-[45%] bg-rose-600 h-[1px]"></div>
                            <div className="w-[10%] flex justify-center items-center">
                                <span className="pb-1">or</span>
                            </div>
                            <div className="w-[45%] bg-rose-600 h-[1px]"></div>
                        </div>

                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;