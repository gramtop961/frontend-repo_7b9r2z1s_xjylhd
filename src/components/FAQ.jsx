import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span className="text-white font-medium">{q}</span>
        <ChevronDown className={`text-white/80 transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="px-5 pb-4 text-gray-300 text-sm"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs = [];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#1a1a1a] to-black py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-wide text-white"
        >
          FAQ
        </motion.h3>

        {faqs.length === 0 ? (
          <p className="mt-6 text-gray-400">Belum ada FAQ tersedia</p>
        ) : (
          <div className="mt-8 space-y-3 text-left">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        )}

        <div className="mt-10">
          <p className="text-gray-300">Masih bingung? Tim BitBlox siap bantu kamu 24/7.</p>
          <a
            href="/chat"
            className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold tracking-wide text-white hover:bg-white/10 active:scale-95 transition"
          >
            Hubungi Support
          </a>
        </div>
      </div>
    </section>
  );
}
