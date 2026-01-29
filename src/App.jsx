import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import MOT from "./pages/MOT";
import Brake from "./pages/Brake";
import CamBelt from "./pages/CamBelt";
import Diagnostics from "./pages/Diagnostics";
import DPF from "./pages/DPF";
import Mechanical from "./pages/Mechanical";
import Servicing from "./pages/Servicing";
import Suspension from "./pages/Suspension";

import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,        // animation duration
      easing: "ease-out-cubic",
      once: true,           // animate only once
      offset: 80,           // trigger point
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services/mot" element={<MOT />} />
        <Route path="/services/brake" element={<Brake />} />
        <Route path="/services/cam-belt" element={<CamBelt />} />
        <Route path="/services/diagnostics" element={<Diagnostics />} />
        <Route path="/services/dpf-clean" element={<DPF />} />
        <Route path="/services/mechanical-repairs" element={<Mechanical />} />
        <Route path="/services/servicing" element={<Servicing />} />
        <Route path="/services/suspension" element={<Suspension />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
