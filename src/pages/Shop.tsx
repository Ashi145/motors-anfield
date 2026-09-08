import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X, PackageSearch } from "lucide-react";
import { products, categories } from "@/data/content";
import ProductCard from "@/components/ProductCard";
import { Reveal, SectionTag } from "@/components/shared";
import { cn } from "@/utils/cn";

const sorts = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low → High" },
  { id: "price-desc", label: "Price: High → Low" },
  { id: "rating", label: "Top rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") ?? "";
  const q = (params.get("q") ?? "").toLowerCase();
  const sort = params.get("sort") ?? "featured";

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = !cat || p.category === cat;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (categories.find((c) => c.id === p.category)?.name.toLowerCase().includes(q) ?? false);
      return matchCat && matchQ;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  const activeCategory = categories.find((c) => c.id === cat);

  return (
    <>
      <header className="border-b border-line bg-coal">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6 md:pt-32">
          <Reveal>
            <SectionTag>Anfield Motors shop</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold uppercase leading-none tracking-tight text-bone md:text-5xl">
              {q ? (
                <>
                  Results for “<span className="text-blood">{q}</span>”
                </>
              ) : activeCategory ? (
                activeCategory.name
              ) : (
                <>
                  All <span className="text-blood">products</span>
                </>
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm text-smoke">
              {filtered.length} item{filtered.length === 1 ? "" : "s"} · every order is confirmed on
              WhatsApp before payment.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* sidebar */}
          <aside className="lg:sticky lg:top-40 lg:self-start">
            <div className="rounded-xl border border-line bg-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-bone">
                  <SlidersHorizontal className="h-4 w-4 text-blood" /> Categories
                </h3>
                {(cat || q || sort !== "featured") && (
                  <button
                    onClick={() => setParams({}, { replace: true })}
                    className="flex items-center gap-1 text-xs font-semibold text-blood hover:underline"
                  >
                    <X className="h-3.5 w-3.5" /> Clear
                  </button>
                )}
              </div>

              <ul className="mt-4 space-y-1">
                <li>
                  <button
                    onClick={() => setParam("cat", "")}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      !cat ? "bg-blood text-white" : "text-bone hover:bg-coal"
                    )}
                  >
                    All products
                    <span className="text-xs opacity-70">{products.length}</span>
                  </button>
                </li>
                {categories.map((c) => {
                  const count = products.filter((p) => p.category === c.id).length;
                  return (
                    <li key={c.id}>
                      <button
                        onClick={() => setParam("cat", c.id)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          cat === c.id ? "bg-blood text-white" : "text-bone hover:bg-coal"
                        )}
                      >
                        {c.name}
                        <span className="text-xs opacity-70">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-line bg-white p-5">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-bone">Sort by</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {sorts.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setParam("sort", s.id === "featured" ? "" : s.id)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                      sort === s.id
                        ? "border-blood bg-blood text-white"
                        : "border-line text-smoke hover:border-blood hover:text-blood"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-line py-24 text-center">
                <PackageSearch className="h-12 w-12 text-line" />
                <p className="mt-4 font-display text-xl font-semibold uppercase text-bone">No matches</p>
                <p className="mt-1 max-w-sm text-sm text-smoke">
                  We couldn't find anything for that search. Try another keyword, or message us on
                  WhatsApp — we source parts other shops can't.
                </p>
                <button
                  onClick={() => setParams({}, { replace: true })}
                  className="mt-6 rounded-lg bg-blood px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-ember"
                >
                  Show all products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}

            <div className="mt-10 flex items-center justify-between rounded-xl border border-line bg-coal px-5 py-4">
              <p className="text-sm text-smoke">Can't find the exact part?</p>
              <Link
                to="/contact"
                className="text-sm font-bold text-blood hover:underline"
              >
                Request it on WhatsApp →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
