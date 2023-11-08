import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const sliderImages = [
        'https://i.ibb.co/k2mfbrY/slider1.jpg',
        'https://i.ibb.co/9g0hJ8f/slider2.jpg',
        'https://i.ibb.co/f07M3jM/slider3.jpg',
        'https://i.ibb.co/1vBLTxS/slider4.jpg',
        'https://i.ibb.co/jMFXKhH/slider5.jpg',
        'https://i.ibb.co/s93jTpM/slider6.webp'
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full flex flex-wrap md:gap-8'>
                <div className='w-full'>
                    <Carousel
                        autoPlay={true}
                        infinite={true}
                        arrows={true}
                        showDots={true}
                        responsive={responsive}
                    >
                        {
                            sliderImages?.map((img, i) => <Link className='h-[220px] md:h-[300px] lg:h-[440px] w-full block' key={i} to='/'>
                                <img className='w-full h-full object-cover' src={img} alt="slider image" />
                            </Link>)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;