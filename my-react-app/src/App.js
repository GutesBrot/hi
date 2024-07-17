import React from 'react';
import { ThemeProvider } from './ThemeContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import SectionDivider from './components/SectionDivider';
import SectionDivider2 from './components/SectionDivider2'; 
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <NavBar />
            <Hero />
            <SectionDivider /> 
            <About />
            <SectionDivider2 />
        </ThemeProvider>
    );
}

export default App;
