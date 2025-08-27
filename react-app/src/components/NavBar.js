import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../ThemeContext'; 
import logo from '../assets/logo.png'; 
import menu from '../assets/menu.png'; 

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    let timeoutId;

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      
      // Auto-hide menu after 5 seconds if nothing is clicked
      timeoutId = setTimeout(() => {
        setIsMenuOpen(false);
      }, 5000);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isMenuOpen]);

  // Drag handlers for theme toggle
  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setDragStartX(clientX);
  }, []);

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = clientX - dragStartX;
    const threshold = 20; // Minimum drag distance to trigger toggle
    
    if (Math.abs(deltaX) > threshold) {
      toggleTheme();
      setIsDragging(false);
    }
  }, [isDragging, dragStartX, toggleTheme]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleDragMove);
      document.addEventListener('touchend', handleDragEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging, dragStartX, handleDragMove, handleDragEnd]);

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-8 fixed top-0 z-20 white-gradient">
      <div className="w-full flex justify-between items-center mx-auto">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain rounded-full shadow-lg" />
          <p className="text-black text-[18px] font-bold cursor-pointer dark:text-white">Gutes Brot</p>
        </a>

        {/* Toggle: outer ring + inner track + thumbs */}
        <button
          ref={toggleRef}
          id="theme-toggle"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          className={`relative ml-4 md:ml-0 rounded-full h-10 w-20 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
        <div className="sm:hidden flex flex-1 justify-end items-center" ref={menuRef}>
          <img 
            src={menu} 
            alt="menu" 
            className="w-12 h-12 object-contain cursor-pointer dark:invert transition-transform duration-200 hover:scale-105" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div className={`${isMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'} p-6 bg-white dark:bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg transition-all duration-200 ease-in-out`}>
            <ul className="list-none flex items-start flex-col gap-4 w-full">
              <li className="text-black font-poppins font-medium cursor-pointer w-full dark:text-white hover:opacity-75">
                <a href="#about" className="flex w-full" onClick={() => setIsMenuOpen(false)}>About</a>
              </li>
              <li className="text-black font-poppins font-medium cursor-pointer w-full dark:text-white hover:opacity-75">
                <a href="#skills" className="flex w-full" onClick={() => setIsMenuOpen(false)}>Skills</a>
              </li>
              <li className="text-black font-poppins font-medium cursor-pointer w-full dark:text-white hover:opacity-75">
                <a href="#projects" className="flex w-full" onClick={() => setIsMenuOpen(false)}>Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>            
    </nav>
  );
}

export default NavBar;
