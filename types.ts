
export interface DebateTopic {
  id: string;
  title: string;
  description: string;
  date?: string; 
  category: string;
  icon?: React.ElementType; // For an optional icon component
  argumentsFor?: string;
  argumentsAgainst?: string;
  googleFormLink?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
