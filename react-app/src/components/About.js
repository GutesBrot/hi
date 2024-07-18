import React from 'react';
import '../App.css';
import working from '../assets/clipart-work.webp';

const About = () => {
    return (
        <section id="about" className="bg-intro py-16 pt-[120px] relative z-0">
            <div className="container mx-auto">
            <p className='text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <img src={working} alt="Working Woman" className="working-woman-image pointer-events-none" />
        </section>
    );
};

export default About;
