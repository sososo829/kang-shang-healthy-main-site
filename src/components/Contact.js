import React from 'react';
import { colors } from '../utils/colors';
import SectionTitle from './common/SectionTitle';

// --- 聯絡信息組件 ---
const ContactInfo = ({ content, lang = 'zh' }) => {
  const addressLabel = lang === 'zh' ? '地址:' : 'Address:';
  const addressText = lang === 'zh' ? '北角馬寶道38號地下' : 'G/F, 38 Ma Po Road, North Point';
  const descriptionText = lang === 'zh' 
    ? '對我們的產品有任何疑問，或是有合作需求嗎？歡迎隨時與我們聯繫！'
    : 'Have any questions about our products or interested in collaboration? Feel free to contact us anytime!';

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text.secondary }}>{content.title}</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">{descriptionText}</p>
      <div className="space-y-4">
        <div className="flex items-start">
          <span className="font-semibold text-gray-600 mr-3 min-w-16">{addressLabel}</span> 
          <span className="text-gray-600">{addressText}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <a 
            href={`mailto:${content.email}`} 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200 underline decoration-dotted"
          >
            {content.email}
          </a>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <a 
            href="https://www.instagram.com/kang_shang_healthy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200 underline decoration-dotted"
          >
            @kang_shang_healthy
          </a>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <a 
            href="https://wa.me/85291979061" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200 underline decoration-dotted"
          >
            +852 9197 9061
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Google Map 組件 ---
const GoogleMap = () => (
  <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg" style={{ boxShadow: `0 10px 30px ${colors.shadow.medium}` }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6350429926006!2d114.20102!3d22.291810500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040170581afb23%3A0xe0c504c61d07b0a6!2z5bq35bCa5YGl5bq36aOf5p2Q5bqX!5e0!3m2!1sen!2suk!4v1755333957985!5m2!1sen!2suk"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Kang Shang Location"
    ></iframe>
  </div>
);

// --- 頁尾組件 ---
const Footer = ({ content }) => (
  <div className="text-center mt-16 pt-8 border-t" style={{ borderColor: colors.border.sage }}>
    <p className="text-sm text-gray-600">{content.footer}</p>
  </div>
);

// --- 聯絡方式/頁尾區塊 ---
const Contact = ({ content, lang = 'zh' }) => (
  <section id="contact" className="py-20" style={{ backgroundColor: colors.background.cream }}>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <ContactInfo content={content} lang={lang} />
        <GoogleMap />
      </div>
      <Footer content={content} />
    </div>
  </section>
);

export default Contact; 