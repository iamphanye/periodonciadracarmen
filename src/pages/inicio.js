import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Arreglo para las tarjetas (servicios destacados)
const serviciosDestacados = [
  {
    nombre: 'Limpieza Dental',
    descripcion: 'Limpieza profunda y eliminación de placa.',
    imagen: '/images/limpio.jpg'
  },
  {
    nombre: 'Tratamiento Periodontal',
    descripcion: 'Quirurgico y no quirurgico.',
    imagen: '/images/diente.jpg'
  },
  {
    nombre: 'Curetaje abierto (cirugía periodontal)',
    descripcion: 'Limpieza profunda con acceso quirúrgico',
    imagen: '/images/encias.jpg'
  },
];

// Nuevo arreglo para el carrusel (diferentes imágenes)
const imagenesCarrusel = [
  {
    id: 1,
    imagen: '/images/recepcion.jpeg',
    titulo: 'Nuestra Recepción',
    descripcion: 'Un espacio cómodo para nuestros pacientes.'
  },
  {
    id: 2,
    imagen: '/images/consultorio.jpg',
    titulo: 'Consultorios Modernos',
    descripcion: 'Equipamiento de última generación.'
  },
  {
    id: 3,
    imagen: '/images/diente.jpg',
    titulo: 'Nuestro Equipo',
    descripcion: 'Profesionales capacitados a tu servicio.'
  },
];

export default function Inicio() {
  const [opiniones, setOpiniones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch('http://localhost:3003/api/opiniones')
      .then((res) => res.json())
      .then((data) => {
        setOpiniones(data);
        setLoading(false);
        AOS.refresh();
      })
      .catch((error) => {
        console.error('Error cargando opiniones:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-4">

      {/* Bienvenida */}
      <div className="text-center mb-4" data-aos="fade-up">
        <h2 className="text-gray">Bienvenidos</h2>
        <p data-aos="fade-right" data-aos-delay="200">
          Somos una clínica especializada en atención integral para nuestros pacientes.
        </p>
      </div>

      {/* Carrusel debajo de bienvenida */}
      <div
        id="carouselServicios"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="carousel-indicators">
          {imagenesCarrusel.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#carouselServicios"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner rounded shadow">
          {imagenesCarrusel.map(({ id, imagen, titulo, descripcion }, idx) => (
            <div
              key={id}
              className={`carousel-item ${idx === 0 ? 'active' : ''}`}
            >
              <img
                src={imagen}
                className="d-block w-100"
                alt={titulo}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>{titulo}</h5>
                <p>{descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselServicios"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselServicios"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Servicios Destacados (tarjetas) */}
      <h2 className="text-center text-gray mb-4" data-aos="fade-up">
        Servicios Destacados
      </h2>
      <div className="row mb-5">
        {serviciosDestacados.map(({ id, nombre, descripcion, imagen }) => (
          <div
            key={id}
            className="col-md-4 mb-3"
            data-aos="zoom-in"
            data-aos-delay={id * 100}
          >
            <div className="card h-100 shadow-sm servicio-card">
              <img
                src={imagen}
                alt={nombre}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Opiniones */}
      <h2 className="text-center text-gray mb-4" data-aos="fade-up">
        Pacientes
      </h2>
      {loading ? (
        <p className="text-center">Cargando opiniones...</p>
      ) : (
        <div className="row justify-content-center">
          {opiniones.slice(0, 2).map(({ id, nombre, comentario, rating }) => (
            <div
              key={id}
              className="col-md-5 mb-4"
              data-aos="fade-up"
              data-aos-delay={id * 200}
            >
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{nombre}</h5>
                  <p className="card-text">"{comentario}"</p>
                  <p>
                    {'⭐'.repeat(rating)}{' '}
                    <small className="text-muted">({rating} estrellas)</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
