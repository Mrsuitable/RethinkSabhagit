
import React from 'react';
import { DebateTopic } from '../types';

interface DebateCardProps {
  topic: DebateTopic;
  onSelect?: (topic: DebateTopic) => void;
}

const DebateCard: React.FC<DebateCardProps> = ({ topic, onSelect }) => {
  const IconComponent = topic.icon;
  const isClickable = !!onSelect;

  const handleClick = () => {
    if (onSelect) {
      onSelect(topic);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent scrolling on spacebar
      handleClick();
    }
  };
  
  const commonClasses = "bg-brand-oxford-blue rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 flex flex-col h-full";
  const clickableClasses = isClickable ? "hover:scale-105 hover:shadow-brand-gold/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-75" : "";

  return (
    <div
      className={`${commonClasses} ${clickableClasses}`}
      onClick={isClickable ? handleClick : undefined}
      onKeyPress={isClickable ? handleKeyPress : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? `Learn more about ${topic.title}` : undefined}
      aria-pressed={isClickable ? false : undefined} // For role="button"
    >
      <div className="p-6 sm:p-8 flex-grow">
        {IconComponent && (
          <div className="mb-4 text-brand-gold">
            <IconComponent className="w-10 h-10" />
          </div>
        )}
        <h3 className="text-2xl font-serif font-semibold text-brand-platinum mb-3 leading-tight">{topic.title}</h3>
        <p className="text-brand-silver-lake text-sm mb-4 leading-relaxed flex-grow line-clamp-4 group-hover:line-clamp-none transition-all">
          {topic.description}
        </p>
      </div>
      <div className="p-6 sm:p-8 bg-brand-steel-blue/30 mt-auto"> {/* mt-auto pushes this to the bottom */}
        {topic.date && (
          <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-1">{topic.date}</p>
        )}
        <p className="text-sm text-brand-silver-lake font-medium">{topic.category}</p>
      </div>
    </div>
  );
};

export default DebateCard;
