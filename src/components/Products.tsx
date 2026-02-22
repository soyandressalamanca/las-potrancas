import { motion } from 'motion/react';
import { Utensils, Flame, Martini, Truck } from 'lucide-react';

const products = [
  {
    title: 'Platillos Tradicionales',
    description: 'Tacos, enchiladas, tamales, pozole y mole. Recetas que han pasado de generación en generación.',
    image: '/hours_image.webp',
    icon: Utensils,
    color: 'text-potrancas-olive',
  },
  {
    title: 'Chile Verde Premium',
    description: 'Nuestra especialidad estrella. Un sabor auténtico y picante que define nuestra identidad.',
    image: '/IMG_9828.JPG',
    icon: Flame,
    color: 'text-potrancas-red',
  },
  {
    title: 'Bebidas y Cocteles',
    description: 'Margaritas artesanales, micheladas y bebidas tradicionales para acompañar tu comida.',
    image: '/events_image.webp',
    icon: Martini,
    color: 'text-potrancas-gold',
  },
  {
    title: 'Paquetes de Catering',
    description: 'Llevamos el sabor de Las Potrancas a tus fiestas privadas, empresas y celebraciones familiares.',
    image: '/IMG_9829.JPG',
    icon: Truck,
    color: 'text-potrancas-cream',
  },
];

export default function Products() {
  return (
    <section id="productos" className="section-padding bg-potrancas-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-potrancas-gold font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Nuestra Selección
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-potrancas-cream"
          >
            Productos con <span className="italic text-potrancas-gold">Sabor Real</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-potrancas-gold/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-potrancas-black via-transparent to-transparent opacity-60" />

                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-potrancas-black/80 backdrop-blur-sm flex items-center justify-center border border-white/10 ${product.color}`}>
                  <product.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-potrancas-gold group-hover:text-potrancas-cream transition-colors">
                  {product.title}
                </h3>
                <p className="text-potrancas-cream/60 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-potrancas-olive/20 to-potrancas-red/20 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4">¿Listo para probar el sabor real?</h3>
            <p className="text-potrancas-cream/70">Reserva tu mesa ahora y disfruta de la mejor comida mexicana en un ambiente acogedor. ¡Te esperamos!</p>
          </div>
          <a href="tel:3034322364" className="btn-primary whitespace-nowrap">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
