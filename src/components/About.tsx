import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="acerca" className="section-padding bg-potrancas-cream text-potrancas-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img
              src="/IMG_9830.JPG"
              alt="Cocinando con amor"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-potrancas-gold rounded-2xl -z-0 hidden md:block" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-potrancas-red rounded-2xl -z-0 hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <span className="text-potrancas-red font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Historia</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Un legado familiar cocinado con <span className="italic text-potrancas-olive">corazón y pasión</span>.
          </h2>

          <div className="space-y-6 text-potrancas-black/80 leading-relaxed">
            <p>
              Las Potrancas nació de una conversación entre mi esposa y yo cuando nuestra hija tenía apenas 3 meses de nacida. Me pregunté qué futuro podría construir para mis hijos y entendí que siendo empleado no bastaba.
            </p>
            <p>
              Como cocinero decidí dar el siguiente paso y abrir mi propio restaurante. Hoy, Las Potrancas es el resultado de esa valiente decisión: un negocio con corazón, pasión por la cocina y la visión de dejar un legado familiar.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-potrancas-olive font-bold text-lg mb-2 italic">Especiales Diarios</h4>
              <p className="text-sm text-potrancas-black/70">Lunes a Viernes hasta las 3 PM. La mejor opción para tu almuerzo.</p>
            </div>
            <div>
              <h4 className="text-potrancas-olive font-bold text-lg mb-2 italic">El mejor Green Chile</h4>
              <p className="text-sm text-potrancas-black/70">Nuestro chile verde es reconocido como uno de los mejores de todo Colorado.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/50 rounded-xl border border-potrancas-black/5 italic text-sm text-potrancas-black/80">
            "A mi familia le encanta este lugar. Las margaritas son frescas y deliciosas, ¡y toda la comida es fantástica!"
            <span className="block mt-2 font-bold not-italic text-potrancas-olive">— Maggie, Cliente Satisfecha</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
