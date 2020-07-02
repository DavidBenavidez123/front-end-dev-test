import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import HeroBanner from './HeroBanner'
import Content from './Content';



function LandingPage() {
    useEffect(() => {
        window.scroll(0, 0);
    });

    return (
        <div className="Landing-Page">
            <HeroBanner />
            <Content />
        </div>
    );

}

export default LandingPage;
