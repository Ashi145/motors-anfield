import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/utils/cn";
import { PHONE_HREF } from "@/data/content";
import BrandLogo from "@/components/BrandLogo";
import ThemeSwitcher, { ThemeChoices } from "@/components/ThemeSwitcher";

const links = [
  { to: "/", label: "Home" },
  { to: "/brands", label: "Brands" },
  { to: "/engines", label: "Engines" },
  { to: "/parts", label: "Spare Parts" },
  { to: "/story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const overDarkHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          overDarkHero && "media-dark",
          scrolled ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center gap-3">
            <BrandLogo className="h-14 w-[88px] transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="hidden min-w-0 leading-none sm:block">
              <span className="block truncate font-mono text-[9px] uppercase tracking-[0.35em] text-smoke">
                Kireka
              </span>
              <span className="mt-1 block truncate font-mono text-[8px] uppercase tracking-[0.25em] text-blood">
                Scan first · Fix right
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "relative font-mono text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300",
                    isActive ? "text-blood" : "text-smoke hover:text-bone"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-0 h-px bg-blood transition-all duration-300",
                        isActive ? "w-full" : "w-0"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 border border-line px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bone transition-all duration-300 hover:border-blood hover:bg-blood hover:text-white sm:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              Book service
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center border border-line text-bone transition-colors hover:border-blood hover:text-blood lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="noise fixed inset-0 z-[60] flex flex-col bg-ink"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <BrandLogo className="h-16 w-24" />
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-line text-bone transition-colors hover:border-blood hover:text-blood"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        "group flex items-baseline gap-4 border-b border-line py-5",
                        isActive ? "text-blood" : "text-bone"
                      )
                    }
                  >
                    <span className="font-mono text-xs text-blood">0{i + 1}</span>
                    <span className="font-display text-4xl font-semibold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                      {l.label}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-8"
            >
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-smoke">
                Theme on this browser
              </p>
              <ThemeChoices className="mb-4" />
              <a
                href={PHONE_HREF}
                className="flex w-full items-center justify-center gap-3 bg-blood py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                <Phone className="h-4 w-4" /> Call the workshop
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
