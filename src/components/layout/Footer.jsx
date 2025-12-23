import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h3 className="h5">John Doe</h3>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-0">john.doe@gmail.com</p>
          </div>

          <div className="col-12 col-md-4">
            <h3 className="h5">Liens utiles</h3>
            <ul className="list-unstyled mb-0">
              <li><NavLink className="text-light text-decoration-none" to="/">Accueil</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/services">Services</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/contact">Me contacter</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/mentions-legales">Mentions légales</NavLink></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h3 className="h5">Mes dernières réalisations</h3>
            <ul className="list-unstyled mb-0">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d’une API</li>
              <li>Maquette d’un site</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top border-secondary">
        <small>© {new Date().getFullYear()} John Doe</small>
      </div>
    </footer>
  );
}