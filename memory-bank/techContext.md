# Technical Context: Shmipple Shmeyers Beans

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern CSS with custom properties and flexbox/grid
- **JavaScript**: Vanilla JS for smooth scrolling and basic interactions
- **No Framework**: Static site approach for maximum performance

### Development Tools
- **Code Editor**: Any modern editor with HTML/CSS/JS support
- **Version Control**: Git for source code management
- **Browser Testing**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance Testing**: Lighthouse for performance audits

## Technical Constraints

### Performance Requirements
- **First Contentful Paint**: ≤ 1 second on mobile 4G
- **Image Budget**: ≤ 300KB total across all images
- **Format Requirements**: WebP/AVIF for optimal compression
- **Critical Path**: Minimize render-blocking resources

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Graceful Degradation**: Basic functionality on older browsers

### Accessibility Standards
- **WCAG AA**: Basic compliance level
- **Requirements**: Alt text, focus outlines, semantic markup
- **Testing**: Manual testing with keyboard navigation

## Development Setup

### File Structure
```
project-root/
├── index.html          # Main page
├── css/
│   ├── main.css       # Primary styles
│   └── fonts.css      # Font declarations
├── js/
│   └── main.js        # Smooth scroll and interactions
├── images/
│   ├── hero/          # Hero section images
│   ├── products/      # Product images
│   └── about/         # About section images
└── memory-bank/       # Documentation
```

### Asset Optimization
- **Images**: Compress and convert to WebP/AVIF
- **CSS**: Minify for production
- **JavaScript**: Minimal, no external libraries needed
- **Fonts**: Subset fonts to used characters only

## Dependencies

### External Resources
- **Fonts**: Google Fonts or similar web font service
- **Icons**: Inline SVG or minimal icon font
- **No JavaScript Libraries**: Vanilla JS only for performance

### Development Dependencies
- **Image Optimization**: Tools for WebP/AVIF conversion
- **CSS Preprocessing**: Optional (Sass/PostCSS) for development
- **Build Tools**: Optional simple build process for optimization

## Deployment Considerations

### Static Hosting
- **Platforms**: Netlify, Vercel, GitHub Pages, or any static host
- **Requirements**: Simple HTML/CSS/JS serving capability
- **CDN**: Built-in CDN from hosting platform for performance

### SEO Requirements
- **Meta Tags**: Title, description, Open Graph tags
- **Structured Data**: Basic schema markup for local business
- **Sitemap**: Simple XML sitemap for single page

## Security Considerations
- **No Backend**: Eliminates server-side security concerns
- **Contact**: mailto: links only, no form processing
- **Assets**: All assets served over HTTPS

## Monitoring & Analytics
- **Performance**: Lighthouse CI for ongoing performance monitoring
- **Analytics**: Google Analytics or similar (optional)
- **Error Tracking**: Browser console monitoring

This technical approach prioritizes simplicity, performance, and maintainability while meeting all functional requirements.