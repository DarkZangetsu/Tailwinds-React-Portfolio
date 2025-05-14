import { ChevronDown, Download} from "lucide-react";

function Hero() {
    const scrollToProjects = () => {
        const section = document.getElementById('projects');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const section = document.getElementById('contact'); 
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
        <div>
            {/* Hero Section*/}
            <section 
                id="home" 
                className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
                <div className="relative z-10 max-w-6xl w-full px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left animate-fade-in-up mt-16 md:mt-0">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                Fitahiana Florent
                            </h1>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Developer
                            </h2>
                            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl">
                                Specialized in creating modern and innovative web and mobile applications
                            </p>
                            
                            {/* Social Media Icons */}
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 md:mb-8">
                                <a 
                                    href="https://github.com/DarkZangetsu" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group transition-transform hover:scale-110"
                                >
                                    <img 
                                        src="/images/github.png" 
                                        alt="GitHub" 
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/fitahiana-florent-rakotosalama/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group transition-transform hover:scale-110"
                                >
                                    <img 
                                        src="/images/linkedin.png" 
                                        alt="LinkedIn" 
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                </a>
                            </div>
                            
                            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                                <button 
                                    className="group px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 flex items-center gap-2" 
                                    onClick={scrollToProjects}
                                >
                                    View my projects
                                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </button>
                                <button 
                                    className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-all duration-300" 
                                    onClick={scrollToContact}
                                >
                                    Contact me
                                </button>
                                <a 
                                    href="pdf/cv.pdf" 
                                    download
                                    className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    <Download className="w-3 h-3 md:w-4 md:h-4" />
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* Photo Section */}
                        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative animate-fade-in mt-4 md:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
                            <img
                                src="images/hero/hero.png"
                                alt="Profile"
                                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-400/30"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
            </section>
        </div>
    );
}

export default Hero;