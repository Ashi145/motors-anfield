import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Star,
  StarHalf,
  Cylinder,
  Waves,
  Disc3,
  Filter,
  Zap,
  Thermometer,
  Fan,
  Cog,
  Wrench,
  ScanLine,
  Mountain,
  CircleCheck,
  Activity,
  Cable,
  CircuitBoard,
  BatteryCharging,
  SearchCheck,
  ShieldAlert,
  Lightbulb,
  Car,
  Headphones,
  Truck,
  CreditCard,
  CircleDollarSign,
  BadgeCheck,
  Boxes,
  Package,
  Phone,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { PHONE, PHONE_HREF, WHATSAPP } from "@/data/content";

/* ------------------------------ IconByName ------------------------------ */

const iconMap: Record<string, LucideIcon> = {
  Cylinder,
  Waves,
  Disc3,
  Filter,
  Zap,
  Thermometer,
  Fan,
  Cog,
  Wrench,
  ScanLine,
  Mountain,
  CircleCheck,
  Activity,
  Cable,
  CircuitBoard,
  BatteryCharging,
  SearchCheck,
  ShieldAlert,
  Lightbulb,
  Car,
  Headphones,
  Truck,
  CreditCard,
  CircleDollarSign,
  BadgeCheck,
  Boxes,
  Package,
};

export function IconByName({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Cog;
  return <Cmp className={className} />;
}

/* ------------------------------ Reveal ------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ SectionTag ------------------------------ */

export function SectionTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-blood",
        className
      )}
    >
      <span className="inline-block h-2 w-2 bg-blood" />
      {children}
    </div>
  );
}

/* ------------------------------ SectionHeading ------------------------------ */

export function SectionHeading({
  tag,
  title,
  action,
  className,
}: {
  tag: string;
  title: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col justify-between gap-4 md:flex-row md:items-end", className)}>
      <div>
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-[1.05] tracking-tight text-bone md:text-4xl lg:text-[2.6rem]">
            {title}
          </h2>
        </Reveal>
      </div>
      {action && (
        <Reveal delay={0.12} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------ StarRating ------------------------------ */

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-star", className)}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
      {half && <StarHalf className="h-3.5 w-3.5 fill-current" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e${i}`} className="h-3.5 w-3.5 text-line" />
      ))}
    </span>
  );
}

/* ------------------------------ ArrowLink ------------------------------ */

export function ArrowLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold text-blood transition-colors hover:text-ember",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

/* ------------------------------ Page hero ------------------------------ */

export function PageHero({
  tag,
  title,
  description,
}: {
  tag: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-coal">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-blood/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 md:pt-40 md:pb-16">
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-bone sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-smoke md:text-lg">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

/* ------------------------------ CTA band ------------------------------ */

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-blood">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
            Open Mon – Sat · 8:00 AM – 7:00 PM
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.03] text-white md:text-5xl">
            Let's get your car — and your order — sorted.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            One message is all it takes. Tell us the part or the symptom and we'll handle the rest.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wider text-blood transition-colors hover:bg-ink"
            >
              <Phone className="h-4 w-4" />
              Call · {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-white/70 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-blood"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
