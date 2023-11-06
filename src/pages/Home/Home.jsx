import React from 'react';
import Banner from './Banner/Banner';
import useTitle from '../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;