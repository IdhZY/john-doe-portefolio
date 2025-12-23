// src/pages/Portfolio.jsx
import { NavLink } from "react-router-dom";

const PROJECTS = [
  {
    id: "fresh-food",
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
    link: "/portfolio/fresh-food",
  },
  {
    id: "restaurant-akira",
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
    link: "/portfolio/restaurant-akira",
  },
  {
    id: "espace-bien-etre",
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
    link: "/portfolio/espace-bien-etre",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Amélioration du référencement d'un site e-commerce",
    tech: "Utilisation des outils SEO",
    link: "/portfolio/seo",
  },
  {
    id: "api",
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    tech: "PHP - SYMFONY",
    link: "/portfolio/api",
  },
  {
    id: "mockup",
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    tech: "Réalisé avec FIGMA",
    link: "/portfolio/mockup",
  },
];

export default function Portfolio() {
  return (
    <main>
      {/* Banner */}
      <section className="portfolio-hero" aria-label="Bannière Portfolio">
        <div className="portfolio-hero__placeholder" aria-hidden="true" />
      </section>

      {/* Content */}
      <section className="container py-5" aria-labelledby="portfolio-title">
        <header className="text-center mb-5">
          <h1 id="portfolio-title" className="fw-bold">
            Portfolio
          </h1>
          <p className="text-muted mb-3">
            Voici quelques-unes de mes réalisations.
          </p>
          <div className="portfolio-divider mx-auto" aria-hidden="true" />
        </header>

        <div className="row g-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm portfolio-card">
                {/* Placeholder image */}
                <div className="portfolio-card__media" aria-hidden="true">
                  <div className="placeholder-glow h-100 w-100">
                    <span className="placeholder col-12 h-100" />
                  </div>
                </div>

                <div className="card-body text-center">
                  <h2 className="h5 fw-bold mb-2">{project.title}</h2>
                  <p className="text-muted mb-3">{project.description}</p>

                  <NavLink
                    to={project.link}
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </NavLink>
                </div>

                <div className="card-footer bg-white text-center text-muted small">
                  {project.tech}
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}