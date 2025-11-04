import Header from './components/Header.jsx';
import Router from './components/Router.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
