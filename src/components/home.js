import React from "react";

import HomeHeader from './home_header';
import HomeMain from './home_main';
import HomeFooter from './home_footer';

const Home = () => {
    console.log('home');
    
    return (
        <>
        <HomeHeader/>
        <HomeMain/>
        <HomeFooter/>
        </>
    )
}

export default Home;