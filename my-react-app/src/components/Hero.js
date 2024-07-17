import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-hero bg-cover bg-no-repeat bg-center">
            <section class="relative shrink-0 w-full h-screen mx-auto sm:px-16 px-6 pt-[120px] max-w-7xl flex items-start justify-between">
                <div>
                    <h1 class="font-black lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[36px] lg:leading-[98px] mt-2 text-black dark:text-white">Hi, I am <span class="text-[#2548e3] ">Gutes Brot.</span></h1>
                    <p class="text-black dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laborum sint in ipsum error harum ratione, delectus sapiente, molestias, minus placeat. Fuga molestiae sunt molestias aliquam repudiandae cumque iste consequatur.</p>
                </div>
            </section>
        </div>
    );
};

export default Hero;
