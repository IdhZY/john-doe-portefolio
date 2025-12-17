import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <main>
      {/* Banner (sans image) */}
      <section className="contact-hero" aria-label="Bannière Contact">
        <div className="contact-hero__placeholder" aria-hidden="true" />
      </section>

      {/* Content */}
      <section className="container py-5" aria-labelledby="contact-title">
        <header className="text-center mb-5">
          <h1 id="contact-title" className="fw-bold">
            Contact
          </h1>
          <p className="text-muted mb-3">
            Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration,
            merci de remplir le formulaire de contact.
          </p>
          <div className="contact-divider mx-auto" aria-hidden="true" />
        </header>

        <div className="contact-card card shadow-sm">
          <div className="card-body p-4 p-lg-5">
            <div className="row g-4">
              {/* Form */}
              <div className="col-12 col-lg-6">
                <section aria-labelledby="contact-form-title">
                  <h2 id="contact-form-title" className="h4 fw-bold mb-2">
                    Formulaire de contact
                  </h2>
                  <div className="contact-section-divider mb-4" aria-hidden="true" />

                  <form className="d-grid gap-3" noValidate>
                    <div>
                      <label className="form-label visually-hidden" htmlFor="name">
                        Votre nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Votre nom"
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <label className="form-label visually-hidden" htmlFor="email">
                        Votre adresse email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Votre adresse email"
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <label className="form-label visually-hidden" htmlFor="phone">
                        Votre numéro de téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Votre numéro de téléphone"
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <label className="form-label visually-hidden" htmlFor="subject">
                        Sujet
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="form-control"
                        placeholder="Sujet"
                      />
                    </div>

                    <div>
                      <label className="form-label visually-hidden" htmlFor="message">
                        Votre message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Votre message"
                        rows={10}
                      />
                    </div>

                    <div className="text-center pt-2">
                      <button type="submit" className="btn btn-primary px-4">
                        Envoyer
                      </button>
                    </div>
                  </form>
                </section>
              </div>

              {/* Details + Map */}
              <div className="col-12 col-lg-6">
                <section aria-labelledby="contact-details-title">
                  <h2 id="contact-details-title" className="h4 fw-bold mb-2">
                    Mes coordonnées
                  </h2>
                  <div className="contact-section-divider mb-4" aria-hidden="true" />

                  <div className="mb-3">
                    <p className="fw-bold mb-2">John Doe</p>

                    <ul className="list-unstyled mb-0 contact-details">
                      <li className="mb-1">
                        <span className="contact-details__icon" aria-hidden="true">📍</span>
                        <span>40 rue Laure Diebold</span>
                      </li>
                      <li className="mb-1">
                        <span className="contact-details__icon" aria-hidden="true">🏙️</span>
                        <span>69009 Lyon, France</span>
                      </li>
                      <li className="mb-1">
                        <span className="contact-details__icon" aria-hidden="true">📞</span>
                        <a className="text-decoration-none" href="tel:+331020304050">
                          10 20 30 40 50
                        </a>
                      </li>
                      <li className="mb-1">
                        <span className="contact-details__icon" aria-hidden="true">✉️</span>
                        <a className="text-decoration-none" href="mailto:john.doe@gmail.com">
                          john.doe@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="contact-map">
                    <iframe
                      title="Localisation - 40 rue Laure Diebold, Lyon"
                      src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon%20France&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}