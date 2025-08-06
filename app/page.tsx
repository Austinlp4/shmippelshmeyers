import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </div>
  );
}
