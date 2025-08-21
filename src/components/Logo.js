import React from 'react';

const Logo = () => (
  <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group transition-all duration-300">
    <img 
      src="/images/kang-shang-logo.png" 
      alt="康尚 KANG SHANG Logo" 
      className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" 
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'block';
      }}
    />
    <span className="font-serif text-3xl font-bold hidden transition-colors duration-300" style={{ color: 'rgba(182,196,160,255)' }}>
      康尚
    </span>
  </a>
);

export default Logo; 