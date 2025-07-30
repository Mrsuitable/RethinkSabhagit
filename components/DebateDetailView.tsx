
import React from 'react';
import { DebateTopic } from '../types';
import { ArrowLeftIcon } from './icons/PhosphorIcons';

interface DebateDetailViewProps {
  topic: DebateTopic;
  onClose: () => void;
}

const DebateDetailView: React.FC<DebateDetailViewProps> = ({ topic, onClose }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [topic]);

  return (
    <section id={`debate-${topic.id}`} className="py-16 sm:py-20 text-brand-platinum animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onClose}
          className="mb-8 inline-flex items-center text-brand-silver-lake hover:text-brand-gold transition-colors group text-lg"
          aria-label="Back to all debates"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to All Debates
        </button>

        <div className="mb-10 p-6 sm:p-8 bg-brand-oxford-blue rounded-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-platinum mb-2 sm:mb-0">
              {topic.title}
            </h1>
            <span className="bg-brand-gold text-brand-deep-blue text-sm sm:text-base font-bold px-4 py-2 rounded-full self-start sm:self-center whitespace-nowrap">
              FREe
            </span>
          </div>
          {topic.date && (
            <p className="text-brand-silver-lake text-lg mb-1">
              <span className="font-semibold text-brand-platinum">Date:</span> {topic.date}
            </p>
          )}
          <p className="text-brand-muted-gold text-md">
            <span className="font-semibold text-brand-platinum">Category:</span> {topic.category}
          </p>
        </div>
        
        <div className="bg-brand-oxford-blue/50 p-6 sm:p-8 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-serif font-semibold text-brand-platinum mb-3">About this Debate:</h2>
          <p className="text-lg text-brand-silver-lake leading-relaxed whitespace-pre-line">
            {topic.description}
          </p>
        </div>

        {topic.argumentsFor && (
          <div className="mb-8 p-6 sm:p-8 bg-brand-oxford-blue rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold mb-4">The Case For: Embracing a Globalized Future</h2>
            <p className="text-brand-silver-lake leading-relaxed text-lg whitespace-pre-line">{topic.argumentsFor}</p>
          </div>
        )}

        {topic.argumentsAgainst && (
          <div className="mb-8 p-6 sm:p-8 bg-brand-oxford-blue rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold mb-4">The Case Against: Preserving Identity and Equity</h2>
            <p className="text-brand-silver-lake leading-relaxed text-lg whitespace-pre-line">{topic.argumentsAgainst}</p>
          </div>
        )}

        {topic.googleFormLink && (
          <div className="mt-12 py-10 px-6 bg-brand-steel-blue/30 rounded-xl shadow-xl text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-platinum mb-4">
              Join the Conversation!
            </h2>
            <p className="text-xl text-brand-silver-lake mb-6 max-w-xl mx-auto">
              This is a free event and your perspective is valuable. Register your interest to participate or attend.
            </p>
            <a
              href={topic.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-brand-deep-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75"
            >
              Register via Google Form
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default DebateDetailView;
