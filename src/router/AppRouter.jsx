import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

import HomePage from "../pages/HomePage.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import LegalPage from "../pages/LegalPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<LegalPage />} />
      </Route>
    </Routes>
  );
}