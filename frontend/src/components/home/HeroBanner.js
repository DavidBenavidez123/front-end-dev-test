import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import './LandingPage.css';
import Hero from '../common/hero.jpg'
import Logo from '../common/logo-white.svg'
import { Link } from 'react-router-dom';

function HeroBanner() {

    const text = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 })

    return (
        <div className='Hero-Image'>

            <div className='Logo'>
                <Link to='/'>
                    <img src={Logo} />
                </Link>
            </div>

            <img src={Hero} alt='Hero-Image' />

            <div className='Hero-Image-text'>
                <animated.div style={text}>
                    <h1>
                        WElCOME TO
                        </h1>
                    <h2>
                        Rooster Grin
                        </h2>
                </animated.div>

                <Link to='/Register'>
                    <p className='Purple-Button'>
                        Register
                    </p>
                </Link>

            </div>
        </div>
    );

}

export default HeroBanner;
