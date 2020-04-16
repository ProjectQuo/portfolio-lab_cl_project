import React from "react";

const HomeHeader = () => {
    console.log('home_header');

    return (
        <>
            <div className="header_container" >
                <div className="header_picture" />
                <div className="header_elements">
                    <div className="nav">
                        <div className="nav_login">
                            <a href="login_button" className="nav_button">Zaloguj</a>
                            <a href="register_button" className="nav_button">Załóż konto</a>
                        </div>
                        <div className="nav_menu">
                            <a className="nav_menu_button" href="/">Start</a>
                            <a className="nav_menu_button" href="/">O co chodzi?</a>
                            <a className="nav_menu_button" href="/">O nas</a>
                            <a className="nav_menu_button" href="/">Fundacja i organizcja</a>
                            <a className="nav_menu_button" href="/">Kontakt</a>
                        </div>
                    </div>
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