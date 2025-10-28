export default function Ubicacion() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4" data-aos="fade-up">Ubicación</h2>

      <div className="card shadow-sm p-3 mb-4" data-aos="fade-up" data-aos-delay="100">
        <p className="mb-3">
          Nos encontramos en: <br />
          Calle Mariano Jiménez 154-Int 8, <br />
          Colonia Centro, C.P.: 59300, <br />
          La Piedad, Michoacán.
        </p>

        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '8px',
          }}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.276251455832!2d-102.0532980851544!3d20.343480786385356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b02c4ff7e2a6d%3A0x2a6b620e13a18c86!2sCalle%20Mariano%20Jim%C3%A9nez%20154%2C%20Centro%2C%2059300%20La%20Piedad%2C%20Mich.!5e0!3m2!1ses!2smx!4v1692461571452!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

