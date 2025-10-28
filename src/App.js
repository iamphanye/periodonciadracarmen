import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Inicio from './pages/inicio';
import Servicios from './pages/servicios';
import Ubicacion from './pages/ubicacion';
import Contacto from './pages/contacto';
import Limpieza from './pages/limpieza';
import Periodontal from './pages/periodontal';
import Curetaje from './pages/curetaje';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // milisegundos
      once: true,     // se ejecuta solo una vez por scroll
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/limpieza" element={<Limpieza />} />
    <Route path="/periodontal" element={<Periodontal />} />
    <Route path="/curetaje" element={<Curetaje />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
