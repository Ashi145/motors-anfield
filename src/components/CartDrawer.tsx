import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { products, ugx } from "@/data/content";
import { useCart } from "@/lib/cart";

export default function CartDrawer() {
  const { items, open, setOpen, subtotal, count, setQty, remove, checkoutUrl } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[80] bg-bone/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-bone">
                <ShoppingCart className="h-5 w-5 text-blood" />
                Your cart
                {count > 0 && (
                  <span className="rounded-full bg-blood px-2 py-0.5 text-xs font-bold text-white">{count}</span>
                )}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-smoke transition-colors hover:border-blood hover:text-blood"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingCart className="h-12 w-12 text-line" />
                  <p className="mt-4 font-display text-lg font-semibold uppercase text-bone">Your cart is empty</p>
                  <p className="mt-1 max-w-xs text-sm text-smoke">
                    Browse the store and add parts or tools — then check out instantly on WhatsApp.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 rounded-lg bg-blood px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-ember"
                  >
                    Start shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => {
                    const p = products.find((x) => x.id === item.id);
                    if (!p) return null;
                    return (
                      <li key={item.id} className="flex gap-3 border-b border-line pb-4">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-16 w-16 shrink-0 rounded-lg border border-line object-cover"
                        />
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold leading-snug text-bone">{p.name}</p>
                            <button
                              onClick={() => remove(item.id)}
                              className="text-smoke transition-colors hover:text-blood"
                              aria-label="Remove"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-0.5 text-sm font-bold text-blood">UGX {ugx(p.price)}</p>
                          <div className="mt-2 flex items-center gap-3">
                            <div className="flex items-center rounded-lg border border-line">
                              <button
                                onClick={() => setQty(item.id, item.qty - 1)}
                                className="flex h-8 w-8 items-center justify-center text-smoke transition-colors hover:text-blood"
                                aria-label="Decrease"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-8 text-center text-sm font-semibold text-bone">{item.qty}</span>
                              <button
                                onClick={() => setQty(item.id, item.qty + 1)}
                                className="flex h-8 w-8 items-center justify-center text-smoke transition-colors hover:text-blood"
                                aria-label="Increase"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <span className="text-xs text-smoke">= UGX {ugx(p.price * item.qty)}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-line px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-smoke">Subtotal ({count} item{count > 1 ? "s" : ""})</span>
                  <span className="font-display text-xl font-bold text-bone">UGX {ugx(subtotal)}</span>
                </div>
                <p className="mt-1 text-xs text-smoke">Delivery is confirmed on WhatsApp after checkout.</p>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1ebe5b]"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  Checkout on WhatsApp
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 w-full py-2 text-center text-xs font-semibold uppercase tracking-wider text-smoke transition-colors hover:text-blood"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
