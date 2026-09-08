import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Services from "@/pages/Services";
import Brands from "@/pages/Brands";
import Engines from "@/pages/Engines";
import Story from "@/pages/Story";
import Contact from "@/pages/Contact";
import { CartProvider } from "@/lib/cart";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    // Do not fight the wiring-service focus scroll on /services
    if (!(pathname === "/services" && search.includes("focus=wiring"))) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, search]);
  return null;
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageShell><Home /></PageShell>} />
        <Route path="/shop" element={<PageShell><Shop /></PageShell>} />
        <Route path="/services" element={<PageShell><Services /></PageShell>} />
        <Route path="/brands" element={<PageShell><Brands /></PageShell>} />
        <Route path="/engines" element={<PageShell><Engines /></PageShell>} />
        <Route path="/story" element={<PageShell><Story /></PageShell>} />
        <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
        <Route path="*" element={<PageShell><Home /></PageShell>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <TopBar />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <CartDrawer />
        <WhatsAppFloat />
      </HashRouter>
    </CartProvider>
  );
}
