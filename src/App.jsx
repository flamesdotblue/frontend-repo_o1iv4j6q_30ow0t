import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Trending from './components/Trending';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trending />
      </main>
      <footer className="border-t border-gray-100 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} NeonNFT. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
