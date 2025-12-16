import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container py-4">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md">
            <p className="mb-0 small">© {year} John Doe. Tous droits réservés.</p>
          </div>

          <div className="col-12 col-md-auto">
            <ul className="nav justify-content-md-end gap-2">
              <li className="nav-item">
                <NavLink className="nav-link px-0 text-light footer-link" to="/mentions-legales">
                  Mentions légales
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-0 text-light footer-link"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-0 text-light footer-link"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}