import React from 'react'
import About from './About';
import Hero from '../pages/Hero';
import Parallelx from '../Components/Parallelx';
import Features from './Features';
import Footer from '../Components/Footer/Footer';
import Counter from '../Components/Counter';
import Faq from './Faq';
import Doctor from './Doctor';

const HomeMain = () => {
    return (
        <>
            <Hero />
            <Counter />
            <About />
            <Features />
            <Doctor />
            <Parallelx />
            <Faq />
            <Footer />
        </>
    )
}

export default HomeMain
