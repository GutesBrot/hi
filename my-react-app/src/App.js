import React from 'react';
import { ThemeProvider } from './ThemeContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import SectionDivider from './components/SectionDivider'; // Import the Section Divider
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <NavBar />
            <Hero />
            <SectionDivider /> {/* Add the Section Divider here */}
            <About />
            {/* Other components */}
        </ThemeProvider>
    );
}

export default App;
