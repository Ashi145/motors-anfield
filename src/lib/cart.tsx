import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, ugx, waLink } from "@/data/content";

export interface CartItem {
  id: string;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  checkoutUrl: string;
}

const Ctx = createContext<CartCtx | null>(null);

const KEY = "anfield-cart";

function load(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed.filter((i) => i && typeof i.qty === "number") : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(load());
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  function add(id: string, qty = 1) {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id);
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id, qty }];
    });
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function setQty(id: string, qty: number) {
    if (qty <= 0) return remove(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  function clear() {
    setItems([]);
  }

  const { count, subtotal, checkoutUrl } = useMemo(() => {
    let c = 0;
    let s = 0;
    const lines: string[] = [];
    for (const item of items) {
      const p = products.find((x) => x.id === item.id);
      if (!p) continue;
      c += item.qty;
      s += p.price * item.qty;
      lines.push(`${item.qty}× ${p.name} — UGX ${ugx(p.price * item.qty)}`);
    }
    const msg =
      `Hello Anfield Motors, I'd like to order:\n\n${lines.join("\n")}\n\n` +
      `Subtotal: UGX ${ugx(s)}\n\nPlease confirm availability and delivery.`;
    return { count: c, subtotal: s, checkoutUrl: waLink(msg) };
  }, [items]);

  return (
    <Ctx.Provider
      value={{ items, count, subtotal, add, remove, setQty, clear, open, setOpen, checkoutUrl }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart(): CartCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
