import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#acerca' },
  { name: 'Menú', href: 'https://www.laspotrancasmexicanrestaurant.com/menu.html' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Las Potrancas Logo"
              className="h-12 md:h-14 transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Desktop Nav Links - Centered */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-potrancas-gold transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <a
              href="https://www.foodbooking.com/ordering/?restaurant_uid=9cb8caa1-bc2a-470d-a48d-1a7282f9da80"
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2 px-5 text-sm whitespace-nowrap flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Pedir Online
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-potrancas-gold" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-full left-0 w-full bg-potrancas-black border-b border-potrancas-cream/10 md:hidden z-50"
          >
            <div className="flex flex-col p-6 gap-4 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-potrancas-gold transition-colors w-full"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.foodbooking.com/ordering/?restaurant_uid=9cb8caa1-bc2a-470d-a48d-1a7282f9da80"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2 w-full"
              >
                <UtensilsCrossed className="w-4 h-4" />
                Pedir Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
