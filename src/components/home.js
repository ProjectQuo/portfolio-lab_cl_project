import React from "react";

import HomeHeader from './home_header';
import HomeMain from './home_main';
import HomeFooter from './home_footer';
import HomeThreeColumns from './three_columns';

const Home = () => {
    console.log('home');

    return (
        <>
            <header><HomeHeader /></header>
            <main>
                <HomeThreeColumns />
                <HomeMain />
            </main>
            <footer><HomeFooter /></footer>
        </>
    )
}

export default Home;