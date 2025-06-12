
import React, { useState, useEffect } from 'react';
import { APP_NAME, NAVIGATION_LINKS } from '../constants';
import { NavLink } from '../types';
import { ListIcon, XIcon } from './icons/PhosphorIcons'; // Simple hamburger/close icons

interface HeaderProps {
  onNavigate?: () => void; // Callback to signal navigation, e.g., to close detail view
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(); // Signal that a main navigation link was clicked
    }
    const targetElement = document.getElementById(targetId.substring(1)); // Remove '#'
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (targetId === '#hero') { // Fallback for hero if element not found immediately (e.g. during initial load/state change)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-brand-oxford-blue/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => smoothScrollTo(e, '#hero')} className="text-3xl font-serif font-bold text-brand-platinum hover:text-brand-gold transition-colors">
            {APP_NAME}
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {NAVIGATION_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                className="text-brand-silver-lake hover:text-brand-platinum font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-platinum hover:text-brand-gold focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon className="h-7 w-7" /> : <ListIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-oxford-blue/95 backdrop-blur-md pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-2">
            {NAVIGATION_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                className="text-brand-silver-lake hover:text-brand-platinum font-medium py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
