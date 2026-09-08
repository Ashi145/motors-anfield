import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle, Mail } from "lucide-react";
import { ADDRESS, HOURS, PHONE_HREF, WHATSAPP, EMAIL_HREF, categories } from "@/data/content";
import Logo from "@/components/Logo";

const shopLinks = categories.map((c) => ({ to: `/shop?cat=${c.id}`, label: c.name }));
const serviceLinks = [
  { to: "/services?focus=wiring", label: "Auto Electrical & Wiring" },
  { to: "/services", label: "Engine Repair & Rebuild" },
  { to: "/services", label: "Computer Diagnostics" },
  { to: "/services", label: "Brakes & Suspension" },
  { to: "/brands", label: "Range Rover · BMW · Toyota" },
];
const helpLinks = [
  { to: "/contact", label: "Help Centre" },
  { to: "/contact", label: "Track Your Order" },
  { to: "/story", label: "About Anfield Motors" },
  { to: "/contact", label: "Delivery & Pickup" },
  { to: "/contact", label: "Returns & Warranty" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      {/* newsletter */}
      <div className="border-b border-line bg-coal">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold uppercase tracking-wide text-bone">
              Get deals &amp; new parts first
            </p>
            <p className="text-sm text-smoke">Join the list — no spam, just honest prices on parts and services.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center overflow-hidden rounded-lg border border-line bg-white"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="h-12 flex-1 bg-transparent px-4 text-sm text-bone outline-none placeholder:text-smoke/70"
            />
            <button
              type="submit"
              className="h-12 bg-blood px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-ember"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* main grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">
            Kireka's specialist garage and parts store for Range Rover, BMW &amp; Toyota. Genuine
            parts, diagnostic tools and honest workmanship — now orderable straight from WhatsApp.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={PHONE_HREF}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-smoke transition-all hover:border-blood hover:text-blood"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-smoke transition-all hover:border-[#25D366] hover:text-[#25D366]"
              aria-label="WhatsApp us"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={EMAIL_HREF}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-smoke transition-all hover:border-blood hover:text-blood"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-blood">Shop</h4>
          <ul className="mt-4 space-y-2.5">
            {shopLinks.map((l) => (
              <li key={l.to + l.label}>
                <Link to={l.to} className="text-sm text-smoke transition-colors hover:text-blood">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-blood">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.to + l.label}>
                <Link to={l.to} className="text-sm text-smoke transition-colors hover:text-blood">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-blood">Help</h4>
          <ul className="mt-4 space-y-2.5">
            {helpLinks.map((l) => (
              <li key={l.to + l.label}>
                <Link to={l.to} className="text-sm text-smoke transition-colors hover:text-blood">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2.5 text-sm text-smoke">
            <p className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
              <span>{ADDRESS}</span>
            </p>
            <p className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
              <span>{HOURS}</span>
            </p>
          </div>
        </div>
      </div>

      {/* payments + bottom */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
            © {new Date().getFullYear()} Anfield Motors · Kireka, Uganda
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["MTN MoMo", "Airtel Money", "Cash on Delivery", "Visa", "Mastercard"].map((m) => (
              <span key={m} className="rounded border border-line bg-mist px-2.5 py-1 text-[11px] font-semibold text-smoke">
                {m}
              </span>
            ))}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
            Scan first. <span className="text-blood">Fix right.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
