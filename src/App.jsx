import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Seo from "./components/seo/Seo";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Transportation from "./pages/Transportation";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlanYourTrip from "./pages/PlanYourTrip";
import { PrivacyPolicy, Terms } from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Seo path={pathname} />

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour-packages" element={<Packages />} />
            <Route path="/tour-packages/:slug" element={<PackageDetails />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan-your-trip" element={<PlanYourTrip />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />

            {/* Friendly aliases for common URLs */}
            <Route path="/packages" element={<Navigate to="/tour-packages" replace />} />
            <Route path="/customize-tour" element={<Navigate to="/plan-your-trip" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
