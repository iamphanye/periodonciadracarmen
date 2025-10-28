export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-4 mt-5">
      <div className="container">
        <div className="row justify-content-between align-items-start">

          {/* Navegación - izquierda */}
          <div className="col-md-3 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-dark">Inicio</a></li>
              <li><a href="/servicios" className="text-decoration-none text-dark">Servicios</a></li>
              <li><a href="/contacto" className="text-decoration-none text-dark">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto - derecha */}
          <div className="col-md-5 mb-3 text-md-end">
            <h5>Contacto</h5>
            <p className="mb-1"><span role="img" aria-label="Teléfono">📞</span> Teléfono: 352 522 8281</p>
            <p className="mb-1"><span role="img" aria-label="WhatsApp">📱</span> WhatsApp: +52 352 522 8281</p>
            <p className="mb-1"><span role="img" aria-label="Ubicación">📍</span> Calle Mariano Jiménez 154-Int 8, Col. Centro, La Piedad, Michoacán</p>
          </div>

        </div>

        <div className="text-center py-3 border-top">
          <small>&copy; 2025 Dra. Carmen Aguilera | Periodoncia</small>
        </div>
      </div>
    </footer>
  );
}
