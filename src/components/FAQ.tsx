import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.q1.q'),
      answer: t('faq.q1.a'),
    },
    {
      question: t('faq.q2.q'),
      answer: t('faq.q2.a'),
    },
    {
      question: t('faq.q3.q'),
      answer: t('faq.q3.a'),
    },
    {
      question: t('faq.q4.q'),
      answer: t('faq.q4.a'),
    },
    {
      question: t('faq.q5.q'),
      answer: t('faq.q5.a'),
    },
  ];

  return (
    <section id="faq" className="section-padding bg-potrancas-cream text-potrancas-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-potrancas-red font-bold tracking-widest uppercase text-sm mb-4 block">{t('faq.badge')}</span>
          <h2 className="text-4xl font-bold">{t('faq.title')} <span className="italic text-potrancas-olive">{t('faq.title_italic')}</span></h2>
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
