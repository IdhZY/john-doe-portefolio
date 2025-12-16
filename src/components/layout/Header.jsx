import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold" to="/">
            John Doe
          </NavLink>

          {/* Burger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Accueil
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/mentions-legales"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}