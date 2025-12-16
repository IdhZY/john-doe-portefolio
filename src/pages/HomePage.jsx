import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__overlay">
          <div className="container text-center text-white">
            <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
            <p className="lead fw-semibold mb-4">Développeur web full stack</p>
            <NavLink to="/portfolio" className="btn btn-danger px-4">
              En savoir plus
            </NavLink>
          </div>
        </div>
      </section>

      {/* À PROPOS + COMPÉTENCES */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-lg-5">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <h2 className="section-title">À propos</h2>
                  <div className="section-line" />

                  <img
                    className="img-fluid rounded mb-3"
                    src="/src/assets/images/john-doe-about.jpg"
                    alt="John Doe au travail"
                  />

                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                    necessitatibus...
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                    necessitatibus...
                  </p>
                </div>

                <div className="col-12 col-lg-6">
                  <h2 className="section-title">Mes compétences</h2>
                  <div className="section-line" />

                  <Skill label="HTML5" value={90} variant="danger" />
                  <Skill label="CSS3" value={80} variant="info" />
                  <Skill label="JAVASCRIPT" value={70} variant="warning" />
                  <Skill label="PHP" value={60} variant="success" />
                  <Skill label="REACT" value={50} variant="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Skill({ label, value, variant }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <span className="fw-semibold">{label}</span>
        <span className="text-muted">{value}%</span>
      </div>
      <div className="progress" style={{ height: "10px" }}>
        <div
          className={`progress-bar bg-${variant}`}
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}