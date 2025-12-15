import {Link} from "react-router-dom";
function Header() {
    return (
    <header>
        <p>John Doe</p>
        <nav>
            <ul>
                <li><Link to="HomePage.jsx">Home</Link></li>
                <li><Link to="ServicesPage.jsx">Services</Link></li>
                <li><Link to="PortefolioPage.jsx">Portefolio</Link></li>
                <li><Link to="ContactPage.jsx">Contact</Link></li>
                <li><Link to="LegalPage.jsx">Mentions Légales</Link></li>
            </ul>
        </nav>
    </header>
    );
}
export default Header;