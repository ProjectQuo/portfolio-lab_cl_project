import React from "react";
import { Element } from 'react-scroll';

const AboutUs = () => {
    console.log('AboutUs');

    return (
        <>
        <Element name="aboutUsSection"></Element>
            <div className='about_container'>
                <div className="about_main">
                    <div className="about_flex">
                        <h2 className="about_header">O nas</h2>
                        <div className="about_decor"></div>
                        <p className="about_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    </div>
                    <div className="about_signature"></div>
                </div>
                <div className='about_picture' />
            </div>
        </>
    )
}

export default AboutUs;