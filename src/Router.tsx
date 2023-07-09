import { Routes, Route } from 'react-router-dom';
import { Serie } from './pages/Serie';
import { Subscribe } from './pages/Subscribe';
import { NotFound } from './components/NotFound';
import { Home } from './pages/home/Home';

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Subscribe />} />
      <Route path="/series" element={<Home />} />
      <Route path="/series/episode/:slug" element={<Serie />} />
    </Routes>
  );
}
