import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Anfield Motors home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blood font-display text-xl font-bold text-white shadow-sm transition-transform duration-300 group-hover:-rotate-3">
        A
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-bold uppercase tracking-tight text-bone">
          Anfield <span className="text-blood">Motors</span>
        </span>
        <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-smoke">
          Parts · Service · Diagnostics
        </span>
      </span>
    </Link>
  );
}
