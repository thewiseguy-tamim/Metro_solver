# Metro Solver - Digital Marketing Agency Website

A modern, responsive web application for Metro Solver digital marketing agency built with React, Tailwind CSS, and Vite.

## Features

- **Responsive Design**: Separate mobile and desktop components for optimal user experience
- **Modern UI**: Dark theme with purple gradients and smooth animations
- **Component-Based Architecture**: Modular and reusable components
- **Multiple Pages**: Home, About Us, Services, White Label, Contact Us
- **Interactive Elements**: Carousels, accordions, dropdowns, and animated sections
- **Lottie Animations**: Integrated JSON-based animations
- **SEO Optimized**: Clean structure and semantic HTML

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Component Architecture](#component-architecture)
- [Styling Guidelines](#styling-guidelines)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

Check your versions:
```bash
node --version
npm --version
```

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd assesment
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
npm install react-router-dom lottie-react lucide-react framer-motion clsx react-hook-form
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
assesment/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx           # Desktop navigation
│   │   │   │   ├── NavbarMobile.jsx     # Mobile navigation
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx           # Desktop footer
│   │   │   │   ├── FooterMobile.jsx     # Mobile footer
│   │   │   │   └── index.js
│   │   │   ├── Card/
│   │   │   │   ├── ServiceCard.jsx      # Service display card
│   │   │   │   ├── PortfolioCard.jsx    # Portfolio item card
│   │   │   │   ├── TestimonialCard.jsx  # Review card
│   │   │   │   ├── BlogCard.jsx         # Blog/case study card
│   │   │   │   └── index.js
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx           # Reusable button component
│   │   │   │   └── index.js
│   │   │   └── Dropdown/
│   │   │       ├── Dropdown.jsx         # Dropdown menu
│   │   │       └── index.js
│   │   └── sections/
│   │       ├── Hero/
│   │       │   ├── Hero.jsx
│   │       │   ├── HeroMobile.jsx
│   │       │   └── index.js
│   │       ├── Services/
│   │       │   ├── Services.jsx
│   │       │   ├── ServicesMobile.jsx
│   │       │   └── index.js
│   │       ├── Portfolio/
│   │       ├── WhyChooseUs/
│   │       ├── HowItWorks/
│   │       ├── Stats/
│   │       ├── Testimonials/
│   │       ├── Blog/
│   │       ├── Podcast/
│   │       ├── FAQ/
│   │       └── Contact/
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── index.js
│   │   ├── AboutUs/
│   │   ├── Services/
│   │   ├── WhiteLabel/
│   │   └── ContactUs/
│   ├── Materiel/
│   │   ├── v.mp4                    # Hero video
│   │   ├── Bot.json                 # Chatbot animation
│   │   ├── Logo.json                # Logo animation
│   │   ├── Text.json                # Text animation
│   │   ├── Comp1-4.gif              # Portfolio samples
│   │   ├── Frame3.gif
│   │   ├── Frame1229.gif
│   │   ├── Frame.gif
│   │   └── Frame_1.gif
│   ├── utils/
│   │   └── constants.js             # App constants and configs
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm run lint
```
Run ESLint to check code quality

## 🧰 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI framework |
| React DOM | 19.2.0 | React rendering |
| Vite | 7.1.9 | Build tool and dev server |
| Tailwind CSS | 4.1.14 | Utility-first CSS framework |
| React Router DOM | Latest | Client-side routing |
| Lottie React | Latest | JSON-based animations |
| Lucide React | Latest | Icon library |
| Framer Motion | Latest | Animation library |
| Clsx | Latest | Conditional classNames |
| React Hook Form | Latest | Form handling |

## 🏗️ Component Architecture

### Responsive Strategy

The project uses **separate component files** for mobile and desktop views:

- **Desktop components**: Optimized for screens ≥1024px
- **Mobile components**: Optimized for screens <1024px
- **Conditional rendering**: Based on screen width detection

```jsx
// Example pattern
const isMobile = window.innerWidth < 1024;
return isMobile ? <HeroMobile /> : <Hero />;
```

### Component Hierarchy

```
App
├── Navbar / NavbarMobile
├── Pages
│   └── Home
│       ├── Hero / HeroMobile
│       ├── Services / ServicesMobile
│       ├── Portfolio / PortfolioMobile
│       ├── WhyChooseUs / WhyChooseUsMobile
│       ├── HowItWorks / HowItWorksMobile
│       ├── Stats / StatsMobile
│       ├── Testimonials / TestimonialsMobile
│       ├── Blog / BlogMobile
│       ├── Podcast / PodcastMobile
│       ├── FAQ / FAQMobile
│       └── Contact / ContactMobile
└── Footer / FooterMobile
```

## 🎨 Styling Guidelines

### Color Palette

```javascript
// Primary Colors
const colors = {
  primary: {
    dark: '#0a0a1f',
    darker: '#1a1a2e',
  },
  purple: {
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
  },
  gray: {
    400: '#9ca3af',
    500: '#6b7280',
  }
};
```

### Tailwind Usage

**DO:**
- Use utility classes directly
- Follow mobile-first approach with responsive prefixes
- Use consistent spacing scale (4, 8, 12, 16, 24, 32, etc.)
- Leverage Tailwind's color system

**DON'T:**
- Create custom CSS files (Tailwind only)
- Use inline styles
- Mix measurement units (stick to rem/px via Tailwind)

### Example Component Styling

```jsx
<div className="container mx-auto px-4 lg:px-8">
  <h1 className="text-4xl lg:text-6xl font-bold text-white">
    Expert to Digitalise Your 
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
      Growth
    </span>
  </h1>
</div>
```

## 💻 Development Workflow

### Creating a New Component

1. **Create component folder**
```bash
mkdir -p src/components/sections/NewSection
```

2. **Create component files**
```bash
touch src/components/sections/NewSection/NewSection.jsx
touch src/components/sections/NewSection/NewSectionMobile.jsx
touch src/components/sections/NewSection/index.js
```

3. **Component template**
```jsx
// NewSection.jsx
import React from 'react';

const NewSection = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

4. **Export from index**
```jsx
// index.js
export { default as NewSection } from './NewSection';
export { default as NewSectionMobile } from './NewSectionMobile';
```

### Adding a New Page

1. **Create page folder**
```bash
mkdir -p src/pages/NewPage
```

2. **Create page component**
```jsx
// src/pages/NewPage/NewPage.jsx
import React from 'react';
import { Hero } from '../../components/sections/Hero';

const NewPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Other sections */}
    </div>
  );
};

export default NewPage;
```

3. **Add route in App.jsx**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

### Deploy to Netlify

1. Build the project
```bash
npm run build
```

2. Drag and drop the `dist/` folder to Netlify

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@metrosolver.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📱 Responsive Breakpoints

```javascript
// Tailwind default breakpoints
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices (Desktop/Mobile split)
xl: 1280px  // Extra large devices
2xl: 1536px // 2X Extra large devices
```

## 🎭 Animation Guidelines

### Framer Motion Example

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Lottie Integration

```jsx
import Lottie from 'lottie-react';
import botAnimation from '../../Materiel/Bot.json';

<Lottie
  animationData={botAnimation}
  loop={true}
  className="w-24 h-24"
/>
```

## 🐛 Troubleshooting

### Common Issues

**Issue: Tailwind styles not applying**
```bash
# Clear cache and rebuild
rm -rf node_modules/.vite
npm run dev
```

**Issue: Module not found**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

**Issue: Build fails**
```bash
# Check for TypeScript errors
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use functional components with hooks
- Follow ESLint rules
- Use meaningful variable names
- Comment complex logic
- Keep components small and focused

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 📞 Contact

**Metro Solver**
- Website: [www.metrosolver.com](https://www.metrosolver.com)
- Email: info@metrosolver.com
- Phone: +8324782 56326

## 🙏 Acknowledgments

- Design inspiration from modern SaaS websites
- Icons by Lucide
- Animations by Lottie

---

**Made with ❤️ by Metro Solver Team**

Last Updated: October 2025