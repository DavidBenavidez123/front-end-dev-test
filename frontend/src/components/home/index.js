import React, { useState } from 'react';
import './LandingPage.css';
import HeroBanner from './HeroBanner'
import Content from './Content';



function LandingPage() {

    return (
        <div className="Landing-Page">
            <HeroBanner />
            <Content />
        </div>
    );

}

export default LandingPage;
