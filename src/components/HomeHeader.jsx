import React from "react";
// import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";

const HomeHeader = () => {
    console.log('home_header');

    return (
        <>
            <div className="header_container" >
                <div className="header_picture" />
                <div className="header_elements">
                    <HomeNav />
                    <div className="intro_container">
                        <div className="header_intro">
                            <h1 className="intro_banner">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <div className="intro_decor" />
                            <div className="intro_buttons">
                                <a href="/" className="intro_button"><div>ODDAJ RZECZY</div></a>
                                <a href="/" className="intro_button"><div>ZORGANIZUJ ZBIÓRKĘ</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader;