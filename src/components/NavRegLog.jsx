import React from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const NavRegLog = () => {
 return (
     <>
          <div className="nav_reg">
            <div className="nav_reg_login">
                <Link to="/logowanie" className="nav_reg_button">Zaloguj</Link>
                <Link to="/rejestracja" className="nav_reg_button">Załóż konto</Link>
            </div>
            <div className="nav_reg_menu">
                <Link to="/" className="nav_reg_menu_button">Start</Link>
                <ScrollLink className="nav_reg_menu_button" to="whatsAboutSection" smooth={true}>O co chodzi?</ScrollLink>
                <ScrollLink className="nav_reg_menu_button" to="aboutUsSection" smooth={true}>O nas</ScrollLink>
                <ScrollLink className="nav_reg_menu_button" to="paginatedSection" smooth={true}>Fundacja i organizcja</ScrollLink>
                <ScrollLink className="nav_reg_menu_button" to="contactUs" smooth={true}>Kontakt</ScrollLink>
            </div>
        </div> 
     </>
 );   
};
export default NavRegLog;