import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useTitle from '../../hook/useTitle';
import useAuth from '../../hook/useAuth';

const UpdateService = () => {
    useTitle('Add new Service');
    const { user } = useAuth();
    

    return (
        <div>
            <SectionTitle sectionTitle={'Update Your Service'} />
        </div>
    );
};

export default UpdateService;