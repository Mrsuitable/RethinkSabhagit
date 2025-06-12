
import React from 'react';
import { APP_NAME } from '../constants';

const HeroSection: React.FC = () => {
  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/rethinksabhahero/1920/1080"
          alt="Abstract background representing discussion and ideas"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep-blue/50 via-brand-deep-blue to-brand-deep-blue"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-brand-platinum mb-6">
          <span className="text-brand-gold">{APP_NAME}:</span> Challenging Perspectives, Igniting Dialogue.
        </h1>
        <p className="text-xl sm:text-2xl text-brand-silver-lake mb-10 leading-relaxed">
          A dedicated platform for dissecting timeless societal issues through rigorous debate, critical thinking, and open minds.
        </p>
        <div className="space-x-4">
          <a
            href="#debates"
            onClick={(e) => smoothScrollTo(e, '#debates')}
            className="bg-brand-gold text-brand-deep-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Debates
          </a>
          <a
            href="#join"
            onClick={(e) => smoothScrollTo(e, '#join')}
            className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-gold hover:text-brand-deep-blue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Involved
          </a>
        </div>
      </div>
       {/* Subtle scroll down indicator or animation could be added here */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" onClick={(e) => smoothScrollTo(e, '#about')} aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-brand-silver-lake animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
