import React from 'react';
import { colors } from '../../utils/colors';

// --- 區塊標題組件 ---
const SectionTitle = ({ 
  children, 
  color = colors.text.primary,
  className = "",
  size = "4xl"
}) => {
  const sizeClasses = {
    "2xl": "text-2xl",
    "3xl": "text-3xl", 
    "4xl": "text-4xl",
    "5xl": "text-5xl"
  };

  return (
    <h2 
      className={`${sizeClasses[size]} font-bold text-center mb-12 ${className}`}
      style={{ color }}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
