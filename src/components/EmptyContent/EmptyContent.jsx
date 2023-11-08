import Lottie from "lottie-react";
import emptyBox from '../../assets/images/empty-box/empty box 1.json'

const EmptyContent = ({ emptyText }) => {
    return (
        <div className='flex items-center justify-center'>
            <div>
                <div className='flex items-center justify-center'>
                    <Lottie className="h-[240px]" animationData={emptyBox} loop={true} />
                </div>
                <h2 className='text-4xl text-rose-500 font-thin text-center mt-8'>
                    {emptyText}
                </h2>
            </div>
        </div>
    );
};

export default EmptyContent;