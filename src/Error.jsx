import Lottie from "lottie-react";
import notFoundPage from "../src/assets/images/404/404 page.json";
import { Link } from "react-router-dom";
import { BiSolidHomeCircle } from "react-icons/bi";
import useTitle from "./hook/useTitle";

const Error = () => {
    useTitle('Error')

    return (
        <div className='w-full py-14'>
            <div>
                <div className="flex flex-col items-center gap-7">
                    <Lottie className="h-[360px]" animationData={notFoundPage} loop={true} />
                    <h2 className="text-2xl font-bold text-red-500 text-center">404 Page Not Found!
                    </h2>
                    <Link to='/' className="w-fit py-2 px-6 rounded bg-rose-500 text-white hover:bg-red-600 flex items-center gap-2 text-xl">
                        <span>Back to Home</span>
                        <span><BiSolidHomeCircle /></span></Link>
                </div>
            </div>

        </div>
    );
};

export default Error;