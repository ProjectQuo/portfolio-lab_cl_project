import React from "react";

import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';
import HomeFooter from './HomeFooter';
import AboutUs from "./AboutUs";
import PaginatedSection from "./PaginatedSection";
import HomeHeader from "./HomeHeader";



const Home = () => {
    console.log('home');

    return (
        <>
            <header><HomeHeader /></header>
            <main>
                <ThreeColumns />
                <FourSteps />
            </main>
            <AboutUs/>
            <PaginatedSection/>
            <footer><HomeFooter /></footer>
        </>
    )
}

export default Home;