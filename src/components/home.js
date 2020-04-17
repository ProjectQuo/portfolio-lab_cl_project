import React from "react";

import HomeHeader from './home_header';
import HomeThreeColumns from './three_columns';
import HomeMain from './home_main';
import HomeFooter from './home_footer';
import AboutUs from "./about_us";


const Home = () => {
    console.log('home');

    return (
        <>
            <header><HomeHeader /></header>
            <main>
                <HomeThreeColumns />
                <HomeMain />
            </main>
            <AboutUs/>
            <footer><HomeFooter /></footer>
        </>
    )
}

export default Home;