import React from 'react';

// --- 區塊標題組件 ---
const SectionTitle = ({ children }) => (
  <h2 className="text-4xl text-gray-600 font-bold text-center mb-12">
    {children}
  </h2>
);

// --- 關於我們區塊 ---
const About = ({ content }) => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <SectionTitle>{content.title}</SectionTitle>
      <p className="text-gray-600 leading-relaxed text-lg">{content.story}</p>
    </div>
  </section>
);

export default About; 