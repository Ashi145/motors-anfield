import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { cn } from "@/utils/cn";
import { categories } from "@/data/content";
import { useCart } from "@/lib/cart";
import Logo from "@/components/Logo";

const categoryLinks = [
  { to: "/shop", label: "All Products" },
  ...categories.slice(0, 6).map((c) => ({ to: `/shop?cat=${c.id}`, label: c.name })),
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/story", label: "About" },
  { to: "/contact", label: "Contact" },
];

function SearchBar({ className }: { className?: string }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    navigate(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex w-full items-center", className)}>
      <div className="flex h-11 flex-1 items-center overflow-hidden rounded-lg rounded-r-none border border-line bg-mist focus-within:border-blood">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search parts, tools, scanners…"
          className="h-full w-full bg-transparent px-4 text-sm text-bone outline-none placeholder:text-smoke/70"
        />
      </div>
      <button
        type="submit"
        className="flex h-11 items-center gap-2 rounded-lg rounded-l-none bg-blood px-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}

export default function Navbar() {
  const { count, setOpen } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-white transition-shadow duration-300",
        scrolled && "shadow-[0_6px_24px_rgba(22,22,26,0.07)]"
      )}
    >
      {/* main row */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 md:h-[72px]">
        <Logo />

        <SearchBar className="ml-auto hidden max-w-xl flex-1 md:flex" />

        <div className="ml-auto flex items-center gap-1.5 md:ml-0">
          <button
            className="flex h-11 w-11 items-center justify-center rounded-lg text-smoke transition-colors hover:text-blood"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="relative flex h-11 items-center gap-2 rounded-lg px-3 text-smoke transition-colors hover:text-blood"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden text-sm font-semibold text-bone lg:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blood px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* search on mobile */}
      <div className="border-t border-line px-4 py-2.5 md:hidden">
        <SearchBar />
      </div>

      {/* category strip */}
      <nav className="border-t border-line bg-white">
        <div className="no-scrollbar mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 sm:px-6">
          {categoryLinks.map((l) => {
            const [path, qs] = l.to.split("?");
            const active =
              location.pathname === path &&
              (qs ? location.search.includes(qs) : !location.search);
            return (
              <Link
                key={l.to + l.label}
                to={l.to}
                className={cn(
                  "whitespace-nowrap border-b-2 px-3 py-3 text-[13px] font-semibold transition-colors",
                  active ? "border-blood text-blood" : "border-transparent text-smoke hover:text-blood"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
