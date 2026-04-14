import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';


interface NavbarProps {
  onCartClick: () => void;
}

export function Navbar({ onCartClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="font-display text-2xl font-semibold text-white hover:text-[#D4A853] transition-colors"
            >
              La Maison
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('menu')}
                className="nav-link text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Contato
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2 text-white/80 hover:text-white transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-[#D4A853] text-[#0A0A0A]"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>


              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              <button
                onClick={() => scrollToSection('menu')}
                className="text-2xl font-display text-white hover:text-[#D4A853] transition-colors"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-2xl font-display text-white hover:text-[#D4A853] transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-2xl font-display text-white hover:text-[#D4A853] transition-colors"
              >
                Contato
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
