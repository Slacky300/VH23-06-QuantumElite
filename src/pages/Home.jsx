import React from 'react'
import About from './About';
import Hero from '../pages/Hero';
import Parallelx from '../Components/Parallelx';
import Features from './Features';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Counter from '../Components/Counter';
import Faq from './Faq';
import Doctors from './Doctors';

const HomeMain = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Counter />
            <Features />
            <Doctors />
            <Parallelx />
            <Faq />
            <Footer />
        </>
    )
}

export default HomeMain
