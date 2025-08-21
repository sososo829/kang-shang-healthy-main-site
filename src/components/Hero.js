import React from 'react';
import { colors } from '../utils/colors';
import Button from './common/Button';

// --- 主視覺區塊組件 ---
const Hero = ({ content }) => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="h-screen bg-center flex items-center no-repeat bg-cover" style={{ backgroundImage: "url('./images/hero.png')" }}>
      
    </section>
  );
};

export default Hero; 