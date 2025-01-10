/* eslint-disable react/no-unescaped-entities */
import { Github, Linkedin, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Navigation items with correct IDs
  const navigationItems = [
    { name: 'Accueil', id: 'home' },
    { name: 'À propos', id: 'about' },
    { name: 'Projets', id: 'projets' },
    { name: 'Compétences', id: 'conpetences' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group"
        aria-label="Retour en haut"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Fitahiana Florent
            </h3>
            <p className="text-gray-400 max-w-sm">
              Développeur Full Stack passionné par la création d'applications web modernes et innovantes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation rapide</h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, `#${item.id}`)}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:contact@example.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>rakotosalamafitahiana@gmail.com</span>
              </a>
              <a href="tel:+33600000000" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+261 34 31 720 81</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Fianarantsoa, Madagascar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Fitahiana FLorent. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;