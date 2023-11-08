import React from 'react';
import Banner from './Banner/Banner';
import useTitle from '../../hook/useTitle';
import PopularServices from './PopularServices/PopularServices';
import FAQ from './FAQ/FAQ';
import OurGallery from './OurGallery/OurGallery';
import Pricing from './Pricing/Pricing';
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
    useTitle('Home')

    // scroll motion
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div>
            <motion.div className="fixed top-[49px] left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-500 z-10 transform origin-top-left" style={{ scaleX }} />

            <Banner />
            <PopularServices />
            <Pricing />
            <OurGallery />
            <FAQ />
        </div>
    );
};

export default Home;