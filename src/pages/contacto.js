import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';

export default function Contacto() {
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');
  const [correo, setCorreo] = useState('');
  const [opiniones, setOpiniones] = useState([]);

  // Obtener opiniones del backend
  useEffect(() => {
    fetch('http://localhost:3003/api/opiniones')
      .then(res => res.json())
      .then(data => setOpiniones(data))
      .catch(err => console.error('Error al obtener opiniones:', err));
  }, []);

  // Enviar opinión al backend
  const handleOpinionSubmit = async (e) => {
    e.preventDefault();

    const nuevaOpinion = { rating, comentario, correo };

    try {
      const res = await fetch('http://localhost:3003/api/opiniones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaOpinion),
      });

      if (res.ok) {
        const nueva = await res.json();
        // Volver a cargar opiniones
        fetch('http://localhost:3003/api/opiniones')
          .then(res => res.json())
          .then(data => setOpiniones(data));
        // Limpiar formulario
        setRating(0);
        setComentario('');
        setCorreo('');
      } else {
        console.error('Error al enviar opinión');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="mb-3">Contáctanos</h2>

      {/* Formulario de contacto general */}
      <form className="mb-5" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Correo electrónico</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary me-3">Enviar</button>
        <a
          href="https://wa.me/523525228281?text=Hola%20Dra.%20Carmen%2C%20me%20gustaría%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
        >
          Agendar cita por WhatsApp
        </a>
      </form>

      {/* Mostrar opiniones */}
      <hr className="my-4" />
      <h3 className="mb-3">Opiniones de pacientes</h3>

      {opiniones.length === 0 ? (
        <p>No hay opiniones aún.</p>
      ) : (
        opiniones.map((op, index) => (
          <div key={index} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">⭐ {op.rating} estrellas</h5>
              <p className="card-text">{op.comentario}</p>
              <p className="card-text">
                <small className="text-muted">{op.correo}</small>
              </p>
            </div>
          </div>
        ))
      )}

      {/* Formulario de opinión */}
      <h3 className="mb-3">Deja tu opinión</h3>
      <form onSubmit={handleOpinionSubmit} className="mb-5" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label>Tu calificación:</label>
          <ReactStars
            count={5}
            size={30}
            value={rating}
            onChange={(newRating) => setRating(newRating)}
            color2={'#ffd700'}
          />
        </div>
        <div className="mb-3">
          <label>Comentario</label>
          <textarea
            className="form-control"
            rows="3"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Tu correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">Enviar opinión</button>
      </form>
    </div>
  );
}
