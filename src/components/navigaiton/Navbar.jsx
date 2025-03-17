/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#projets', label: 'Projets' },
    { href: '#competences', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    const offset = isScrolled ? 60 : 80; // Ajuster l'offset en fonction de l'état de défilement
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${
          isScrolled 
            ? 'md:h-16 h-12' // Hauteur encore plus réduite en mode mobile lors du défilement
            : 'md:h-20 h-16' // Hauteur mobile réduite par défaut
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ${
                isScrolled
                  ? 'text-lg md:text-2xl' // Taille réduite en mode mobile lors du défilement
                  : 'text-xl md:text-2xl'
              }`}
            >
              Fitahiana Florent
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(href);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeSection === href.slice(1)
                    ? 'text-white bg-blue-600/20 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/DarkZangetsu" 
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/fitahiana-florent-rakotosalama/" 
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          maxHeight: 'calc(100vh - 60px)',  // Limite la hauteur du menu
          overflowY: 'auto',                // Permet le défilement si nécessaire
          top: isScrolled ? '48px' : '64px' // Position dynamique en fonction de la hauteur de la barre
        }}
      >
        <div className="px-2 py-1 bg-gray-900/95 backdrop-blur-lg">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(href);
              }}
              className={`block px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? 'text-white bg-blue-600/20 font-medium'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {label}
            </a>
          ))}
          <div className="flex gap-2 px-3 py-2 border-t border-gray-800 mt-1">
            <a 
              href="https://github.com/DarkZangetsu" 
              className="p-1 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/fitahiana-florent-rakotosalama/" 
              className="p-1 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;