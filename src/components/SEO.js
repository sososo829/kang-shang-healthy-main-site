import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  lang = 'en'
}) => {
  const siteUrl = 'https://kang-shang-healthy.web.app';
  const defaultImage = `${siteUrl}/images/kang-shang-logo.png`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  
  // Structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "康尚 Kang Shang",
    "alternateName": "Kang Shang Ginseng",
    "description": lang === 'zh' 
      ? "康尚花旗蔘專門店，超過50年參茸海味批發零售經驗。專注於最優質的威斯康辛州花旗蔘，提供過大禮、婚宴回禮、散水茶等傳統禮盒服務。"
      : "Kang Shang Ginseng Company with over 50 years of experience in ginseng and health products. Premium quality Wisconsin ginseng and traditional wedding gifts including Guo Da Li gift boxes.",
    "url": siteUrl,
    "telephone": "+852-XXXX-XXXX",
    "email": "kang.shang.healthy@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressCountry": "HK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.3193",
      "longitude": "114.1694"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "HKD, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": "Hong Kong",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": lang === 'zh' ? "花旗蔘產品目錄" : "Ginseng Products Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": lang === 'zh' ? "威斯康辛州花旗蔘" : "Wisconsin Ginseng"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": lang === 'zh' ? "過大禮禮盒" : "Guo Da Li Gift Box"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": lang === 'zh' ? "婚宴回禮" : "Wedding Favors"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/kangshang",
      "https://www.instagram.com/kangshang"
    ]
  };
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="康尚 Kang Shang" />
      <meta name="language" content={lang === 'zh' ? 'zh-HK' : 'en'} />
      <meta name="geo.region" content="HK" />
      <meta name="geo.placename" content="Hong Kong" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:locale" content={lang === 'zh' ? 'zh_HK' : 'en_US'} />
      <meta property="og:site_name" content="康尚 Kang Shang" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />
      <meta property="twitter:site" content="@kangshang" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" hreflang={lang === 'zh' ? 'zh-HK' : 'en'} href={`${fullUrl}?lang=${lang}`} />
      <link rel="alternate" hreflang="x-default" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
