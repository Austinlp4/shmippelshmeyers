# System Patterns: Shmipple Shmeyers Beans

## Architecture Overview
Single-page application with static HTML, CSS, and minimal JavaScript for interactions.

```
index.html (single page)
├── Hero Section (#why)
├── About Section (#about)  
├── Products Section (#products)
└── Contact Section (#contact)
```

## Key Technical Decisions

### Single Page Architecture
- **Pattern**: All content on single `index.html` with anchor-based navigation
- **Rationale**: Simplicity, fast loading, no server-side complexity
- **Implementation**: Smooth-scroll navigation between sections

### Static Asset Strategy
- **Images**: WebP/AVIF format, ≤300KB total budget
- **Fonts**: Web fonts for typography hierarchy
- **Icons**: Inline SVG or icon font for social media

### Navigation Pattern
- **Fixed navbar** with smooth-scroll anchor links
- **Sections**: `#why`, `#about`, `#products`, `#contact`
- **Mobile**: Hamburger menu for smaller screens

## Design Patterns

### Visual Hierarchy
- **Headers**: Playful serif typeface
- **Body**: Clean sans-serif for readability
- **Color**: Kraft paper browns with orange-brown accent (#C86A32)

### Component Patterns
- **Product Cards**: Uniform grid layout with image, name, details
- **Hero Section**: Full viewport with value proposition
- **Content Sections**: Consistent padding and typography

### Animation Patterns
- **Scroll Animations**: Fade-in on scroll for content reveal
- **Micro-interactions**: Subtle parallax effect for hero elements
- **Performance**: CSS-based animations, no heavy JavaScript libraries

## Content Organization

### Section Structure
Each section follows consistent pattern:
- Section wrapper with anchor ID
- Header with section title
- Content area with appropriate layout
- Consistent spacing and typography

### Responsive Strategy
- **Mobile-first**: Design starts with mobile constraints
- **Breakpoints**: Standard responsive breakpoints
- **Images**: Responsive images with appropriate sizing

## Performance Patterns
- **Critical CSS**: Inline critical styles for above-fold content
- **Lazy Loading**: Images below fold load as needed
- **Compression**: Optimized assets and minimal JavaScript
- **Caching**: Static assets with appropriate cache headers

## Accessibility Patterns
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive alternative text for images
- **Color Contrast**: WCAG AA compliant color combinations

This architecture prioritizes simplicity, performance, and maintainability while delivering an engaging user experience.