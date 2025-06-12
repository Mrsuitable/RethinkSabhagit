
import React from 'react';
import { LightBulbIcon, UsersIcon, ChatBubbleLeftRightIcon } from './icons/PhosphorIcons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-brand-oxford-blue p-6 rounded-xl shadow-lg hover:shadow-brand-gold/20 transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-brand-steel-blue text-brand-gold">
      {icon}
    </div>
    <h3 className="text-2xl font-serif font-semibold text-brand-platinum mb-2">{title}</h3>
    <p className="text-brand-silver-lake leading-relaxed">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-oxford-blue/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-platinum mb-4">
            Deconstructing Yesterday, Debating Today, Designing Tomorrow.
          </h2>
          <p className="text-xl text-brand-silver-lake max-w-3xl mx-auto leading-relaxed">
            "ReThink Sabha" isn't just a name; it's our philosophy. We believe that by critically re-examining established norms and historical challenges ('Sabha' implying assembly for discussion), we can foster innovative solutions and a deeper understanding of our world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<LightBulbIcon className="w-8 h-8" />}
            title="Critical Inquiry"
            description="We encourage dissecting complex societal issues, moving beyond surface-level understanding to explore root causes and diverse perspectives."
          />
          <FeatureCard 
            icon={<ChatBubbleLeftRightIcon className="w-8 h-8" />}
            title="Respectful Dialogue"
            description="Our debates are founded on mutual respect, active listening, and the pursuit of constructive discourse, even on contentious topics."
          />
          <FeatureCard 
            icon={<UsersIcon className="w-8 h-8" />}
            title="Community of Thinkers"
            description="Join a vibrant community passionate about intellectual exploration, continuous learning, and shaping a more thoughtful future."
          />
        </div>
        
        <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold text-brand-platinum mb-6">Our Vision</h3>
            <p className="text-lg text-brand-silver-lake leading-relaxed mb-4">
              At ReThink Sabha, we aim to be a crucible for ideas. We delve into the "old problems" of society not to dwell on the past, but to extract timeless wisdom and unearth persistent patterns. By understanding how historical contexts have shaped current situations, we equip ourselves to better navigate the complexities of the present and future.
            </p>
            <p className="text-lg text-brand-silver-lake leading-relaxed">
              We tackle subjects ranging from ethics and governance to social structures and technological impacts, always with the goal of fostering intellectual humility and a passion for reasoned argument.
            </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
