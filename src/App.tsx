import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { MenuSection } from '@/components/MenuSection';
import { AboutSection } from '@/components/AboutSection';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Cinematic overlays (from referencias9.md) */}
      <div className="film-grain" />
      <div className="vignette" />

      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Features />
        <MenuSection />
        <AboutSection />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;
