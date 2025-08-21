# Kang Shang Healthy - 康尚健康

A modern, bilingual e-commerce website for Kang Shang Healthy, specializing in premium health products including American ginseng, seafood, and traditional Chinese medicine.

🌐 **Live Website**: [https://kang-shang-healthy.web.app](https://kang-shang-healthy.web.app)

## 🏗️ Project Overview

Kang Shang Healthy is a React-based e-commerce platform featuring:
- **Bilingual support** (Chinese/English)
- **Comprehensive product catalog** with 100+ items
- **Advanced filtering and search** capabilities
- **Responsive design** for all devices
- **Firebase hosting** with global CDN

## 🚀 Features

### 🌐 Bilingual Support
- Complete Chinese and English translations
- Language persistence using localStorage
- Seamless language switching

### 🛍️ Product Management
- **108+ products** across 10 categories
- **Advanced filtering** by category, price, and search
- **Product variations** with different sizes and prices
- **Featured products** highlighting

### 🎨 Modern UI/UX
- **Responsive design** for mobile, tablet, and desktop
- **Smooth animations** and hover effects
- **Professional color scheme** with coral and sage accents
- **Accessible design** with proper ARIA labels

### 🔍 Advanced Search & Filtering
- **Real-time search** through product names and descriptions
- **Category filtering** with visual indicators
- **Price range filtering** with min/max inputs
- **Sorting options** (name, price low-high, price high-low)
- **Featured products** toggle

### 📱 Mobile-First Design
- **Touch-friendly** interface
- **Optimized navigation** for mobile devices
- **Fast loading** with optimized images

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Hosting**: Firebase Hosting
- **Language**: JavaScript (ES6+)
- **Build Tool**: Create React App

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kang_shang
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

### Deployment

```bash
# Deploy to Firebase
firebase deploy
```

## 📁 Project Structure

```
kang_shang/
├── public/                 # Static assets
│   ├── images/            # Product images
│   │   └── products/      # Product photos
│   └── index.html         # Main HTML file
├── src/
│   ├── components/        # React components
│   │   ├── common/        # Shared components
│   │   │   ├── Button.js
│   │   │   ├── ProductCard.js
│   │   │   └── SectionTitle.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Products.js
│   │   └── WhyUs.js
│   ├── data/
│   │   └── products.js    # Product data
│   ├── pages/
│   │   └── ProductsPage.js # Products listing page
│   ├── utils/
│   │   └── colors.js      # Color scheme
│   ├── App.js             # Main app component
│   └── index.js           # App entry point
├── firebase.json          # Firebase configuration
├── .firebaserc           # Firebase project settings
└── package.json          # Dependencies and scripts
```

## 🏪 Product Categories

The website features products across 10 main categories:

1. **滋補食品** (Tonic Foods) - Health supplements and tonics
2. **海味類** (Seafood) - Premium dried seafood
3. **粉類** (Powders) - Ground herbs and supplements
4. **茶包類** (Tea Bags) - Herbal tea blends
5. **乾果類** (Dried Fruits) - Premium dried fruits and nuts
6. **豆類** (Beans) - Various beans and legumes
7. **高級海味** (Premium Seafood) - High-end seafood products
8. **雜貨類** (Groceries) - General grocery items
9. **中藥材** (Herbal Medicine) - Traditional Chinese herbs
10. **湯包類** (Soup Packs) - Ready-to-use soup ingredients

## 🌐 Language Support

### Chinese (繁體中文)
- Complete Traditional Chinese translations
- Proper character encoding
- Cultural-appropriate content

### English
- Professional English translations
- SEO-optimized content
- International user-friendly

## 🎨 Design System

### Color Palette
- **Primary Coral**: `#D7878A` - Main brand color
- **Primary Sage**: `#B6C4A0` - Secondary brand color
- **Background Cream**: `#FDFCF8` - Page background
- **Text Primary**: `#374151` - Main text color
- **Text Secondary**: `#6B7280` - Secondary text

### Typography
- **Headings**: Bold, professional fonts
- **Body Text**: Clean, readable fonts
- **Responsive**: Scales appropriately across devices

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)

## 🔧 Configuration

### Environment Variables
Create a `.env` file for local development:
```env
REACT_APP_FIREBASE_PROJECT_ID=kang-shang-healthy
```

### Firebase Configuration
The project is configured for Firebase Hosting with:
- **Project ID**: `kang-shang-healthy`
- **Hosting URL**: `https://kang-shang-healthy.web.app`
- **Custom domain support** available

## 🚀 Deployment

### Firebase Hosting
- **Automatic SSL** certificate
- **Global CDN** for fast loading
- **Custom domain** support
- **Automatic scaling**

### Deployment Commands
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting

# View deployment status
firebase hosting:channel:list
```

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 2 seconds
- **Largest Contentful Paint**: < 3 seconds
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO Features

- **Meta tags** for social sharing
- **Structured data** for search engines
- **Sitemap** generation
- **Robots.txt** configuration
- **Open Graph** tags for social media

## 🛡️ Security

- **HTTPS** enforced
- **Content Security Policy** headers
- **XSS protection** enabled
- **Secure headers** configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

- **Website**: [https://kang-shang-healthy.web.app](https://kang-shang-healthy.web.app)
- **Email**: kang.shang.healthy@gmail.com
- **Address**: G/F, 38 Ma Po Road, North Point, Hong Kong

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Firebase** for reliable hosting
- **Tailwind CSS** for the utility-first CSS framework
- **All contributors** who helped build this platform

---

**Built with ❤️ for Kang Shang Healthy**
