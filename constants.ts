
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
    title:  "Are Competitions good For the Indian society?",
     description: "This debate explores whether the nature of US indians being supeeeerrrr competition is good or not.",
 
    date: "TBD",
    category: "Socio-Cultural Dynamics",
    icon: GlobeIcon,
    argumentsFor: "Boosts Innovation & Progress – From startups like Zomato and BYJU’s to India’s space mission (Chandrayaan-3), competition pushes us to dream bigger and achieve global recognition.

Encourages Personal Growth – Exams, sports, or even reality shows motivate us to sharpen our skills, set goals, and work harder.

Global Edge – In a world where every country is racing ahead, competition helps India stay relevant and ahead in technology, economy, and talent..",
    argumentsAgainst: "Mental Health Crisis – The pressure to “be number one” leads to stress, anxiety, and even tragic consequences for students and young professionals.

Unfair Playing Field – Not everyone has equal access to resources; competition often benefits the privileged while leaving others behind.

Kills Collaboration & Empathy – When everyone is busy outshining others, teamwork, kindness, and collective growth take a backseat..",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSewZzRvdP3ih5wHf_O1BRtDLNz1PRchoHo0RIOK0I23BqRDvQ/viewform?usp=header",
  }
];

export const CLUB_EMAIL = "rethinksabha@gmail.com
";
