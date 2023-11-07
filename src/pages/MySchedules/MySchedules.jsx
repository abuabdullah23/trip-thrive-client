import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';

const MySchedules = () => {
    useTitle('My Schedules');

    return (
        <div>
            <SectionTitle sectionTitle={'My Schedules'} />

            MySchedules
        </div>
    );
};

export default MySchedules;