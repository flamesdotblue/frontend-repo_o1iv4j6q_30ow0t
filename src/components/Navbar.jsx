import { useState, useEffect } from 'react';
import { Rocket, Wallet2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">NeonNFT</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
            <a href="#trending" className="text-gray-700 hover:text-gray-900">Trending</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500"
          >
            <Wallet2 className="h-4 w-4" />
            Connect
          </motion.button>
        </div>
      </div>
    </div>
  );
}
