import { motion } from 'framer-motion';

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Holo Cube #${(i + 1).toString().padStart(3, '0')}`,
  price: (Math.random() * 2 + 0.1).toFixed(2),
}));

function Card({ title, price, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, rotate: -0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
    >
      <div className="relative h-56 w-full">
        {/* Animated gradient placeholder as artwork */}
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-b-none bg-[radial-gradient(120%_120%_at_0%_0%,#c7d2fe_0%,rgba(255,255,255,0)_60%),radial-gradient(120%_120%_at_100%_0%,#a78bfa_0%,rgba(255,255,255,0)_60%),radial-gradient(120%_120%_at_100%_100%,#f0abfc_0%,rgba(255,255,255,0)_60%),radial-gradient(120%_120%_at_0%_100%,#93c5fd_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.2),rgba(168,85,247,0.2),rgba(14,165,233,0.2),rgba(99,102,241,0.2))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="mt-1 text-xs text-gray-500">Edition of 1</p>
        </div>
        <div className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
          {price} ETH
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 70%)' }} />
    </motion.div>
  );
}

export default function Trending() {
  return (
    <section id="trending" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Trending collections
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-2 max-w-xl text-sm text-gray-600"
            >
              A curated feed of vibrant, holographic‑inspired artworks with neon glow.
            </motion.p>
          </div>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-300"
          >
            View all
          </motion.a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item.id} title={item.title} price={item.price} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
