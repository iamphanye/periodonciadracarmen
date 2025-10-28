export default function ServicioCard({ serv, onClick }) {
  return (
    <div className="card h-100" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={serv.imagen} className="card-img-top" alt={serv.nombre} />
      <div className="card-body">
        <h5 className="card-title">{serv.nombre}</h5>
        <p className="card-text">{serv.descripcion}</p>
      </div>
    </div>
  );
}
