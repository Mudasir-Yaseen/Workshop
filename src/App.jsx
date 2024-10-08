import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import ProductsSection from "./components/products/ProductsSection";
import Portfolio from "./components/portfolio/Portfolio";
import Clients from "./components/clients/Clients";
import VisitSection from "./components/visit/VisitSection";
import Footer from "./components/footer/Footer";
import Quotation from "./components/quotation/Quotation";
import BillMaker from "./components/bill/BillMaker";
import ContactPage from "./components/contact/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <main>
              <HeroSection id="home" />
              <ProductsSection id="products" />
              <Portfolio id="portfolio" />
              <Clients id="clients" />
              <VisitSection id="visit" />
            </main>
          </>
        } />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/bill-maker" element={<BillMaker />} />
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
