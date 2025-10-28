import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Futuristic NFT Marketplace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
          >
            Discover, collect and trade digital art
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg"
          >
            Reflective cubes. Neon glow. Limitless creativity. Step into a marketplace built for artists and collectors.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#trending"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500"
            >
              Explore Collections
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur hover:border-gray-300"
            >
              How it works
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
