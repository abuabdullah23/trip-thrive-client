import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import useAuth from '../../hook/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin, setLoading } = useAuth();

    // redirect after login to target page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast.success('Login with Google Successful');
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    return (
        <div>
            <div onClick={handleGoogleLogin} className='p-2 rounded-full w-full border-2 border-rose-400 hover:bg-rose-200 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;