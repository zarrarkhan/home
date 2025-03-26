const Hero = () => {
    return (
        <>
            <div id="about" className="absolute -top-20"></div> {/* Invisible div for scrolling */}
            <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-10 px-6 max-w-5xl mx-auto">
                {/* Avatar - Larger and positioned on the left on larger screens */}
                <div className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 md:mr-10 flex-shrink-0">
                    <img
                        src="avatar.jpg" /* Update this to your actual image path */
                        alt="Zarrar Khan"
                        className="w-full h-full rounded-full border-4 border-gray-700 shadow-lg"
                    />
                </div>

                {/* Text - Moves to the right on larger screens */}
                <div className="max-w-lg">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Zarrar Khan, Ph.D.</h1>
                    <h2 className="mt-2 text-xl text-gray-300 font-medium">
                        Scientist | Developer | Climate Expert
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Computational scientist and software engineer specializing in large-scale simulations, high-performance computing, and multi-sector modeling. Expert in Python, R, JavaScript, GIS, and cloud computing. 30+ publications, 800+ citations, chair at AGU, EGU, COP.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero;
