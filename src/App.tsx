import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Brands from "@/pages/Brands";
import Engines from "@/pages/Engines";
import Parts from "@/pages/Parts";
import Story from "@/pages/Story";
import Contact from "@/pages/Contact";
import { markLoaded } from "@/lib/firstLoad";
import { ThemeProvider } from "@/components/ThemeProvider";
import BrandLogo from "@/components/BrandLogo";

/* ------------------------------ Scroll to top ------------------------------ */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/* ------------------------------ Preloader ------------------------------ */

function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => {
        const next = c + Math.floor(Math.random() * 14) + 6;
        return next >= 100 ? 100 : next;
      });
    }, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-3"
      >
        <BrandLogo className="h-28 w-44" />
        <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-smoke">
          Kireka · Uganda
        </span>
      </motion.div>
      <div className="mt-8 h-px w-48 bg-line">
        <motion.div
          className="h-full bg-blood"
          style={{ width: `${count}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-smoke">
        Warming up the diagnostics · {count}%
      </p>
    </motion.div>
  );
}

/* ------------------------------ Animated routes ------------------------------ */

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
        <Route path="/brands" element={<PageShell><Brands /></PageShell>} />
        <Route path="/engines" element={<PageShell><Engines /></PageShell>} />
        <Route path="/parts" element={<PageShell><Parts /></PageShell>} />
        <Route path="/story" element={<PageShell><Story /></PageShell>} />
        <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
        <Route path="*" element={<PageShell><Home /></PageShell>} />
      </Routes>
    </AnimatePresence>
  );
}

/* ------------------------------ App ------------------------------ */

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      markLoaded();
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}
