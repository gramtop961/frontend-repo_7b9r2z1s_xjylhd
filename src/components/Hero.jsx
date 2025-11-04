import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 min-h-[88vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a]">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Robux Store for Everyone — BitBlox
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-gray-300 text-lg"
        >
          Cepat. Aman. Tanpa Ribet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/robux"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-semibold tracking-wide hover:opacity-90 active:scale-95 transition"
          >
            Beli Robux
          </a>
          <a
            href="/orders"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold tracking-wide hover:bg-white/10 active:scale-95 transition"
          >
            Cek Order
          </a>
        </motion.div>

        {/* Glass card overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-gray-300 max-w-xl"
        >
          <p className="text-sm">
            Nikmati pengalaman belanja Robux yang simple, aman, dan transparan. Tanpa ribet, tanpa drama.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
