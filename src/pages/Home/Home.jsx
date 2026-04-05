import React from 'react';
import Banner from '../../componentes/Banner/Banner';
import Experience from '../../componentes/Experience/Experience';
import ScrollingText from '../../componentes/ScrollingText/ScrollingText';
import Portfolio from '../../componentes/Portfolio/Portfolio';
import MoreWorks from '../../componentes/MoreWorks/MoreWorks';
import PortfolioPage from '../../componentes/PortfolioPage/PortfolioPage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <ScrollingText></ScrollingText>
            <Portfolio></Portfolio>
            <MoreWorks></MoreWorks>
            <PortfolioPage></PortfolioPage>
        </div>
    );
};

export default Home;