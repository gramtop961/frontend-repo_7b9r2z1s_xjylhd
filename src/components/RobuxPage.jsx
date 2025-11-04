import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Gem, ShoppingCart } from 'lucide-react';

const PACKS = [
  { id: 'r80', amount: 80, price: 15000 },
  { id: 'r400', amount: 400, price: 65000 },
  { id: 'r800', amount: 800, price: 120000 },
  { id: 'r1700', amount: 1700, price: 235000 },
  { id: 'r4500', amount: 4500, price: 600000 },
  { id: 'r10000', amount: 10000, price: 1200000 },
];

function formatIDR(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

export default function RobuxPage() {
  const rows = useMemo(() => PACKS, []);

  return (
    <section className="pt-24 min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-wide text-white"
          >
            Pilih Paket Robux
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-300"
          >
            Proses 5–7 hari kerja setelah pembayaran terverifikasi.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rows.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(255,255,255,0.07)] transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Gem className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-white font-semibold tracking-wide">{p.amount.toLocaleString('id-ID')} Robux</div>
                  <div className="text-gray-400 text-sm">Termasuk pajak & biaya platform</div>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-white text-2xl font-extrabold">{formatIDR(p.price)}</div>
                  <div className="text-gray-500 text-xs">≈ {formatIDR(Math.round(p.price / p.amount))} / Robux</div>
                </div>
                <a
                  href={`/checkout?amount=${encodeURIComponent(p.amount)}&price=${encodeURIComponent(p.price)}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold tracking-wide text-black hover:opacity-90 active:scale-95 transition"
                >
                  <ShoppingCart size={18} />
                  Beli
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-gray-300">
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Pastikan username Roblox kamu benar.</li>
            <li>Gunakan catatan jika pesanan khusus (opsional).</li>
            <li>Order akan diproses setelah pembayaran terverifikasi.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
