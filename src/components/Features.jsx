import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Wallet, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
    title: 'Secure by Design',
    desc: 'Your assets are protected with best-in-class security and transparent provenance.'
  },
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: 'Lightning Fast',
    desc: 'Optimized experience for minting, discovering and trading NFTs at speed.'
  },
  {
    icon: <Wallet className="h-6 w-6 text-indigo-600" />,
    title: 'Multi‑Wallet Support',
    desc: 'Connect your favorite wallet to start collecting in seconds.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
    title: 'Creator Tools',
    desc: 'Powerful tools to mint, showcase and grow your collections.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-indigo-50/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Built for collectors and creators
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-colors hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
