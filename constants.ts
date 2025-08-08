
import { DebateTopic, NavLink } from './types';
import { GlobeIcon } from './components/icons/PhosphorIcons'; // Using Phosphor icons

export const APP_NAME = "ReThink Sabha";

export const NAVIGATION_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'debates', label: 'Our Debates', href: '#debates' },
  { id: 'join', label: 'Get Involved', href: '#join' },
];

export const SAMPLE_DEBATE_TOPICS: DebateTopic[] = [
  {
    id: 'dt007',
    title: "Is Indian Modernisation Good?",
    description: "A critical discussion on the multifaceted impacts of modernization in India. This debate explores arguments FOR embracing global interconnectedness and promoting a unified (global) culture, versus arguments AGAINST, focusing on potential loss of indigenous cultures, societal disruptions, and ensuring equitable development. Join us for this vital conversation!",
    date: "Mid Augest",
    category: "Socio-Cultural Dynamics",
    icon: GlobeIcon,
    argumentsFor: "Proponents argue that modernization, driven by global interconnectedness, is vital for India's progress. Embracing a more unified global culture can foster innovation, economic growth, and access to international knowledge and opportunities. This perspective often highlights the benefits of shared values and standards in a rapidly evolving world.",
    argumentsAgainst: "Conversely, critics raise concerns about the potential erosion of India's rich indigenous cultures and traditions. They question whether modernization benefits all segments of society equally, pointing to risks of increased social disparities, cultural homogenization, and the challenge of adapting Western models to the Indian context without critical evaluation.",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSewZzRvdP3ih5wHf_O1BRtDLNz1PRchoHo0RIOK0I23BqRDvQ/viewform?usp=header",
  }
];

export const CLUB_EMAIL = "rethinksabha@gmail.com
";
