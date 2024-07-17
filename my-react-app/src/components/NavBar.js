import React from 'react';
import { useTheme } from '../ThemeContext'; 
import logo from '../assets/logo.png'; 
import menu from '../assets/menu.png'; 

function NavBar() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 white-gradient">
            <div className="w-full flex justify-between items-center mx-auto">
                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-8 h-8 object-contain rounded-full shadow-lg" />
                    <p className="text-black text-[18px] font-bold cursor-pointer dark:text-white">Gutes Brot</p>
                </a>
                <button
                    id="theme-toggle"
                    className="text-sm ml-4 md:ml-0 md:text-xl flex border-black border-2 rounded-full bg-gray-300"
                    aria-label="Toggle Theme"
                    onClick={toggleTheme}
                >
                    <div className={`toggle-light rounded-full p-1 shadow-md ${isDarkMode ? 'opacity-0' : ''}`}>🍞</div>
                    <div className={`toggle-dark rounded-full p-1 ${isDarkMode ? '' : 'opacity-0'}`}>
                        <span style={{ filter: 'brightness(0.5) contrast(1.5)' }}>🍞</span>
                    </div>
                </button>

                <ul className="list-none hidden sm:flex flex-row gap-10 justify-center items-center">
                    <li className="text-black hover:opacity-75 text-[18px] font-medium cursor-pointer dark:text-white">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-black hover:opacity-75 text-[18px] font-medium cursor-pointer dark:text-white">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="text-black hover:opacity-75 text-[18px] font-medium cursor-pointer dark:text-white">
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
                <div class="sm:hidden flex flex-1 justify-end items-center">
                <img src={menu} alt="menu" className="w-12 h-12 object-contain cursor-pointer" />
                <div class="hidden p-6 white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
                    <ul class="list-none flex items-start flex-col gap-4 w-full">
                        <li class="text-black font-poppins font-medium cursor-pointer w-full dark:text-white">
                            <a href="#about" class="flex w-full">About</a>
                        </li>
                        <li class="text-black font-poppins font-medium cursor-pointer w-full dark:text-white">
                            <a href="#skills" class="flex w-full">Skills</a>
                        </li>
                        <li class="text-black font-poppins font-medium cursor-pointer w-full dark:text-white">
                            <a href="#projects" class="flex w-full">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>            
            </div>
        </nav>
    );
}

export default NavBar;
