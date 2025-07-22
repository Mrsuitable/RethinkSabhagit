
import React from 'react';
import { SAMPLE_DEBATE_TOPICS } from '../constants';
import DebateCard from './DebateCard';
import { DebateTopic } from '../types';

interface EventsSectionProps {
  onDebateSelect?: (topic: DebateTopic) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ onDebateSelect }) => {
  return (
    <section id="debates" className="py-20 bg-brand-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-platinum mb-4">

          hii
          </h2>
          <p className="text-xl text-brand-silver-lake max-w-2xl mx-auto leading-relaxed">
            A glimpse into the diverse and thought-provoking topics we explore at ReThink Sabha. Click on a debate to learn more.
          </p>
        </div>
        {SAMPLE_DEBATE_TOPICS.length > 0 ? (
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto"> {/* Changed to single column for the single event */}
            {SAMPLE_DEBATE_TOPICS.map(topic => (
              <DebateCard key={topic.id} topic={topic} onSelect={onDebateSelect} />
            ))}
          </div>
        ) : (
          <p className="text-center text-brand-silver-lake text-xl">
            No upcoming debates scheduled at the moment. Please check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
