import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../utils/colors';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';
import ProductCard from './common/ProductCard';

// --- 產品區塊 ---
const Products = ({ content, lang = 'zh' }) => {
  const navigate = useNavigate();

  const handleMoreProductsClick = () => {
    navigate('/products');
  };

  const moreProductsText = lang === 'zh' ? '查看更多產品' : 'View More Products';

  return (
    <section id="products" className="py-20" style={{ backgroundColor: colors.background.cream }}>
      <div className="container mx-auto px-6">
        <SectionTitle color={colors.primary.coral}>{content.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.items.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} showVariations={false} />
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleMoreProductsClick}
            className="px-8"
          >
            {moreProductsText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products; 