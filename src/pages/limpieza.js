export default function Limpieza() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5" style={{ color: "#2c3e50", fontWeight: "700" }}>
          Limpieza Dental Profunda
        </h1>

        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card shadow-sm border-0">
              <img 
                src="/images/limpio2.jpg" 
                alt="Limpieza Dental Profunda" 
                className="card-img-top rounded"
              />
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="p-4 bg-light rounded shadow-sm">
              <h3 className="mb-3" style={{ color: "#2980b9" }}>Descripción del procedimiento</h3>
              <p style={{ lineHeight: "1.7", color: "#555" }}>
                La limpieza dental profunda es un procedimiento profesional que elimina placa, sarro 
                y manchas en los dientes, llegando incluso a áreas difíciles de alcanzar con el cepillado 
                diario. Este procedimiento ayuda a prevenir caries y enfermedades periodontales.
              </p>

              <h4 className="mt-4 mb-3" style={{ color: "#27ae60" }}>Beneficios:</h4>
              <ul className="list-unstyled" style={{ lineHeight: "1.7" }}>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Elimina placa y sarro acumulado.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Previene inflamación y sangrado de encías.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Mejora el aliento y la estética dental.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Contribuye a la salud general de boca y dientes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
