import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurGallery = () => {
    return (
        <section className="py-12">
            <SectionTitle sectionTitle={'Our Gallery'} />
            <div className="container grid grid-cols-2 gap-4 p-0 md:p-4 mx-auto md:grid-cols-4">
                <img src='https://i.ibb.co/k2mfbrY/slider1.jpg' alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square" />

                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src='https://dot.la/media-library/man-and-child-riding-in-car.jpg?id=31699331&width=2000&height=1500&quality=85&coordinates=0%2C0%2C228%2C0' />

                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src='https://i.ibb.co/f07M3jM/slider3.jpg' />
                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src='https://www.city-tour.info/fileadmin/user_upload/N-Bilder_allgem/stadtrundfahrt-nuernberg-abfahrt.jpg' />
                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src='https://i.ibb.co/jMFXKhH/slider5.jpg' />
                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src='https://i.ibb.co/s93jTpM/slider6.webp' />
                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src='https://luxuryride.qa/wp-content/uploads/2022/07/image_2022-07-28_153435277-762x400.png' />
                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src="https://i.ibb.co/1vBLTxS/slider4.jpg" />
                <img alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 rounded shadow-sm min-h-48 aspect-square" src="https://i.ibb.co/9g0hJ8f/slider2.jpg" />
                <img src="https://tripsaroundme.com/wp-content/uploads/2022/04/20200823_162315-scaled.jpg" alt="" className="w-full h-full object-cover hover:scale-[102%] transition-all duration-300 col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square" />
            </div>
        </section>
    );
};

export default OurGallery;