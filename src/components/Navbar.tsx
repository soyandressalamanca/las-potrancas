import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#acerca' },
    { name: t('nav.menu'), href: 'https://www.laspotrancasmexicanrestaurant.com/menu.html' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contacto' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = i18n.language.split('-')[0];

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

        {/* Action Button & Language Toggle & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Language Switcher Desktop */}
          <div className="hidden md:flex items-center gap-2 mr-4 text-xs font-bold border-r border-white/10 pr-4">
            <button
              onClick={() => changeLanguage('es')}
              className={`hover:text-potrancas-gold transition-colors ${currentLang === 'es' ? 'text-potrancas-gold' : 'text-white/60'}`}
            >
              ES
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`hover:text-potrancas-gold transition-colors ${currentLang === 'en' ? 'text-potrancas-gold' : 'text-white/60'}`}
            >
              EN
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="https://www.foodbooking.com/ordering/?restaurant_uid=9cb8caa1-bc2a-470d-a48d-1a7282f9da80"
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2 px-5 text-sm whitespace-nowrap flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              {t('nav.order')}
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
              {/* Language Switcher Mobile */}
              <div className="flex items-center gap-6 mb-4 p-3 bg-white/5 rounded-xl w-full justify-center">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`flex items-center gap-2 font-bold ${currentLang === 'es' ? 'text-potrancas-gold' : 'text-white/40'}`}
                >
                  <Globe className="w-4 h-4" />
                  Español
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex items-center gap-2 font-bold ${currentLang === 'en' ? 'text-potrancas-gold' : 'text-white/40'}`}
                >
                  <Globe className="w-4 h-4" />
                  English
                </button>
              </div>

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
                className="btn-primary text-center flex items-center justify-center gap-2 w-full mt-2"
              >
                <UtensilsCrossed className="w-4 h-4" />
                {t('nav.order')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
