import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Generate from './pages/Generate';
import Script from './pages/Script';
import VideoReference from './pages/VideoReference';
import Schedule from './pages/Schedule';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="generate" element={<Generate />} />
          <Route path="script" element={<Script />} />
          <Route path="video-reference" element={<VideoReference />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </Router>
  );
}
