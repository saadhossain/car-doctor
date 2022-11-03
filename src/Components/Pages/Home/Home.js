import React, { useEffect, useState } from 'react';
import HomeAboutusSection from './HomeAboutusSection';
import HomeServices from './HomeServices';
import HomeSlider from './HomeSlider';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <HomeSlider></HomeSlider>
            <HomeAboutusSection></HomeAboutusSection>
            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map(service => <HomeServices key={service._id} service={service}></HomeServices>)
                }
            </div>
        </div>
    );
};

export default Home;