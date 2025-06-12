
import React from 'react';

// Common props for icons
interface IconProps {
  className?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'; // Example weights
}

// Using a simplified approach, actual Phosphor icons are more complex
// These are illustrative placeholders styled with Tailwind.

export const LightBulbIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <line x1="128" y1="232" x2="128" y2="248" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="96" y1="248" x2="160" y2="248" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M164,154.8V200a12,12,0,0,1-12,12H104a12,12,0,0,1-12-12V154.8A80.2,80.2,0,0,1,87.4,88a80,80,0,0,1,81.2,0A80.2,80.2,0,0,1,164,154.8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="104" y1="176" x2="152" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M196,216a72,72,0,0,0-136,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <circle cx="68" cy="100" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M116,160a40,40,0,0,0-81.6,28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <circle cx="188" cy="100" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M221.6,188A40,40,0,0,0,140,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <path d="M168,128.8V216L120.6,176H56a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h89.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M208,40H118.8L71.4,80H160a8,8,0,0,1,8,8v88.8L215.4,144H208a0,0,0,0,1,0,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <path d="M48,216a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M208,216.00005V136a8,8,0,0,0-8-8H48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="128" y1="128" x2="128" y2="216.00005" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const ScaleIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="104" y1="216" x2="152" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M48,88H208L128,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M48,88l24,96h32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M208,88l-24,96h-32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="96" y="96" width="64" height="64" strokeWidth="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="96" y1="40" x2="96" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="128" y1="40" x2="128" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="160" y1="40" x2="160" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="96" y1="216" x2="96" y2="240" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="128" y1="216" x2="128" y2="240" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="160" y1="216" x2="160" y2="240" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="216" y1="96" x2="240" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="216" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="216" y1="160" x2="240" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="96" x2="16" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="160" x2="16" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <polyline points="184.118 71.882 224.239 112 184.118 152.118" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="31.761" y1="112" x2="224.239" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
 </svg>
);

export const ListIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="200" y1="200" x2="56" y2="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const TwitterLogoIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <path d="M224,72a120.4,120.4,0,0,1-35.2,9.6A60.2,60.2,0,0,0,214.4,44.8a121.3,121.3,0,0,1-38.9,14.8,59.9,59.9,0,0,0-102.1,54.5,169.9,169.9,0,0,1-123.4-62.6,59.9,59.9,0,0,0,18.5,79.9,59.7,59.7,0,0,1-27.1-7.5v.8a59.9,59.9,0,0,0,48,58.8,59.8,59.8,0,0,1-27,.9,59.9,59.9,0,0,0,55.9,41.6,120.2,120.2,0,0,1-74.6,25.7,122.9,122.9,0,0,1-14.3-0.8,169.3,169.3,0,0,0,91.8,26.8c110.1,0,170.3-91.1,170.3-170.3,0-2.6,0-5.2-0.2-7.8A121.1,121.1,0,0,0,224,72Z" strokeWidth={weight === 'fill' ? 0 : 16} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LinkedinLogoIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <rect x="36" y="36" width="184" height="184" rx="8" strokeWidth={weight === 'fill' ? 0 : 16} strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <circle cx="88" cy="80" r="12" fill="currentColor"/>
  </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM205.9,64,128,133.1,50.1,64ZM40,193.8V70.1l82.1,72.3a8.1,8.1,0,0,0,5.2,1.9,7.8,7.8,0,0,0,5.2-1.9L216,70.1V193.8Z" strokeWidth={weight === 'fill' ? 0 : 16} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"/>
    <ellipse cx="128" cy="128" rx="40" ry="96" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"/>
    <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-6 h-6", weight = "regular" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <rect width="256" height="256" fill="none"/>
    <line x1="224" y1="128" x2="32" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="112 56 32 128 112 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </svg>
);
