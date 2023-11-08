import React from 'react';
import Banner from './Banner/Banner';
import useTitle from '../../hook/useTitle';
import PopularServices from './PopularServices/PopularServices';
import FAQ from './FAQ/FAQ';
import OurGallery from './OurGallery/OurGallery';
import Pricing from './Pricing/Pricing';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner />
            <PopularServices />
            <Pricing />
            <OurGallery />
            <FAQ />
        </div>
    );
};

export default Home;