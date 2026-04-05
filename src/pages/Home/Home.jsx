import React from 'react';
import Banner from '../../componentes/Banner/Banner';
import Experience from '../../componentes/Experience/Experience';
import ScrollingText from '../../componentes/ScrollingText/ScrollingText';
import Portfolio from '../../componentes/Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <ScrollingText></ScrollingText>
            <Portfolio></Portfolio>
            
        </div>
    );
};

export default Home;