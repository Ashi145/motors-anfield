import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { ADDRESS, HOURS, PHONE, PHONE_HREF, WHATSAPP } from "@/data/content";
import { Reveal } from "@/components/shared";
import BrandLogo from "@/components/BrandLogo";

const nav = [
  { to: "/brands", label: "Car Brands" },
  { to: "/engines", label: "Engine Types" },
  { to: "/parts", label: "Spare Parts" },
  { to: "/story", label: "Our Story" },
  { to: "/contact", label: "Contact & Booking" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div>
              <Link to="/" className="flex items-center gap-3">
                <BrandLogo className="h-16 w-24 md:h-24 md:w-36" />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">
                Kireka's specialist garage for Range Rover, BMW & Toyota. Engine rebuilds, computer
                diagnostics and honest workmanship — no guesswork, no shortcuts.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex h-10 w-10 items-center justify-center border border-line text-smoke transition-all hover:border-blood hover:text-blood"
                  aria-label="Call us"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-line text-smoke transition-all hover:border-blood hover:text-blood"
                  aria-label="WhatsApp us"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood">Explore</h4>
              <ul className="mt-5 space-y-3">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="group flex items-center gap-2 text-sm text-smoke transition-colors hover:text-bone"
                    >
                      <span className="h-px w-0 bg-blood transition-all duration-300 group-hover:w-4" />
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood">Find us</h4>
              <div className="mt-5 flex gap-3 text-sm leading-relaxed text-smoke">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
                <p>{ADDRESS}</p>
              </div>
              <div className="mt-5 flex gap-3 text-sm leading-relaxed text-smoke">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
                <p>{HOURS}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="border border-line bg-panel p-6">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood">
                Talk to a mechanic
              </h4>
              <a
                href={PHONE_HREF}
                className="mt-4 block font-display text-2xl font-semibold text-bone transition-colors hover:text-blood"
              >
                {PHONE}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-smoke">
                Describe the symptom — a noise, a light, a leak — and we'll book you in.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p className="translate-y-[28%] text-center font-display text-[18vw] font-bold uppercase leading-none tracking-tight text-bone/[0.04]">
          Anfield
        </p>
      </div>

      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
            © {new Date().getFullYear()} Anfield Motors · Kireka, Uganda
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
            Scan first. <span className="text-blood">Fix right.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
