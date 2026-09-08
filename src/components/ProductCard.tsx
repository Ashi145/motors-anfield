import { useState } from "react";
import { ShoppingCart, Check, MessageCircle } from "lucide-react";
import { type Product, ugx, waLink } from "@/data/content";
import { useCart } from "@/lib/cart";
import { StarRating } from "@/components/shared";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  function onAdd() {
    add(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  const orderUrl = waLink(
    `Hello Anfield Motors, I'd like to order:\n\n• ${product.name} (${product.brand})\n• Price: UGX ${ugx(product.price)}\n\nIs it in stock?`
  );

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-blood/40 hover:shadow-[0_14px_40px_rgba(22,22,26,0.10)]">
      {/* image */}
      <div className="relative aspect-square overflow-hidden bg-mist">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* badges */}
        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="rounded bg-blood px-1.5 py-0.5 text-[11px] font-bold text-white">
              -{discount}%
            </span>
          )}
          {product.badge && (
            <span
              className={
                "rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white " +
                (product.badge === "Official" ? "bg-noir" : "bg-star")
              }
            >
              {product.badge}
            </span>
          )}
        </div>
        {/* quick order */}
        <a
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Order ${product.name} on WhatsApp`}
          className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#25D366] shadow-sm transition-all hover:bg-[#25D366] hover:text-white"
        >
          <MessageCircle className="h-4.5 w-4.5" />
        </a>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-smoke">{product.brand}</p>
        <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-bone transition-colors group-hover:text-blood">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-smoke">({product.reviews})</span>
        </div>

        <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-lg font-bold text-bone">UGX {ugx(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-smoke line-through">UGX {ugx(product.oldPrice)}</span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-3.5">
          <button
            onClick={onAdd}
            className={
              "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors " +
              (added
                ? "bg-emerald-600 text-white"
                : "bg-blood text-white hover:bg-ember")
            }
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" /> Add to cart
              </>
            )}
          </button>
          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-smoke transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            aria-label="Order directly on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
