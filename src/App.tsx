import { useEffect, useState } from "react";
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
import Parts from "@/pages/Parts";
import Brands from "@/pages/Brands";
import Engines from "@/pages/Engines";
import Story from "@/pages/Story";
import Contact from "@/pages/Contact";
import { CartProvider } from "@/lib/cart";
import ThemeProvider from "@/lib/theme";

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

/* ------------------------------ Preloader ------------------------------ */

function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.floor(Math.random() * 11) + 5;
        return next >= 100 ? 100 : next;
      });
    }, 85);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink"
    >
      {/* Ambient scanline */}
      <motion.span
        className="pointer-events-none absolute left-0 h-px w-full bg-blood/50"
        initial={{ top: "12%" }}
        animate={{ top: "88%" }}
        transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <span className="pointer-events-none absolute -right-10 top-8 select-none font-display text-[22vw] font-bold uppercase leading-none tracking-tight text-bone/[0.06]">
        Store
      </span>

      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="border border-line bg-panel px-6 py-5 shadow-2xl"
      >
        <svg viewBox="0 0 360 230" className="h-28 w-44 text-bone sm:h-32 sm:w-52" role="img" aria-label="Anfield Motors">
          <motion.ellipse
            cx="180" cy="115" rx="174" ry="108" fill="none" stroke="currentColor" strokeWidth="9"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="180" cy="115" rx="163" ry="96" fill="none" stroke="currentColor" strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeInOut" }}
          />
          <g transform="skewX(-8)">
            <motion.text
              x="198" y="105" fill="currentColor" textAnchor="middle"
              fontFamily="Oswald, Arial Narrow, sans-serif" fontWeight="700" fontSize="67" letterSpacing="-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45 }}
            >
              ANFIELD
            </motion.text>
            <motion.rect
              x="42" y="126" width="32" height="8" fill="var(--color-blood)"
              style={{ originX: "0%" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.text
              x="199" y="168" fill="currentColor" textAnchor="middle"
              fontFamily="Oswald, Arial Narrow, sans-serif" fontWeight="700" fontSize="67" letterSpacing="-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.58 }}
            >
              MOTORS
            </motion.text>
          </g>
        </svg>
      </motion.div>

      <div className="mt-8 w-56 sm:w-64">
        <div className="flex items-end justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-smoke">Loading the store</p>
          <span className="font-display text-lg font-semibold leading-none text-blood">{progress}%</span>
        </div>
        <div className="mt-2 h-1 w-full bg-line">
          <motion.div className="h-full bg-blood" style={{ width: `${progress}%` }} transition={{ ease: "linear" }} />
        </div>
        <p className="mt-3 text-center font-mono text-[8px] uppercase tracking-[0.35em] text-smoke">
          Kireka · Kampala–Jinja Highway
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------ Animated routes ------------------------------ */

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
        <Route path="/parts" element={<PageShell><Parts /></PageShell>} />
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <CartProvider>
        <HashRouter>
          <ScrollToTop />
          <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
          <TopBar />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </HashRouter>
      </CartProvider>
    </ThemeProvider>
  );
}
