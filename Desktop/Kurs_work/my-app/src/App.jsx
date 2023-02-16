import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

import './App.css';
import Footer from './components/navigation/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
