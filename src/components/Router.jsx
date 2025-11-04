import { useEffect, useState } from 'react';
import Home from './Home.jsx';
import RobuxPage from './RobuxPage.jsx';
import CheckoutPage from './CheckoutPage.jsx';

export default function Router() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (path === '/robux') return <RobuxPage />;
  if (path === '/checkout') return <CheckoutPage />;
  return <Home />;
}
