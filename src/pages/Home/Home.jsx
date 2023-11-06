import React from 'react';
import Banner from './Banner/Banner';
import useTitle from '../../hook/useTitle';
import PopularServices from './PopularServices/PopularServices';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner />
            <PopularServices />
        </div>
    );
};

export default Home;