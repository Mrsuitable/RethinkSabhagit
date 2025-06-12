
import React from 'react';
import { CLUB_EMAIL } from '../constants';
import { ArrowRightIcon } from './icons/PhosphorIcons';

const CallToActionSection: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-brand-oxford-blue/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-platinum mb-6">
          Ready to Challenge Your Thinking?
        </h2>
        <p className="text-xl text-brand-silver-lake max-w-2xl mx-auto mb-10 leading-relaxed">
          ReThink Sabha welcomes individuals from all backgrounds who are passionate about critical discussion and intellectual growth. Whether you're a seasoned debater or new to the arena, your voice is valuable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href={`mailto:${CLUB_EMAIL}?subject=Inquiry%20about%20ReThink%20Sabha`}
            className="group inline-flex items-center justify-center bg-brand-gold text-brand-deep-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Connect With Us
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          {/* <button 
            type="button"
            className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-4 px-10 rounded-lg text-lg hover:bg-brand-gold hover:text-brand-deep-blue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => alert('Membership form coming soon!')}
          >
            Membership Info
          </button> */}
        </div>
        <p className="mt-8 text-brand-silver-lake">
          Meetings are typically held [Frequency, e.g., bi-weekly on Thursdays]. Follow our updates or email us for the latest schedule!
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
