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
              {[
                { to: "/", label: "Accueil", end: true },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
                { to: "/mentions-legales", label: "Mentions légales" },
              ].map(({ to, label, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      "nav-link nav-link-underline" +
                      (isActive ? " active" : "")
                    }
                  >
                    <span className="nav-link-text">{label}</span>
                    <span
                      className="nav-link-bar"
                      aria-hidden="true"
                    ></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}