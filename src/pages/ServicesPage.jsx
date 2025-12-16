export default function ServicesPage() {
  return (
    <main>
      {/* HERO (bandeau) */}
      <header className="page-hero page-hero--services" aria-label="Bandeau services" />

      {/* TITRE */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold mb-2">
            Mon <span className="fw-normal">offre de services</span>
          </h1>
          <p className="mb-3">Voici les prestations sur lesquelles je peux intervenir</p>
          <div className="title-underline mx-auto" />
        </div>
      </section>

      {/* CARTES */}
      <section className="pb-5 bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm service-card text-center">
                <div className="card-body p-4">
                  <div className="service-icon" aria-hidden="true">
                    ✒️
                  </div>
                  <h2 className="h4 fw-bold mt-2">UX Design</h2>
                  <p className="mb-0">
                    L'UX Design est une discipline qui consiste à concevoir des produits
                    (sites web, applications mobiles, logiciels, objets connectés, etc.)
                    en plaçant l'utilisateur au centre des préoccupations.
                  </p>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm service-card text-center">
                <div className="card-body p-4">
                  <div className="service-icon" aria-hidden="true">
                    {"</>"}
                  </div>
                  <h2 className="h4 fw-bold mt-2">Développement web</h2>
                  <p className="mb-0">
                    Création de sites internet avec HTML, CSS, JavaScript, PHP, etc.
                    et des frameworks (Bootstrap, React, Angular, etc.).
                  </p>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm service-card text-center">
                <div className="card-body p-4">
                  <div className="service-icon" aria-hidden="true">
                    🔎
                  </div>
                  <h2 className="h4 fw-bold mt-2">Référencement</h2>
                  <p className="mb-0">
                    Optimisation SEO pour améliorer la visibilité dans les moteurs de recherche
                    (Google, Bing, Yahoo, etc.) et attirer des visiteurs qualifiés.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}