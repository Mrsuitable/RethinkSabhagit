
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import DebateDetailView from './components/DebateDetailView'; // Import the new component
import { DebateTopic } from './types'; // Import DebateTopic type

const App: React.FC = () => {
  const [selectedDebate, setSelectedDebate] = useState<DebateTopic | null>(null);

  const handleDebateSelect = (topic: DebateTopic) => {
    setSelectedDebate(topic);
    window.scrollTo(0, 0); // Scroll to top when a debate is selected
  };

  const handleCloseDetailView = () => {
    setSelectedDebate(null);
     // Optional: Scroll to events section after closing detail view
    const eventsSection = document.getElementById('debates');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({top:0, behavior: 'smooth'});
    }
  };
  
  const handleHeaderNavigation = () => {
    if (selectedDebate) {
      setSelectedDebate(null); // Close detail view if a header link is clicked
    }
  };

  return (
    <div className="min-h-screen bg-brand-deep-blue text-brand-platinum font-sans selection:bg-brand-gold selection:text-brand-deep-blue">
      <Header onNavigate={handleHeaderNavigation} />
      <main>
        {selectedDebate ? (
          <DebateDetailView topic={selectedDebate} onClose={handleCloseDetailView} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <EventsSection onDebateSelect={handleDebateSelect} />
            <CallToActionSection />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
