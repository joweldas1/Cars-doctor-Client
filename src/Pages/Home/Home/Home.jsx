import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import UseAuth from '../../Provider/UseAuth';
import Contact from '../Contact';
import Team from '../Team/Team';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
    const {hello}=UseAuth()
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Contact/>
            <Team/>
            <ChooseUs/>
        </div>
    );
};

export default Home;