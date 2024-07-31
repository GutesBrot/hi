import React, { useEffect } from 'react';
import KUTE from 'kute.js';
import '../App.css';
import working from '../assets/clipart-work.webp';

const About = () => {
    useEffect(() => {
        const tween = KUTE.fromTo(
            '#blob1-light', // starting blob path
            { path: '#blob1-light' },
            { path: '#blob2-light' }, // ending blob path
            { repeat: 999, duration: 3000, yoyo: true } // animation options
        );
        tween.start();
    }, []);

    return (
        <section id="about" className="bg-intro py-16 pt-[120px] relative z-0">
            <div className="container mx-auto">
                <p className='text-black'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <img src={working} alt="Working Woman" className="working-woman-image pointer-events-none" />
            <svg 
                id="visual" 
                viewBox="0 0 675 900" 
                width="675" 
                height="900" 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1">
                <g transform="translate(258.14152032545803 435.9865088943483)">
                    <path id="blob1-light" d="M278.1 -215.9C336.2 -148.8 342.6 -34.6 317.8 71.9C293 178.3 237 277 159 304.9C81 332.8 -18.9 289.8 -83.7 235.1C-148.5 180.4 -178.1 113.9 -172 61.8C-165.9 9.7 -124.2 -28 -89.6 -89.8C-55 -151.5 -27.5 -237.3 41.2 -270.1C109.9 -303 219.9 -283 278.1 -215.9" fill="#72bbe4"></path>
                </g>
                <g style={{ visibility: 'hidden' }} transform="translate(333.54297170906375 534.9936898278188)">
                    <path id="blob2-light"  d="M164.3 -147.2C217.2 -64.8 267 3.7 256.7 62.5C246.4 121.2 175.9 170.1 115.5 173.8C55 177.6 4.6 136.3 -51.1 108.6C-106.9 80.8 -168 66.5 -208.2 12.6C-248.4 -41.4 -267.7 -135.1 -229.5 -214.1C-191.3 -293.2 -95.6 -357.5 -19.9 -341.6C55.8 -325.7 111.5 -229.6 164.3 -147.2" fill="#72bbe4"></path>
                </g>
            </svg>
        </section>
    );
};

export default About;
