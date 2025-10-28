export default function Curetaje() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5" style={{ color: "#2c3e50", fontWeight: "700" }}>
          Curetaje Abierto (Cirugía Periodontal)
        </h1>

        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card shadow-sm border-0">
              <img 
                src="/images/encias.jpg" 
                alt="Curetaje abierto" 
                className="card-img-top rounded"
              />
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="p-4 bg-light rounded shadow-sm">
              <h3 className="mb-3" style={{ color: "#2980b9" }}>Descripción del procedimiento</h3>
              <p style={{ lineHeight: "1.7", color: "#555" }}>
                El curetaje abierto es un procedimiento periodontal que permite la limpieza profunda de los
                dientes y encías mediante acceso quirúrgico. Es utilizado para eliminar placa y cálculo
                debajo de la línea de las encías cuando la limpieza convencional no es suficiente.
              </p>

              <h4 className="mt-4 mb-3" style={{ color: "#27ae60" }}>Beneficios:</h4>
              <ul className="list-unstyled" style={{ lineHeight: "1.7" }}>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Elimina bacterias y placa profunda.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Previene la progresión de la enfermedad periodontal.
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Mejora la salud general de encías y dientes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
