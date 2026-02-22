import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MessageCircle, UtensilsCrossed } from 'lucide-react';

const heroImages = ['/s1.webp', '/s2.webp', '/s3.webp'];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden pt-16 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-potrancas-olive/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-potrancas-red/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-potrancas-black/40 via-potrancas-black/80 to-potrancas-black" />
      </div>

      {/* Main Content - Centered in the remaining space */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-potrancas-olive/20 text-potrancas-gold text-xs font-bold tracking-widest uppercase mb-6 border border-potrancas-olive/30">
              Sabor Auténtico en Colorado
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Las Potrancas <br />
              <span className="text-gradient italic">Mexican Restaurant</span>
            </h1>
            <p className="text-lg md:text-xl text-potrancas-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              La mejor comida mexicana en Colorado. Disfruta de nuestro legendario Green Chile y recetas tradicionales que te harán sentir como en casa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.foodbooking.com/ordering/?restaurant_uid=9cb8caa1-bc2a-470d-a48d-1a7282f9da80"
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Pedir Online
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#productos"
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Ver Menú
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: Scroll Indicator */}
      <div className="relative z-10 w-full pb-6 md:pb-10 flex flex-col items-center gap-8">
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-potrancas-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
