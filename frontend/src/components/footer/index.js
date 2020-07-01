import Banner1 from '../common/banner-1.jpg'
import React, { useState } from 'react';
import './Footer.css';
import Instagram from '../common/instagram.svg'
import Facebook from '../common/facebook.svg'

function Footer() {


    return (
        <div className='Footer'>
            <p>
                Follow Us:
            </p>
            <div className='Footer-Icons'>
                <img src={Instagram} alt='Instagram' />
                <img src={Facebook} alt='Facebook' />
            </div>
        </div>
    );

}

export default Footer;
