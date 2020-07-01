import React, { useState } from 'react';
import HikingImage from '../common/img-1.jpg'
import homeExpertise from '../common/home-expertise.svg'
import homeHygiene from '../common/home-hygiene.svg'
import homeLab from '../common/home-lab.svg'
import homeRetention from '../common/home-retention.svg'
import Banner1 from '../common/banner-1.jpg'
import Banner2 from '../common/banner-2.jpg'
import leftArrow from '../common/chevron-left.svg'
import rightArrow from '../common/chevron-right.svg'
import './LandingPage.css';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import ReactStars from 'react-stars'



function Content() {
    return (
        <div className='content'>

            <section className='Split-Section'>
                <div className='Split-Section-Left'>
                    <div className='Split-Section-Left-Text'>
                        <h1>
                            LOREM IPSUM
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, tortor in dignissim mattis, purus urna tempor dui,
                            in pellentesque orci enim quis arcu. Sed dapibus suscipit urna, a volutpat orci
                            interdum at. In hac habitasse platea dictumst. Morbi tristique mauris vel erat mollis,
                            et accumsan justo sodales. Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                            pulvinar augue ac auctor gravida.
                            Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                            pulvinar augue ac auctor gravida.
                        </p>
                        <h2>
                            {'>'} LOREM IPSUM
                        </h2>
                    </div>
                </div>
                <div className='Split-Section-Right'>
                    <img src={HikingImage} alt='HikingImage' />
                </div>
            </section>

            <section className='Hero-Image'>
                <img src={Banner1} alt='Hero-Image' />
                <div className='Hero-Image-text-left'>
                    <h1>
                        Lorem Ipsum
                </h1>
                    <p className='Orange-Button'>
                        Button Button
                </p>
                </div>
            </section>

            <section className='Split-Section Second-Split'>
                <div className='Split-Section-Left'>
                    <div className='Split-Section-Left-Text'>
                        <h1>
                            LOREM IPSUM
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, tortor in dignissim mattis, purus urna tempor dui,
                            in pellentesque orci enim quis arcu. Sed dapibus suscipit urna, a volutpat orci
                            interdum at. In hac habitasse platea dictumst. Morbi tristique mauris vel erat mollis,
                            et accumsan justo sodales. Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                            pulvinar augue ac auctor gravida.
                            Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                            pulvinar augue ac auctor gravida.
                        </p>
                        <h2>
                            {'>'} LOREM IPSUM
                        </h2>
                    </div>
                </div>
                <div className='Split-Section-Two-Right'>
                    <div className='Icon-Wrap'>
                        <div className='Icon-One'>
                            <div className='Icon-Circle'>
                                <img src={homeExpertise} />
                            </div>
                            <h2>
                                Lorem Ipsum
                            </h2>
                        </div>
                        <div className='Icon-Two'>
                            <div className='Icon-Circle'>
                                <img src={homeHygiene} />
                            </div>
                            <h2>
                                Lorem Ipsum
                            </h2>
                        </div>
                        <div className='Icon-Three'>
                            <div className='Icon-Circle'>
                                <img src={homeLab} />
                            </div>
                            <h2>
                                Lorem Ipsum
                            </h2>
                        </div>
                        <div className='Icon-Four'>
                            <div className='Icon-Circle'>
                                <img src={homeRetention} />
                            </div>
                            <h2>
                                Lorem Ipsum
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Hero-Image'>
                <img src={Banner2} alt='Hero-Image' />
                <div className='Hero-Image-text-left-two'>
                    <h1>
                        Lorem Ipsum
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, tortor in dignissim mattis, purus urna tempor dui,
                        in pellentesque orci enim quis arcu. Sed dapibus suscipit urna, a volutpat orci
                    </p>
                    <p className='Orange-Button'>
                        Button Button
                </p>
                </div>
            </section>

            <section className='Split-Section-Three'>
                <div className='Split-Section-Three-Left'>
                    <div className='Split-Section-Three-Left-Text'>
                        <h1>
                            LOREM IPSUM DALOR SIT AMET
                        </h1>

                        <h2 className='stars-desktop'>
                            <ReactStars
                                count={5}
                                size={45}
                                color2={'#FF7218'}
                                value={5}
                                edit={false}
                            />
                        </h2>
                        <h2 className='stars-mobile'>
                            <ReactStars
                                count={5}
                                size={30}
                                color2={'#FF7218'}
                                value={5}
                                edit={false}
                            />
                        </h2>
                    </div>
                </div>
                <div className='Split-Section-Three-Right'>
                    <Carousel arrowLeft={<img className='arrow' src={leftArrow} />}
                        arrowLeftDisabled={<img src={leftArrow} />}
                        arrowRight={<img className='arrow' src={rightArrow} />}
                        arrowRightDisabled={<img src={rightArrow} />}
                        addArrowClickHandler dots>
                        <div>
                            <h2>
                                John Doe 08/08/2019
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, tortor in dignissim mattis, purus urna tempor dui,
                                in pellentesque orci enim quis arcu. Sed dapibus suscipit urna, a volutpat orci
                                interdum at. In hac habitasse platea dictumst. Morbi tristique mauris vel erat mollis,
                                et accumsan justo sodales. Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                                pulvinar augue ac auctor gravida.
                                Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                                pulvinar augue ac auctor gravida.
                        </p>
                        </div>
                        <div>
                            <h2>
                                Doe 08/08/2019
                        </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, tortor in dignissim mattis, purus urna tempor dui,
                                in pellentesque orci enim quis arcu. Sed dapibus suscipit urna, a volutpat orci
                                interdum at. In hac habitasse platea dictumst. Morbi tristique mauris vel erat mollis,
                                et accumsan justo sodales. Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                                pulvinar augue ac auctor gravida.
                                Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                                pulvinar augue ac auctor gravida.
                        </p>
                        </div>
                        <div>
                            <h2>
                                John  08/08/2019
                        </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, tortor in dignissim mattis, purus urna tempor dui,
                                in pellentesque orci enim quis arcu. Sed dapibus suscipit urna, a volutpat orci
                                interdum at. In hac habitasse platea dictumst. Morbi tristique mauris vel erat mollis,
                                et accumsan justo sodales. Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                                pulvinar augue ac auctor gravida.
                                Duis faucibus rutrum sapien, ac convallis leo mollis a. Cras
                                pulvinar augue ac auctor gravida.
                        </p>
                        </div>
                    </Carousel>
                </div>
            </section>

        </div >
    );

}

export default Content;
