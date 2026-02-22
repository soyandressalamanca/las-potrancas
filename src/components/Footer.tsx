import { UtensilsCrossed, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-potrancas-black border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* First Row: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <a href="#hero" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Las Potrancas Logo"
                className="h-12 md:h-14 transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-potrancas-cream/60 text-sm leading-relaxed max-w-xs md:max-w-none">
              Auténtica comida mexicana en Colorado. Un legado familiar construido con pasión, sazón tradicional y el mejor chile verde de la región.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-potrancas-gold font-bold uppercase tracking-widest text-xs mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-potrancas-cream/50">
              <li><a href="#hero" className="hover:text-potrancas-gold transition-colors">Inicio</a></li>
              <li><a href="#acerca" className="hover:text-potrancas-gold transition-colors">Nosotros</a></li>
              <li><a href="#productos" className="hover:text-potrancas-gold transition-colors">Productos</a></li>
              <li><a href="#faq" className="hover:text-potrancas-gold transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-potrancas-gold transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="text-center md:text-left">
            <h4 className="text-potrancas-gold font-bold uppercase tracking-widest text-xs mb-6">Nuestros Productos</h4>
            <ul className="space-y-4 text-sm text-potrancas-cream/50">
              <li><a href="#productos" className="hover:text-potrancas-gold transition-colors">Tacos & Enchiladas</a></li>
              <li><a href="#productos" className="hover:text-potrancas-gold transition-colors">Chile Verde Premium</a></li>
              <li><a href="#productos" className="hover:text-potrancas-gold transition-colors">Margaritas Artesanales</a></li>
              <li><a href="#productos" className="hover:text-potrancas-gold transition-colors">Catering Empresarial</a></li>
              <li><a href="#productos" className="hover:text-potrancas-gold transition-colors">Especiales de Almuerzo</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-potrancas-gold font-bold uppercase tracking-widest text-xs mb-6">Síguenos</h4>
            <p className="text-potrancas-cream/50 text-sm mb-6">Mantente al día con nuestras promociones y nuevos platillos.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/1Bzh7faFVT/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-potrancas-gold hover:text-potrancas-black transition-all border border-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/laspotrancasmex?igsh=MTJ6d2p0OG4wYjZvMg==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-potrancas-gold hover:text-potrancas-black transition-all border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/13034322364" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-potrancas-gold hover:text-potrancas-black transition-all border border-white/10">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Second Row: Copyright & Developer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-potrancas-cream/40 text-xs text-center md:text-left">
            © {currentYear} <span className="text-potrancas-gold font-semibold">Las Potrancas Mexican Restaurant</span>. Todos los derechos reservados.
          </div>
          <div className="text-potrancas-cream/40 text-xs flex items-center gap-1">
            Desarrollado por <a href="https://syngular.co" target="_blank" rel="noreferrer" className="text-potrancas-gold hover:underline font-medium">Syngular</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
