import { useEffect } from 'react';

const ImagePreloader = () => {
    useEffect(() => {
        // Only preload the alternative theme images after initial render
        // This prevents slowing down the initial page load
        const preloadAlternativeImages = () => {
            // Detect current theme to preload the opposite
            const isDark = document.documentElement.classList.contains('dark');
            
            const imagesToPreload = isDark 
                ? [
                    '/src/assets/bg-light-2.webp',
                    '/src/assets/layer1.svg'
                ]
                : [
                    '/src/assets/bg-dark-2.webp',
                    '/src/assets/layer1-dark.svg'
                ];

            // Preload with low priority
            imagesToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        };

        // Wait for initial render to complete, then preload alternatives
        const timer = setTimeout(preloadAlternativeImages, 1000);

        return () => clearTimeout(timer);
    }, []);

    return null; // This component doesn't render anything
};

export default ImagePreloader;
