export default function ServicioDetalle({ servicio, onVolver }) {
  if (!servicio) return null; // si no hay servicio, no mostrar nada

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{servicio.nombre}</h2>
      <img src={servicio.imagen} alt={servicio.nombre} className="img-fluid mb-3" />
      <p>{servicio.descripcion}</p>
      <button className="btn btn-secondary" onClick={onVolver}>
        Volver
      </button>
    </div>
  );
}
