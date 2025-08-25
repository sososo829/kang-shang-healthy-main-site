import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// --- 引入模組化組件 ---
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ProductsPage from './pages/ProductsPage';
import SEO from './components/SEO';
import { getSEOContent } from './utils/seo-config';

// --- 引入產品數據 ---
import { allProducts } from './data/products';

// --- 獲取首頁產品函數 ---
const getHomePageProducts = (lang = 'zh') => {
  const products = allProducts[lang] || allProducts.zh;
  
  // 指定要顯示的產品ID
  const homeProductIds = ['70071', '90055', '70019'];
  
  // 直接返回完整的產品對象，讓ProductCard處理顯示
  const homeProducts = homeProductIds.map(id => {
    const product = products.find(p => p.id === id);
    return product || null;
  }).filter(Boolean);
  
  return homeProducts;
};

// --- 數據內容 (中英雙語) ---
const content = {
  zh: {
    nav: {
      about: '品牌故事',
      products: '皇牌產品',
      whyUs: '專業堅持',
      testimonials: '顧客實證',
      contact: '聯絡我們',
      allProducts: '全部產品',
    },
    hero: {
      title: '康尚 | 您信賴的花旗蔘專家',
      subtitle: '只專注於最優質的威斯康辛州花旗蔘，為您的健康生活注入純淨元氣。',
      cta: '探索我們的產品',
    },
    about: {
      title: '我們的故事',
      story: '「康尚」花旗蔘專門店，超過50年參茸海味批發零售經驗，堅持優質出品，親自嚴選性價比海味藥材。我們不僅是銷售者，更是您健康路上的夥伴，致力於將花旗蔘的益處，無縫融入您的時尚生活。',
    },
    products: {
      title: '皇牌產品',
      items: getHomePageProducts('zh'),
    },
    whyUs: {
      title: '康尚的專業堅持',
      points: [
        {
          title: '傳統與創新',
          description: '尊重傳統風乾技術，同時以創新思維簡化處理過程，確保最正宗的風味。',
        },
        {
          title: '客制化禮盒',
          description: '過大禮、婚宴回禮、散水茶提供代客浸發，切片，磨粉服務，方便快捷',
        },
        {
          title: '時尚包裝',
          description: '我們確保產品被妥善保存和密封，並以簡潔時尚的包裝，顛覆您對海味的傳統印象。',
        },
      ],
    },
    testimonials: {
      title: '顧客回饋',
      reviews: [
        {
          quote: '康尚的花旗蔘味道非常濃郁，跟我在其他地方買的完全不同！飲用後感覺精神了很多。',
          author: 'Jessica L.',
        },
        {
          quote: '包裝精美，送禮自用都很大方。蔘片很方便，我每天在辦公室都會泡一杯。',
          author: '王先生',
        },
      ],
    },
    contact: {
      title: '聯絡我們',
      namePlaceholder: '姓名',
      emailPlaceholder: '電子郵件',
      messagePlaceholder: '您的訊息...',
      submitButton: '傳送',
      email: 'kang.shang.healthy@gmail.com',
      footer: '© 2024 康尚 KANG SHANG. All Rights Reserved.',
    },
  },
  en: {
    nav: {
      about: 'Our Story',
      products: 'Signature Products',
      whyUs: 'Our Commitment',
      testimonials: 'Customer Reviews',
      contact: 'Contact Us',
      allProducts: 'All Products',
    },
    hero: {
      title: 'KANG SHANG | Your Trusted American Ginseng Expert',
      subtitle: 'Focusing solely on the finest Wisconsin American ginseng to invigorate your healthy lifestyle.',
      cta: 'Explore Our Products',
    },
    about: {
      title: 'Our Story',
      story: 'KANG SHANG American Ginseng Specialty Store has over 50 years of experience in wholesale and retail of ginseng, seafood, and dried goods. We maintain high-quality products and personally select cost-effective seafood and medicinal herbs. We are more than just sellers; we are your partners on the path to wellness, dedicated to seamlessly integrating the benefits of American ginseng into your stylish life.',
    },
    products: {
      title: 'Signature Products',
      items: getHomePageProducts('en'),
    },
    whyUs: {
      title: 'The KANG SHANG Commitment',
      points: [
        {
          title: 'Tradition & Innovation',
          description: 'We respect traditional air-drying techniques while using innovative thinking to simplify processing, ensuring the most authentic flavor.',
        },
        {
          title: 'Custom Gift Boxes',
          description: 'We provide soaking, slicing, and grinding services for wedding gifts, banquet favors, and farewell tea, making it convenient and fast.',
        },
        {
          title: 'Fashionable Packaging',
          description: 'We ensure products are properly preserved and sealed, with clean and fashionable packaging that transforms your traditional impression of dried seafood.',
        },
      ],
    },
    testimonials: {
      title: 'Customer Reviews',
      reviews: [
        {
          quote: 'The ginseng from Kang Shang is incredibly potent, completely different from others I\'ve bought! I feel much more energetic after drinking it.',
          author: 'Jessica L.',
        },
        {
          quote: 'The packaging is elegant, perfect for gifts. The slices are so convenient for my daily cup at the office.',
          author: 'Mr. Wong',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Your Message...',
      submitButton: 'Send',
      email: 'kang.shang.healthy@gmail.com',
      footer: '© 2024 KANG SHANG. All Rights Reserved.',
    },
  },
};

// --- 主頁面組件 ---
const HomePage = ({ lang, setLang }) => {
  const currentContent = content[lang];
  
  const seoContent = getSEOContent('homepage', lang);
  
  return (
    <>
      <SEO 
        title={seoContent.title}
        description={seoContent.description}
        keywords={seoContent.keywords}
        lang={lang}
      />
      <main className="relative">
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Products content={currentContent.products} lang={lang} />
        <WhyUs content={currentContent.whyUs} />
        {/* <Testimonials content={currentContent.testimonials} /> */}
        <Contact content={currentContent.contact} lang={lang} />
      </main>
    </>
  );
};

// --- 語言持久化函數 ---
const LANGUAGE_KEY = 'kang-shang-language';

const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    return stored === 'en' ? 'en' : 'zh'; // Default to 'zh' if not set or invalid
  } catch (error) {
    console.warn('Could not read language from localStorage:', error);
    return 'zh'; // Fallback to Chinese
  }
};

const setStoredLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.warn('Could not save language to localStorage:', error);
  }
};

// --- 主應用程式組件 ---
export default function App() {
  const [lang, setLang] = useState(getStoredLanguage);
  const currentContent = content[lang];

  // 語言切換處理函數
  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setStoredLanguage(newLang);
  };

  // 監聽 localStorage 變化（可選，用於多標籤頁同步）
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === LANGUAGE_KEY && e.newValue) {
        setLang(e.newValue === 'en' ? 'en' : 'zh');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans bg-white overflow-x-hidden">
          <Navbar lang={lang} setLang={handleLanguageChange} content={currentContent} />
          <Routes>
            <Route path="/" element={<HomePage lang={lang} setLang={handleLanguageChange} />} />
            <Route path="/products" element={<ProductsPage lang={lang} />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}
