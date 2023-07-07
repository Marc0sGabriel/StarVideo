import { Routes, Route } from 'react-router-dom';
import { Series } from './pages/Series';
import { Subscribe } from './pages/Subscribe';
import { NotFound } from './components/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Subscribe />} />
      <Route path="/series/episode/:slug" element={<Series />} />
    </Routes>
  );
}
