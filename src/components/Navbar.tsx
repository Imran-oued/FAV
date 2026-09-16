import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'Nos Offres', to: '/offres' },
    { name: 'Billetterie IATA', to: '/billetterie' },
    { name: 'Pourquoi Nous', to: '/#whyus' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="flex items-center cursor-pointer">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="FAV Logo" className="h-12 md:h-16 bg-white rounded-full p-1 shadow-sm shrink-0" />
              <div className={`font-display font-bold text-lg md:text-xl tracking-wide hidden sm:block whitespace-nowrap ${isScrolled ? 'text-brand-dark' : 'text-brand-gold drop-shadow-md'}`}>
                FASO ALI VOYAGES SARL
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.to.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.to}
                className={`cursor-pointer font-medium hover:text-brand-gold transition-colors ${(isScrolled || !isHomePage) ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.to} 
                className={`cursor-pointer font-medium hover:text-brand-gold transition-colors ${(isScrolled || !isHomePage) ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link to="/offres" className="btn-primary cursor-pointer">
            Réserver maintenant
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-brand-dark' : 'text-white'}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            link.to.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 font-medium py-2 border-b border-gray-100 block"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 font-medium py-2 border-b border-gray-100 block"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link to="/offres" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center mt-4">
            Réserver maintenant
          </Link>
        </div>
      )}
    </nav>
  );
};
