import React from 'react';
import { colors } from '../../utils/colors';

// --- 按鈕組件 ---
const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  className = "",
  type = "button"
}) => {
  const variants = {
    primary: {
      backgroundColor: colors.primary.sage,
      color: colors.background.white,
      hover: 'hover:bg-opacity-90'
    },
    secondary: {
      backgroundColor: colors.primary.coral,
      color: colors.background.white,
      hover: 'hover:bg-opacity-90'
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary.sage,
      border: `2px solid ${colors.primary.sage}`,
      hover: 'hover:bg-opacity-10'
    }
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`font-bold rounded-lg transition-all duration-200 transform hover:scale-105 ${currentSize} ${currentVariant.hover} ${className}`}
      style={{
        backgroundColor: currentVariant.backgroundColor,
        color: currentVariant.color,
        border: currentVariant.border
      }}
    >
      {children}
    </button>
  );
};

export default Button;
