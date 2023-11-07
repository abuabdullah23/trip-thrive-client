import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';

const MyServices = () => {
    useTitle('My Services');

    return (
        <div>
            <SectionTitle sectionTitle={'My Services'} />
            My Services
        </div>
    );
};

export default MyServices;