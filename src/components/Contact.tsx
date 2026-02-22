import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-potrancas-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-potrancas-gold font-bold tracking-widest uppercase text-xs mb-4 block">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-potrancas-cream">
              Visítanos o <span className="italic text-potrancas-gold">escríbenos</span>
            </h2>
            <p className="text-potrancas-cream/60 mb-12 max-w-md">
              Estamos listos para servirte la mejor comida mexicana de Colorado. Ya sea para una cena familiar o un evento especial, estamos aquí para ti.
            </p>

            <div className="space-y-8 w-full">
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-potrancas-olive/20 flex items-center justify-center shrink-0 border border-potrancas-olive/30">
                  <MapPin className="text-potrancas-gold w-5 h-5" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6 w-full">
                  <div>
                    <h4 className="font-bold text-potrancas-gold mb-1">Arvada (64th)</h4>
                    <p className="text-potrancas-cream/70 text-sm">11651 W 64th Ave, Arvada, CO 80004</p>
                    <a href="tel:3034322364" className="text-xs text-potrancas-gold/60 hover:text-potrancas-gold transition-colors">303-432-2364</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-potrancas-gold mb-1">Arvada (Wadsworth)</h4>
                    <p className="text-potrancas-cream/70 text-sm">6610 Wadsworth Blvd, Arvada, CO 80003</p>
                    <a href="tel:3034200593" className="text-xs text-potrancas-gold/60 hover:text-potrancas-gold transition-colors">303-420-0593</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-potrancas-gold mb-1">Littleton</h4>
                    <p className="text-potrancas-cream/70 text-sm">9729 W Coal Mine Ave, Littleton, CO 80123</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-potrancas-gold mb-1">Parker</h4>
                    <p className="text-potrancas-cream/70 text-sm">19600 Solar Cir, Parker, CO 80134</p>
                  </div>
                </div>
              </div>

              <a href="mailto:laspotrancas661@gmail.com" className="flex flex-col items-center lg:flex-row lg:items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-potrancas-gold/20 flex items-center justify-center shrink-0 border border-potrancas-gold/30 group-hover:scale-110 transition-transform">
                  <Mail className="text-potrancas-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-potrancas-gold mb-1">Email Central</h4>
                  <p className="text-potrancas-cream/70 group-hover:text-potrancas-gold transition-colors">laspotrancas661@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-potrancas-gold">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-potrancas-gold transition-colors text-potrancas-cream"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-potrancas-gold">Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="303-000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-potrancas-gold transition-colors text-potrancas-cream"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-potrancas-gold">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-potrancas-gold transition-colors text-potrancas-cream"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-potrancas-gold">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-potrancas-gold transition-colors text-potrancas-cream resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Enviar Mensaje
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
