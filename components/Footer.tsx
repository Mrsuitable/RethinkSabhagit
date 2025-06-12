
import React from 'react';
import { APP_NAME, CLUB_EMAIL } from '../constants';
import { TwitterLogoIcon, LinkedinLogoIcon, EnvelopeIcon } from './icons/PhosphorIcons'; // Example Icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-oxford-blue border-t border-brand-steel-blue/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-platinum mb-2">{APP_NAME}</h3>
            <p className="text-brand-silver-lake text-sm">Fostering critical thought, one debate at a time.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-platinum mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-brand-silver-lake hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#debates" className="text-brand-silver-lake hover:text-brand-gold transition-colors">Our Debates</a></li>
              <li><a href="#join" className="text-brand-silver-lake hover:text-brand-gold transition-colors">Get Involved</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-platinum mb-3">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-2">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-brand-silver-lake hover:text-brand-gold transition-colors"><TwitterLogoIcon className="w-6 h-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-silver-lake hover:text-brand-gold transition-colors"><LinkedinLogoIcon className="w-6 h-6" /></a>
              <a href={`mailto:${CLUB_EMAIL}`} aria-label="Email" className="text-brand-silver-lake hover:text-brand-gold transition-colors"><EnvelopeIcon className="w-6 h-6" /></a>
            </div>
            <p className="text-brand-silver-lake text-sm">Email: <a href={`mailto:${CLUB_EMAIL}`} className="hover:text-brand-gold transition-colors">{CLUB_EMAIL}</a></p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-brand-steel-blue/30 text-center text-brand-silver-lake text-sm">
          <p>&copy; {currentYear} {APP_NAME}. All Rights Reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
