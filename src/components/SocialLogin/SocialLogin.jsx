import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import useAuth from '../../hook/useAuth';

const SocialLogin = () => {
    const { googleLogin, setLoading } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast.success('Login with Google Successful');
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    return (
        <div>
            <div onClick={handleGoogleLogin} className='p-2 rounded-full w-full border-2 border-rose-400 hover:bg-rose-200 dark:hover:bg-rose-700 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black dark:text-white text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;