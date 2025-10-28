import { useNavigate } from 'react-router-dom';
import ServicioCard from '../components/ServicioCard';
import { useEffect, useState } from 'react';
import { FaTooth, FaTags, FaLock } from 'react-icons/fa';

const servicios = [
  {
    nombre: 'Limpieza Dental',
    descripcion: 'Limpieza profunda y eliminación de placa.',
    imagen: '/images/limpio2.jpg',
    ruta: '/limpieza'
  },
  {
    nombre: 'Tratamiento Periodontal',
    descripcion: 'Quirurgico y no quirurgico.',
    imagen: '/images/diente.jpg',
    ruta: '/periodontal'
  },
  {
    nombre: 'Curetaje abierto (cirugía periodontal)',
    descripcion: 'Limpieza profunda con acceso quirúrgico',
    imagen: '/images/encias.jpg',
    ruta: '/curetaje'
  },
];

export default function Servicios() {
  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sección Parallax con bienvenida */}
      <div className="position-relative overflow-hidden" style={{ height: "60vh" }}>
        <img
          src="/images/princi.jpg"
          alt="Clinica"
          className="w-100"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`,
            transition: "transform 0.1s",
            objectFit: "cover",
            height: "100%",
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
            Bienvenido a nuestra clínica dental
          </h1>
        </div>
      </div>

      {/* Acerca de la Dra. Carmen */}
      <div className="container my-5 text-center">
        <h2 className="mb-3" style={{ color: "#2980b9" }}>Acerca de la Dra. Carmen</h2>
        <p style={{ color: "#555", lineHeight: "1.7" }}>
          La Dra. Carmen se especializa en brindar atención dental personalizada, utilizando los mejores
          tratamientos y tecnología para cuidar de tu salud oral. Su prioridad es que cada paciente
          reciba un tratamiento seguro, efectivo y con resultados visibles.
        </p>
      </div>

      {/* Beneficios con íconos */}
      <div className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <FaTooth size={50} color="#2980b9" className="mb-3" />
              <h5>Contamos con la mejor atención</h5>
              <p>Realizamos distintos tratamientos de disciplinas dentales de acuerdo a tu diagnóstico.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <FaTags size={50} color="#e67e22" className="mb-3" />
              <h5>Las mejores ofertas</h5>
              <p>Siempre contamos con promociones que no podrás desaprovechar. ¡No te las pierdas!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <FaLock size={50} color="#27ae60" className="mb-3" />
              <h5>Pagos seguros</h5>
              <p>No te preocupes por tus pagos, siéntete tranquilo, están seguros con nosotros.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Nuestros Servicios</h2>
        <div className="row">
          {servicios.map((serv, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(serv.ruta)}
              >
                <img src={serv.imagen} className="card-img-top" alt={serv.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{serv.nombre}</h5>
                  <p className="card-text">{serv.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
