import React from 'react';
import { useTheme } from '../ThemeContext'; 
import logo from '../assets/logo.png'; 
import menu from '../assets/menu.png'; 

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-8 fixed top-0 z-20 white-gradient">
      <div className="w-full flex justify-between items-center mx-auto">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain rounded-full shadow-lg" />
          <p className="text-black text-[18px] font-bold cursor-pointer dark:text-white">Gutes Brot</p>
        </a>

        {/* Toggle: outer ring + inner track + thumbs */}
        <button
          id="theme-toggle"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className="relative ml-4 md:ml-0 rounded-full h-10 w-20"
        >
          {/* Outer ring (drawn under, so inner size unaffected by border math) */}
          <span className="absolute inset-0 rounded-full bg-black" aria-hidden="true" />
          {/* Inner track (exactly 2px inside the ring) */}
          <span className="absolute inset-[2px] rounded-full bg-gray-300 dark:bg-gray-400" aria-hidden="true" />

          {/* Relative track container so thumbs snap to the inner edge, not the button box */}
          <div className="absolute inset-[2px] rounded-full" aria-hidden="true">
            {/* Light thumb – flush to LEFT inner border */}
            <div
              className={`toggle-light absolute top-1/2 left-0 -translate-y-1/2
                          w-[36px] h-[36px] rounded-full grid place-items-center shadow-md
                          transition-opacity duration-200 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
            >
              <span className="text-lg leading-none">🍞</span>
            </div>

            {/* Dark thumb – flush to RIGHT inner border */}
            <div
              className={`toggle-dark absolute top-1/2 right-0 -translate-y-1/2
                          w-[36px] h-[36px] rounded-full grid place-items-center
                          transition-opacity duration-200 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="text-lg leading-none" style={{ filter: 'brightness(0.5) contrast(1.5)' }}>🍞</span>
            </div>
          </div>
        </button>

        {/* Desktop menu */}
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

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={menu} alt="menu" className="w-12 h-12 object-contain cursor-pointer dark:invert" />
          <div className="hidden p-6 white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <ul className="list-none flex items-start flex-col gap-4 w-full">
              <li className="text-black font-poppins font-medium cursor-pointer w-full dark:text-white">
                <a href="#about" className="flex w-full">About</a>
              </li>
              <li className="text-black font-poppins font-medium cursor-pointer w-full dark:text-white">
                <a href="#skills" className="flex w-full">Skills</a>
              </li>
              <li className="text-black font-poppins font-medium cursor-pointer w-full dark:text-white">
                <a href="#projects" className="flex w-full">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>            
    </nav>
  );
}

export default NavBar;
