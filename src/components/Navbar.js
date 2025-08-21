import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

// --- 語言切換器組件 ---
const LanguageToggle = ({ lang, setLang }) => (
  <div className="mr-4">
    <button 
      onClick={() => setLang('zh')} 
      className={`px-2 py-1 text-sm rounded ${lang === 'zh' ? 'text-white' : 'text-gray-600'}`}
      style={{ backgroundColor: lang === 'zh' ? 'rgb(215, 135, 138)' : 'transparent' }}
    >
      中
    </button>
    <button 
      onClick={() => setLang('en')} 
      className={`px-2 py-1 text-sm rounded ${lang === 'en' ? 'text-white' : 'text-gray-600'}`}
      style={{ backgroundColor: lang === 'en' ? 'rgb(215, 135, 138)' : 'transparent' }}
    >
      EN
    </button>
  </div>
);

// --- 導覽項目組件 ---
const NavItem = ({ item, scrollToSection, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu
    
    if (item.id === 'all-products') {
      navigate('/products');
      return;
    }
    
    // If we're on the products page, navigate to home first
    if (location.pathname === '/products') {
      navigate(`/#${item.id}`);
      // Add a small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // On home page, just scroll
      scrollToSection(item.id);
    }
  };
  
  return (
    <a 
      href={`#${item.id}`} 
      onClick={handleClick}
      className="text-gray-700 transition-colors font-medium"
      style={{ '--tw-text-opacity': '1' }}
      onMouseEnter={(e) => e.target.style.color = 'rgba(182,196,160,255)'}
      onMouseLeave={(e) => e.target.style.color = 'rgb(55 65 81)'}
    >
      {item.text}
    </a>
  );
};

// --- 手機導覽菜單組件 ---
const MobileMenu = ({ isOpen, navItems, scrollToSection, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  const handleMobileClick = (item) => {
    setIsOpen(false);
    
    if (item.id === 'all-products') {
      navigate('/products');
      return;
    }
    
    // If we're on the products page, navigate to home first
    if (location.pathname === '/products') {
      navigate(`/#${item.id}`);
      // Add a small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // On home page, just scroll
      scrollToSection(item.id);
    }
  };
  
  return (
    <div className="md:hidden mt-4">
      {navItems.map(item => (
        <a 
          key={item.id}
          href={`#${item.id}`} 
          onClick={(e) => { e.preventDefault(); handleMobileClick(item); }} 
          className="block py-2 px-4 text-sm text-gray-700 rounded"
          style={{ '--tw-bg-opacity': '1' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(239,231,208,255)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

// --- 導覽列主組件 ---
const Navbar = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', text: content.nav.about },
    { id: 'products', text: content.nav.products },
    { id: 'all-products', text: content.nav.allProducts },
    { id: 'why-us', text: content.nav.whyUs },
    { id: 'testimonials', text: content.nav.testimonials },
    { id: 'contact', text: content.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled || isOpen || location.pathname === '/products' ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/95'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavItem key={item.id} item={item} scrollToSection={scrollToSection} setIsOpen={setIsOpen} />
            ))}
          </div>

          <div className="flex items-center">
            <LanguageToggle lang={lang} setLang={setLang} />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              style={{ color: 'rgba(182,196,160,255)' }} 
              className="md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        <MobileMenu isOpen={isOpen} navItems={navItems} scrollToSection={scrollToSection} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar; 