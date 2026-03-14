# 🔐 The Paranoid Pixel Wrangler | Cybersecurity Portfolio

A hilarious and high-tech Angular 21 portfolio website for a funny cybersecurity engineer. Built with modern Angular features including signals, standalone components, and OnPush change detection.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+
- Angular CLI 21

### Installation

```bash
# Navigate to project directory
cd cybersecurity-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200/`

## 📦 Build for Production

```bash
npm run build
```

## 🧪 Testing

```bash
npm test
```

## 📚 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header.component.ts      - Navigation header with mobile menu
│   │   ├── hero.component.ts        - Landing hero section
│   │   ├── about.component.ts       - About section with humorous bio
│   │   ├── gallery.component.ts     - Photo portfolio gallery with filtering
│   │   ├── projects.component.ts    - Audacious projects showcase
│   │   └── footer.component.ts      - Footer with social links
│   ├── services/
│   │   └── portfolio.service.ts     - Signals-based state management
│   ├── app.ts                       - Root component
│   ├── app.config.ts                - App configuration
│   ├── app.routes.ts                - Routing configuration
│   └── app.css                      - Component styles
├── styles.css                       - Global styles
└── index.html                       - HTML template
```

## ✨ Features

### Modern Angular 21 Implementation
- **Standalone Components** - All components use standalone API
- **Signals** - Reactive state management with `signal()` and `computed()`
- **OnPush Change Detection** - Performance optimization with `ChangeDetectionStrategy.OnPush`
- **Typed Input/Output** - Using `input()` and `output()` functions
- **Control Flow** - Native `@if`, `@for`, `@switch` syntax
- **NgOptimizedImage** - Optimized image loading for performance

### Components
1. **Header** - Sticky navigation with mobile-responsive hamburger menu
2. **Hero** - Eye-catching landing section with floating cards and CTA buttons
3. **About** - Humorous bio with skill matrix and personality
4. **Gallery** - Filterable photo portfolio with featured items
5. **Projects** - Showcase of audacious cybersecurity projects with impact metrics
6. **Footer** - Links, social media, and fun facts

### Design System
- **Color Palette**: Dark theme with neon accents (blue, purple, pink)
- **Typography**: Inter font family for modern look
- **Animations**: Smooth transitions and floating effects
- **Responsive**: Mobile-first design with breakpoints for all devices
- **Accessibility**: WCAG AA compliant with focus management and ARIA attributes

## 🎨 Customization

### Colors
All colors are defined in component styles. Main colors used:
- Primary Blue: `#3a86ff`
- Accent Purple: `#8338ec`
- Accent Pink: `#ff006e`
- Dark Background: `#0f0f1e`
- Light Text: `#d0d0d0`

### Fonts
Import custom fonts in `src/index.html` or modify the font-family in `src/styles.css`

### Content
Update portfolio items and projects in `src/app/services/portfolio.service.ts`

## 🔧 Technologies

- **Angular 21** - Modern web framework
- **TypeScript** - Type-safe development
- **RxJS** - Reactive programming (pre-configured, optional use)
- **SCSS** (Optional) - Can be enabled in angular.json
- **Angular Testing Library** - Unit testing

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+
- Mobile browsers

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/cybersecurity-portfolio folder
```

### Traditional Server
```bash
npm run build
# Copy dist/cybersecurity-portfolio to your server
# Configure your server to serve index.html for all routes
```

## 🎯 Development Tips

### Adding New Components
```bash
ng generate component components/my-component
```

### Adding New Services
```bash
ng generate service services/my-service
```

### Enable SCSS
1. Update `angular.json` - change `"styles": ["src/styles.css"]` to use `.scss`
2. Rename `src/styles.css` to `src/styles.scss`

## 📊 Performance Optimizations

- OnPush change detection in all components
- Signals for reactive state management
- Lazy-loaded routes (when configured)
- Image optimization with NgOptimizedImage
- Tree-shaking enabled in build

## 🎭 Humor & Theme

This portfolio maintains a consistent theme of a paranoid cybersecurity engineer with:
- Funny project descriptions and bios
- Humorous skill assessments
- Coffee-obsessed references
- Self-aware imposter syndrome jokes
- Security-themed humor throughout

## 📝 License

MIT - Feel free to use this as a template!

## 👨‍💻 Author

The Paranoid Pixel Wrangler
- 🔐 Security first, questions later
- ☕ Fueled by infinite coffee
- 🎭 Funny about serious things

---

**WARNING**: This portfolio may cause involuntary laughter and nods of recognition if you work in cybersecurity. 

Happy securing! 🛡️
