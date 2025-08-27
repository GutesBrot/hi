import React from 'react';
import '../App.css'; // Path to your CSS file

const SectionDivider = ({ flip, backgroundSize }) => {
    const dynamicStyle = {
        transform: flip ? 'scaleX(-1)' : 'none', // Flip horizontally if needed
        backgroundSize: backgroundSize || 'auto 100%', // Allow custom size or default
    };

    return (
        <div className="spacer layer1" style={dynamicStyle}></div>
    );
};

export default SectionDivider;
