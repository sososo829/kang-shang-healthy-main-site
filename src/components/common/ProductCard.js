import React, { useState } from 'react';
import { colors } from '../../utils/colors';
import Button from './Button';

// --- 產品卡片組件（支持變體切換） ---
const ProductCard = ({ product, lang = 'zh', showVariations = true }) => {
  const [selectedVariation, setSelectedVariation] = useState(0);

  const handleBuyClick = () => {
    const currentVariation = product.variations ? product.variations[selectedVariation] : product;
    const message = lang === 'zh' 
      ? `你好，我想購買：${product.name} ${currentVariation.size ? currentVariation.size : ''} - ${currentVariation.price}`
      : `Hi, I'm interested in purchasing: ${product.name} ${currentVariation.size ? currentVariation.size : ''} - ${currentVariation.price}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/85291979061?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const buyButtonText = lang === 'zh' ? '立即購買' : 'Buy Now';

  // Handle both product formats (with variations and flattened)
  const currentVariation = product.variations ? product.variations[selectedVariation] : product;
  const imgSrc = currentVariation.imgSrc;
  const price = currentVariation.price;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img 
        src={imgSrc} 
        alt={product.name} 
        className="w-full h-64 object-cover" 
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src='https://placehold.co/600x600/ccc/ffffff?text=Product+Image'; 
        }} 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.coral }}>
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        
        {/* Variation Selector - only show if product has variations and showVariations is true */}
        {showVariations && product.variations && product.variations.length > 1 && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {lang === 'zh' ? '選擇規格' : 'Select Size'}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.variations.map((variation, index) => (
                <button
                  key={variation.id}
                  onClick={() => setSelectedVariation(index)}
                  className={`px-3 py-1 text-sm rounded-md border transition-colors ${
                    selectedVariation === index
                      ? 'bg-coral-500 text-white border-coral-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-coral-300'
                  }`}
                  style={{
                    backgroundColor: selectedVariation === index ? colors.primary.coral : 'white',
                    color: selectedVariation === index ? 'white' : colors.text.primary,
                    borderColor: selectedVariation === index ? colors.primary.coral : '#d1d5db'
                  }}
                >
                  {variation.size}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-lg font-bold">
            {price}
          </span>
        </div>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={handleBuyClick}
          className="w-full"
        >
          {buyButtonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
