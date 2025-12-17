import { NavLink } from "react-router-dom";

export default function MentionsLegales() {
  return (
    <main>
      <section className="container py-5" aria-labelledby="legal-title">
        <header className="text-center mb-5">
          <h1 id="legal-title" className="fw-bold">
            Mentions légales
          </h1>
          <div className="legal-divider mx-auto mt-3" aria-hidden="true" />
        </header>

        <div className="legal-accordion mx-auto">
          <div className="accordion" id="legalAccordion">
            {/* Éditeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEditor">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEditor"
                  aria-expanded="true"
                  aria-controls="collapseEditor"
                >
                  Éditeur du site
                </button>
              </h2>

              <div
                id="collapseEditor"
                className="accordion-collapse collapse show"
                aria-labelledby="headingEditor"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p className="fw-bold mb-2">John Doe</p>

                  <ul className="list-unstyled mb-0 legal-list">
                    <li className="mb-1">
                      <span className="legal-list__icon" aria-hidden="true">📍</span>
                      <span>40 rue Laure Diebold</span>
                    </li>
                    <li className="mb-1">
                      <span className="legal-list__icon" aria-hidden="true">🏙️</span>
                      <span>69009 Lyon, France</span>
                    </li>
                    <li className="mb-1">
                      <span className="legal-list__icon" aria-hidden="true">📞</span>
                      <a className="text-decoration-none" href="tel:+331020304050">
                        10 20 30 40 50
                      </a>
                    </li>
                    <li className="mb-1">
                      <span className="legal-list__icon" aria-hidden="true">✉️</span>
                      <a className="text-decoration-none" href="mailto:john.doe@gmail.com">
                        john.doe@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHost">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHost"
                  aria-expanded="false"
                  aria-controls="collapseHost"
                >
                  Hébergeur
                </button>
              </h2>

              <div
                id="collapseHost"
                className="accordion-collapse collapse"
                aria-labelledby="headingHost"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p className="fw-bold mb-2">alwaysdata</p>
                  <p className="mb-2">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>

                  <p className="mb-0">
                    <span className="legal-list__icon" aria-hidden="true">🌐</span>
                    <a
                      className="text-decoration-none"
                      href="https://www.alwaysdata.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCredits">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCredits"
                  aria-expanded="false"
                  aria-controls="collapseCredits"
                >
                  Crédits
                </button>
              </h2>

              <div
                id="collapseCredits"
                className="accordion-collapse collapse"
                aria-labelledby="headingCredits"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <h3 className="h4 fw-bold">Crédits</h3>

                  <p className="mb-2">
                    Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a
                      href="https://www.centre-europeen-formation.fr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Centre Européen de formation
                    </a>
                    .
                  </p>

                  <p className="mb-2">
                    <em>
                      Les images utilisées sur ce site sont libres de droits et ont été obtenues
                      sur le site{" "}
                      <a href="https://pixabay.com" target="_blank" rel="noreferrer">
                        Pixabay
                      </a>
                      .
                    </em>
                  </p>

                  <p className="mb-0">
                    <em>
                      La favicon de ce site a été fournie par{" "}
                      <a
                        href="https://www.flaticon.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        John Doe Icons (Freepik - Flaticon)
                      </a>
                      .
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}