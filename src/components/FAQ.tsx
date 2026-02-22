import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Hacen reservas?',
    answer: '¡Sí! Puedes reservar tu mesa llamándonos directamente o enviándonos un mensaje por WhatsApp. Recomendamos reservar para grupos grandes o fines de semana.',
  },
  {
    question: '¿Ofrecen servicio de catering?',
    answer: 'Absolutamente. Ofrecemos catering completo para eventos privados, bodas, fiestas familiares y eventos corporativos en toda el área de Arvada y alrededores.',
  },
  {
    question: '¿Tienen pedidos para llevar?',
    answer: 'Sí, puedes hacer tu pedido por teléfono y pasar a recogerlo. Disfruta del sabor de Las Potrancas en la comodidad de tu hogar.',
  },
  {
    question: '¿Tienen opciones vegetarianas?',
    answer: 'Contamos con varios platillos que pueden adaptarse a dietas vegetarianas, manteniendo siempre el sabor tradicional mexicano.',
  },
  {
    question: '¿Atienden eventos empresariales?',
    answer: 'Sí, tenemos paquetes especiales para almuerzos de oficina y reuniones corporativas. Contáctanos para más detalles.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-potrancas-cream text-potrancas-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-potrancas-red font-bold tracking-widest uppercase text-xs mb-4 block">Preguntas Frecuentes</span>
          <h2 className="text-4xl font-bold">Resolvemos tus <span className="italic text-potrancas-olive">dudas</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-potrancas-black/10"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-potrancas-olive' : 'text-potrancas-black group-hover:text-potrancas-olive'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-potrancas-olive' : 'text-potrancas-black/40'}`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-potrancas-black/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
