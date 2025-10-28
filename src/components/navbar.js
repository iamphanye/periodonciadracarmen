import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#d8d2d4' }}>
      <Link className="navbar-brand" to="/">
        <img 
          src={logo} 
          alt="Logo Dra. Carmen Aguilera" 
          style={{ height: '100px' }} // Puedes ajustar el tamaño como prefieras
        />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/servicios">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ubicacion">Ubicación</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
