import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Headphones, User } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

function StatCounter({ label, target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [inView, target, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={controls} className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
      <div className="text-3xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
        {new Intl.NumberFormat('id-ID').format(count)}{suffix}
      </div>
      <div className="mt-1 text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}

export default function WhyBitBlox() {
  const features = [
    {
      icon: Zap,
      title: 'Proses Cepat',
      desc: 'Robux dikirim dalam 5–7 hari setelah pembayaran.',
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      desc: 'Transaksi dengan verifikasi dan bukti pembayaran.',
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      desc: 'Hubungi kami kapan pun jika butuh bantuan.',
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Avatar Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-64 w-64 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <div className="h-28 w-28 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <User className="text-white" size={44} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold tracking-wide text-white"
            >
              Kenapa pilih <span className="text-white">BitBlox</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-300"
            >
              Kami fokus pada kecepatan, keamanan, dan dukungan pelanggan. Semua proses dibuat sederhana dan transparan.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              href="/robux"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold tracking-wide text-black hover:opacity-90 active:scale-95 transition"
            >
              Mulai Sekarang
            </motion.a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(255,255,255,0.07)] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon className="text-white" size={22} />
                </div>
                <div className="text-white font-semibold tracking-wide">{title}</div>
              </div>
              <p className="mt-3 text-gray-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <StatCounter label="Total Robux Terjual" target={1250000} />
          <StatCounter label="Total Order" target={8420} />
          <StatCounter label="Rating Kepuasan (%)" target={99} suffix="%" />
        </div>
      </div>
    </section>
  );
}
