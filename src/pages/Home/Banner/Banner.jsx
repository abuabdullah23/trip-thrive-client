import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const sliderImages = [
        'https://i.ibb.co/k2mfbrY/slider1.jpg',
        'https://files.adventure-life.com/11/36/65/Safari/1300x820.webp',
        'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/phv2aecqaapqpgfafcmv/Shared%20Transfers%20between%20Hokkaido%20and%20Kiroro%20Resort%20(Hokkaido%20Ski%20Bus).jpg',
        'https://i.ibb.co/9g0hJ8f/slider2.jpg',
        'https://i.ibb.co/f07M3jM/slider3.jpg',
        'https://www.uberlimousine.com/limousine-rental.jpg',
        'https://i.ibb.co/jMFXKhH/slider5.jpg'
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