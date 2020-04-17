import React from "react";
import ContactComp from "./contact_component";


const HomeFooter = () => {
    console.log('home_footer');

    return (
        <>
            <div className="footer_container">
                <div className="footer_background" />
                <ContactComp />
                <div className="footer_media">
                    <a href="https://pl-pl.facebook.com/" className="fb med"><div/></a>
                    <a href="https://www.instagram.com/" className='insta med'><div/></a>
                </div>
                <div className="footer_copyright">Copyright by Coders Lab</div>
            </div>
        </>
    )
}

export default HomeFooter;