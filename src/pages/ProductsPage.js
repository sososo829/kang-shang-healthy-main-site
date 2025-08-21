import React, { useState, useMemo } from 'react';
import { colors } from '../utils/colors';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';
import { allProducts, getProductCategories } from '../data/products';

// --- 產品頁面 ---
const ProductsPage = ({ lang = 'zh' }) => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFeatured, setShowFeatured] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price-low', 'price-high'
  const [showFilters, setShowFilters] = useState(false);

  // Get original products with variations
  const products = allProducts[lang] || allProducts.zh;
  const categories = getProductCategories(lang);

  // Enhanced filtering logic
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Featured filter
      const featuredMatch = !showFeatured || product.featured;
      
      // Search filter
      const searchMatch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price range filter
      const minPrice = parseFloat(priceRange.min) || 0;
      const maxPrice = parseFloat(priceRange.max) || Infinity;
      const priceMatch = product.variations.some(variation => {
        const price = parseFloat(variation.price.replace(/[^0-9.]/g, ''));
        return price >= minPrice && price <= maxPrice;
      });
      
      return categoryMatch && featuredMatch && searchMatch && priceMatch;
    });

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          const aMinPrice = Math.min(...a.variations.map(v => parseFloat(v.price.replace(/[^0-9.]/g, ''))));
          const bMinPrice = Math.min(...b.variations.map(v => parseFloat(v.price.replace(/[^0-9.]/g, ''))));
          return aMinPrice - bMinPrice;
        case 'price-high':
          const aMaxPrice = Math.max(...a.variations.map(v => parseFloat(v.price.replace(/[^0-9.]/g, ''))));
          const bMaxPrice = Math.max(...b.variations.map(v => parseFloat(v.price.replace(/[^0-9.]/g, ''))));
          return bMaxPrice - aMaxPrice;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, selectedCategory, showFeatured, searchQuery, priceRange, sortBy]);

  const pageTitle = lang === 'zh' ? '全部產品' : 'All Products';
  const featuredText = lang === 'zh' ? '精選產品' : 'Featured Products';
  const backHomeText = lang === 'zh' ? '返回首頁' : 'Back to Home';
  const searchPlaceholder = lang === 'zh' ? '搜尋產品名稱或描述...' : 'Search product name or description...';
  const minPriceLabel = lang === 'zh' ? '最低價格' : 'Min Price';
  const maxPriceLabel = lang === 'zh' ? '最高價格' : 'Max Price';
  const sortByLabel = lang === 'zh' ? '排序方式' : 'Sort By';
  const sortOptions = {
    name: lang === 'zh' ? '按名稱' : 'By Name',
    'price-low': lang === 'zh' ? '價格由低到高' : 'Price: Low to High',
    'price-high': lang === 'zh' ? '價格由高到低' : 'Price: High to Low'
  };
  const filterButtonText = lang === 'zh' ? '篩選選項' : 'Filter Options';
  const clearFiltersText = lang === 'zh' ? '清除篩選' : 'Clear Filters';

  // Clear all filters function
  const clearAllFilters = () => {
    setSelectedCategory('all');
    setShowFeatured(false);
    setSearchQuery('');
    setPriceRange({ min: '', max: '' });
    setSortBy('name');
  };

  return (
    <div className="min-h-screen pt-20" >
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold" style={{ color: colors.primary.sage }}>
              {pageTitle}
            </h1>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.history.back()}
            >
              {backHomeText}
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-300 focus:border-transparent"
              style={{ borderColor: colors.primary.coral }}
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? colors.primary.coral : 'transparent',
                  border: selectedCategory === category.id ? 'none' : `1px solid ${colors.primary.coral}`
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors"
            style={{
              borderColor: colors.primary.coral,
              color: colors.primary.coral
            }}
          >
            {filterButtonText}
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Featured Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={showFeatured}
                  onChange={(e) => setShowFeatured(e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="featured" className="text-sm text-gray-700 cursor-pointer">
                  {featuredText}
                </label>
              </div>

              {/* Price Range */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs text-gray-600 mb-1">{minPriceLabel}</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-coral-300"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-600 mb-1">{maxPriceLabel}</label>
                  <input
                    type="number"
                    placeholder="∞"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-coral-300"
                  />
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">{sortByLabel}</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-coral-300"
                >
                  {Object.entries(sortOptions).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearAllFilters}
                  className="w-full px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  {clearFiltersText}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Count and Active Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-600">
              {lang === 'zh' ? `共找到 ${filteredProducts.length} 個產品` : `Found ${filteredProducts.length} products`}
            </p>
            
            {/* Active Filters Indicator */}
            {(selectedCategory !== 'all' || showFeatured || searchQuery || priceRange.min || priceRange.max) && (
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-gray-500">
                  {lang === 'zh' ? '已套用篩選:' : 'Active filters:'}
                </span>
                {selectedCategory !== 'all' && (
                  <span className="px-2 py-1 text-xs bg-coral-100 text-coral-800 rounded-full">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
                {showFeatured && (
                  <span className="px-2 py-1 text-xs bg-coral-100 text-coral-800 rounded-full">
                    {featuredText}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 py-1 text-xs bg-coral-100 text-coral-800 rounded-full">
                    "{searchQuery}"
                  </span>
                )}
                {(priceRange.min || priceRange.max) && (
                  <span className="px-2 py-1 text-xs bg-coral-100 text-coral-800 rounded-full">
                    {priceRange.min && priceRange.max 
                      ? `${priceRange.min} - ${priceRange.max}`
                      : priceRange.min 
                        ? `≥ ${priceRange.min}`
                        : `≤ ${priceRange.max}`
                    }
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} showVariations={true} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {lang === 'zh' ? '沒有找到相關產品' : 'No products found'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
