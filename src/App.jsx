import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyBitBlox from './components/WhyBitBlox.jsx';
import FAQ from './components/FAQ.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <WhyBitBlox />
        <FAQ />
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-8 text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2025 BitBlox. All Rights Reserved.</p>
          <nav className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="/robux">Robux</a>
            <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
            <a className="hover:text-white transition-colors" href="/terms">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
