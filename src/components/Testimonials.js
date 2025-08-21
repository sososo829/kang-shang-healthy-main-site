import React from 'react';

// --- 區塊標題組件 ---
const SectionTitle = ({ children }) => (
  <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-16 animate-slide-up" style={{ color: 'rgba(215,135,138,255)' }}>
    <span className="relative">
      {children}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to right, rgba(182,196,160,255), rgba(142,156,120,255))' }}></div>
    </span>
  </h2>
);

// --- 星星評分組件 ---
const StarRating = () => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color: 'rgba(238,215,161,255)' }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

// --- 評價卡片組件 ---
const TestimonialCard = ({ review, index }) => (
  <div className="group p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl animate-slide-up bg-white"
       style={{ animationDelay: `${index * 300}ms` }}>
    <StarRating />
    
    {/* Quote icon */}
    <div className="text-center mb-6">
      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(182,196,160,255)' }}>
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>
    
    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 text-center font-light">
      "{review.quote}"
    </p>
    
  </div>
);

// --- 顧客評價區塊 ---
const Testimonials = ({ content }) => (
  <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(239,231,208,255), rgba(242,206,194,255), rgba(239,231,208,255))' }}>
    {/* Background decoration */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5">
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'rgba(182,196,160,255)' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'rgba(142,156,120,255)', animationDelay: '2s' }}></div>
    </div>
    
    <div className="relative z-10 container mx-auto px-6 max-w-5xl">
      <SectionTitle>{content.title}</SectionTitle>
      
      <div className="space-y-12">
        {content.reviews.map((review, index) => (
          <TestimonialCard key={index} review={review} index={index} />
        ))}
      </div>
      
      {/* Call to action */}
      <div className="text-center mt-16 animate-fade-in">
        <p className="text-gray-600 mb-6 text-lg">體驗過康尚產品嗎？歡迎分享您的感想</p>
        <button className="text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{ background: 'linear-gradient(to right, rgba(182,196,160,255), rgba(142,156,120,255))' }}>
          留下評價
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials; 