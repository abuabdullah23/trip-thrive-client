import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  
    return (
        <div>
            <div className='p-2 rounded-full w-full border-2 border-rose-300 hover:bg-rose-200 dark:hover:bg-rose-700 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black dark:text-white text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;