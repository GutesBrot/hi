import React from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import TypingEffect from 'react-typing-effect';
import '../App.css';

// Import images
import leetcodeLight from '../assets/leetcodeLight.svg';
import leetcodeDark from '../assets/leetcodeDark.svg';
import linkedin from '../assets/linkedin.svg';
import githubLight from '../assets/githubLight.svg';
import mail from '../assets/mail.webp';

const Hero = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`z-0 bg-hero bg-cover bg-no-repeat bg-center`}>
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent from-60% ${isDarkMode ? "to-black" : "to-white"}`}></div>
            <section className={`relative shrink-0 w-full h-screen mx-auto px-6 pt-[120px] max-w-7xl flex items-start justify-between`}>
                <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-3">
                    <div className="flex flex-col gap-3 md:gap-5">
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black ${isDarkMode ? "text-white" : "text-black"}`}>
                            Hi, I am <span className="text-[#2548e3]">Gutes Brot.</span>
                        </h1>
                        <div className="flex gap-5 md:gap-7 justify-start items-center">
                            <Link to="/resume" className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} hover:scale-105 text-xs md:text-lg font-semibold p-3 rounded-xl`}>
                                My Resume
                            </Link>
                            <a href="https://leetcode.com/u/GutesBrot/" target="_blank" rel="noopener noreferrer">
                                <img src={isDarkMode ? leetcodeDark : leetcodeLight} alt="leetcode" className="w-7 md:w-10 hover:scale-105" />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin" className="w-7 md:w-10 hover:scale-105" />
                            </a>
                            <a href="https://github.com/GutesBrot" target="_blank" rel="noopener noreferrer">
                                <img src={githubLight} alt="github" className={`w-7 md:w-10 hover:scale-105 ${isDarkMode ? "invert" : ""}`} />
                            </a>
                            <a href="mailto:" target="_blank" rel="noopener noreferrer">
                                <img src={mail} alt="gmail" className="w-7 md:w-10 hover:scale-105" />
                            </a>
                        </div>
                        <p className={`mt-2 ${isDarkMode ? "text-white" : "text-black"} text-left`}>
                                I am a <span className="text-[#2548e3]">
                            <TypingEffect
                                text={["Data Scientist.", "Full Stack Developer.", "Software Engineer.", "Consultant.", "Climber.", "Hiker."]}
                                speed={70}
                                eraseSpeed={50}
                                eraseDelay={1000}
                                typingDelay={1000}
                                cursor="_"
                            />
                            </span>
                        </p>

                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Hero;
