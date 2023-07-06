import { Routes, Route } from 'react-router-dom';
import { Series } from './pages/Series';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/series" element={<Series />} />
      <Route path="/series/episode/:slug" element={<Series />} />
    </Routes>
  );
}
