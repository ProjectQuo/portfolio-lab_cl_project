import React from "react";

const AboutUs = () => {
    console.log('AboutUs');

    return (
        <>
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