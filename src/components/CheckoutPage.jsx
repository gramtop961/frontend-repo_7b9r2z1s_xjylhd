import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard } from 'lucide-react';

const PRICE_MAP = {
  80: 15000,
  400: 65000,
  800: 120000,
  1700: 235000,
  4500: 600000,
  10000: 1200000,
};

function formatIDR(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

export default function CheckoutPage() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const preAmount = Number(params.get('amount')) || 400;
  const prePrice = Number(params.get('price')) || PRICE_MAP[preAmount] || 65000;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(preAmount);
  const [method, setMethod] = useState('QRIS');
  const [notes, setNotes] = useState('');
  const [agree, setAgree] = useState(false);
  const price = PRICE_MAP[amount] || prePrice;
  const fee = Math.round(price * 0.02);
  const total = price + fee;

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return alert('Masukkan username Roblox');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert('Email tidak valid');
    if (!agree) return alert('Kamu harus menyetujui ketentuan');

    const order = { username, email, amount, method, notes, total };
    console.log('Order Created:', order);
    alert('Order dibuat! Kamu akan diarahkan ke halaman Cek Order.');
    window.location.href = '/orders';
  }

  return (
    <section className="pt-24 min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
        >
          <h2 className="text-white text-xl font-semibold">Detail Pemesanan</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Username Roblox</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="mis. @player_roblox"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kamu@email.com"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Paket Robux</label>
              <select
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                {Object.keys(PRICE_MAP).map((k) => (
                  <option key={k} value={k}>{Number(k).toLocaleString('id-ID')} Robux</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Metode Pembayaran</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <option>QRIS</option>
                <option>Transfer Bank</option>
                <option>E-Wallet</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-1">Catatan (opsional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Link bukti pembayaran atau instruksi khusus"
                className="w-full min-h-[110px] rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <input id="agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1.5 h-4 w-4 rounded border-white/20 bg-black/60" />
            <label htmlFor="agree" className="text-gray-300 text-sm">
              Saya menyetujui kebijakan BitBlox dan memahami estimasi proses 5–7 hari kerja.
            </label>
          </div>

          <div className="mt-6 flex items-center gap-3 text-green-400 text-sm">
            <ShieldCheck size={18} />
            Pembayaran aman & terenkripsi.
          </div>

          <div className="mt-8">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold tracking-wide text-black hover:opacity-90 active:scale-95 transition">
              <CreditCard size={18} />
              Buat Order
            </button>
          </div>
        </motion.form>

        {/* Summary */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 h-fit"
        >
          <h3 className="text-white font-semibold">Ringkasan Pembayaran</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <div className="flex items-center justify-between">
              <span>Paket</span>
              <span>{amount.toLocaleString('id-ID')} Robux</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Harga</span>
              <span>{formatIDR(price)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Biaya Layanan (2%)</span>
              <span>{formatIDR(fee)}</span>
            </div>
            <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-white font-semibold">
              <span>Total</span>
              <span>{formatIDR(total)}</span>
            </div>
          </div>
          <div className="mt-6 text-[12px] text-gray-400">
            Dengan menekan "Buat Order", kamu akan mendapatkan nomor order dan instruksi pembayaran.
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
