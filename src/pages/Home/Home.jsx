import React from 'react';
import Banner from '../../componentes/Banner/Banner';
import Experience from '../../componentes/Experience/Experience';
import ScrollingText from '../../componentes/ScrollingText/ScrollingText';
import Portfolio from '../../componentes/Portfolio/Portfolio';
import MoreWorks from '../../componentes/MoreWorks/MoreWorks';
import PortfolioPage from '../../componentes/PortfolioPage/PortfolioPage';
import HappyUser from '../../componentes/HappyUser/HappyUser';
import VideoHero from '../../componentes/VideoHero/VideoHero';
import TestimonialSection from '../../componentes/TestimonialSection/TestimonialSection';
import ContactSection from '../../componentes/ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <ScrollingText></ScrollingText>
            <Portfolio></Portfolio>
            <MoreWorks></MoreWorks>
            <PortfolioPage></PortfolioPage>
            <HappyUser></HappyUser>
            <VideoHero></VideoHero>
            <TestimonialSection></TestimonialSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;