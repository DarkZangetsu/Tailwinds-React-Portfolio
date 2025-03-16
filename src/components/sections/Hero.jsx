/* eslint-disable react/no-unescaped-entities */
import { ChevronDown, Download } from "lucide-react";

function Hero() {

    const scrollToProjects = () => {
        const section = document.getElementById('projets');
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
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
                <div className="relative z-10 max-w-6xl w-full px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left animate-fade-in-up">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                Fitahiana Florent
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Développeur Full Stack
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                                Spécialisé dans la création d'applications web et mobile modernes et innovantes
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <button className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 flex items-center gap-2" onClick={scrollToProjects}>
                                    Voir mes projets
                                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </button>
                                <button className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-all duration-300" onClick={scrollToContact}>
                                    Me contacter
                                </button>
                                <a 
                                    href="/path-to-your-cv.pdf" 
                                    download
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Télécharger CV
                                </a>
                            </div>
                        </div>

                        {/* Photo Section */}
                        <div className="w-64 h-64 md:w-80 md:h-80 relative animate-fade-in">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
                            <img
                                src="/api/placeholder/320/320"
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