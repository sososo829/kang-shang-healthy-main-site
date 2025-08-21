import React from 'react';
import { colors } from '../utils/colors';
import SectionTitle from './common/SectionTitle';

// --- 圖標組件 ---
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c1.25-.98 2.2-2.43 2.5-4 .5-2.5-.5-5.5-2-7 .5-2.5 2.5-4 5-4.5 2.5-.5 5 .5 7 2 .5-2.5 2.5-4 5-4.5 2.5-.5 5 .5 7 2l-1.5 1.5c-1-1-2.5-1.5-4-1.5s-3 .5-4 1.5l-1.5-1.5c-1-1-2.5-1.5-4-1.5s-3 .5-4 1.5L2 22z"></path>
    <path d="M12 12v10"></path>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

// --- 特點卡片組件 ---
const FeatureCard = ({ point, icon, index }) => {
  // Create a gradient of colors that match the website's tone
  const iconColors = [
    { bg: colors.primary.coral, icon: colors.background.white }, // Coral with white icon
    { bg: colors.primary.coral, icon: colors.background.white }, // Coral with white icon  
    { bg: colors.primary.coral, icon: colors.background.white }  // Coral with white icon
  ];
  
  const currentColors = iconColors[index % iconColors.length];
  
  return (
    <div className="p-6 text-center">
      <div 
        className="inline-block p-4 rounded-full mb-4 shadow-lg transition-transform hover:scale-110" 
        style={{ 
          backgroundColor: currentColors.bg,
          color: currentColors.icon,
          boxShadow: `0 4px 15px ${colors.shadow.medium}`
        }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.coral }}>
        {point.title}
      </h3>
      <p className="text-gray-600">{point.description}</p>
    </div>
  );
};

// --- 為何選擇我們區塊 ---
const WhyUs = ({ content }) => {
  const icons = [<LeafIcon key="leaf" />, <StarIcon key="star" />, <ShieldCheckIcon key="shield" />];
  
  return (
    <section id="why-us" className="py-20" style={{ backgroundColor: colors.background.white }}>
      <div className="container mx-auto px-6">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.points.map((point, index) => (
            <FeatureCard key={index} point={point} icon={icons[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 