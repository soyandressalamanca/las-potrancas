import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { id: 1, src: '/gallery/a1.webp', alt: 'Especialidades Las Potrancas' },
  { id: 2, src: '/gallery/a2.webp', alt: 'Ambiente tradicional' },
  { id: 3, src: '/gallery/a3.webp', alt: 'Platillos auténticos' },
  { id: 4, src: '/gallery/a4.webp', alt: 'Sabor mexicano' },
  { id: 5, src: '/gallery/a5.webp', alt: 'Nuestra cocina' },
  { id: 6, src: '/gallery/a6.webp', alt: 'Momentos en Las Potrancas' },
  { id: 7, src: '/gallery/a7.webp', alt: 'Bebidas refrescantes' },
  { id: 8, src: '/gallery/a8.webp', alt: 'Experiencia gastronómica' },
  { id: 9, src: '/gallery/a9.webp', alt: 'Tradición en cada bocado' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + itemsPerSlide) % images.length);
  }, [itemsPerSlide]);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - itemsPerSlide + images.length) % images.length);
  }, [itemsPerSlide]);

  useEffect(() => {
    const timer = setInterval(slideNext, 5000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="galeria" className="section-padding bg-potrancas-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-potrancas-gold font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Nuestra Galería
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-potrancas-cream"
          >
            Momentos y <span className="italic text-potrancas-gold">Sabores</span>
          </motion.h2>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[3/1] w-full group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className={`absolute inset-0 grid gap-4 md:gap-8 ${itemsPerSlide === 1 ? 'grid-cols-1' : 'grid-cols-3'
                }`}
            >
              {[...Array(itemsPerSlide)].map((_, offset) => {
                const index = (currentIndex + offset) % images.length;
                return (
                  <div key={images[index].id} className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={images[index].src}
                      alt={images[index].alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={slidePrev}
            className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-potrancas-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-potrancas-gold hover:bg-potrancas-gold hover:text-potrancas-black transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={slideNext}
            className="absolute -right-4 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-potrancas-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-potrancas-gold hover:bg-potrancas-gold hover:text-potrancas-black transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {Array.from({ length: Math.ceil(images.length / itemsPerSlide) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const targetIndex = index * itemsPerSlide;
                  setDirection(targetIndex > currentIndex ? 1 : -1);
                  setCurrentIndex(targetIndex % images.length);
                }}
                className={`w-2 h-2 rounded-full transition-all ${Math.floor(currentIndex / itemsPerSlide) === index ? 'w-8 bg-potrancas-gold' : 'bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
