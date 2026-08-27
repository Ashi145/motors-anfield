import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
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
  y = 28,
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
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
        "flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.35em] uppercase text-blood whitespace-nowrap",
        className
      )}
    >
      <span className="inline-block h-2 w-2 bg-blood" />
      {children}
    </div>
  );
}

/* ------------------------------ Marquee ------------------------------ */

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden border-y border-line bg-coal py-5", className)}>
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-medium uppercase tracking-wide text-bone/80 whitespace-nowrap">
              {item}
            </span>
            <span className="inline-block h-2.5 w-2.5 rotate-45 bg-blood" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Counter ------------------------------ */

export function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useMotionValue("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => rounded.set(Math.round(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, mv, value, rounded]);

  return (
    <div ref={ref} className="border-l-2 border-blood pl-5">
      <div className="font-display text-5xl font-semibold text-bone md:text-6xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-blood">{suffix}</span>
      </div>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-smoke">{label}</p>
    </div>
  );
}

/* ------------------------------ Magnetic button ------------------------------ */

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ CTA buttons ------------------------------ */

const btnBase =
  "group inline-flex items-center gap-3 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300";

export function CallButton({ className, label = "Call the workshop" }: { className?: string; label?: string }) {
  return (
    <a href={PHONE_HREF} className={cn(btnBase, "bg-blood text-white hover:bg-ember", className)}>
      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
      {label}
      <span className="hidden font-normal normal-case tracking-normal text-white/70 sm:inline">· {PHONE}</span>
    </a>
  );
}

export function WhatsAppButton({ className, label = "Message on WhatsApp" }: { className?: string; label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={cn(
        btnBase,
        "border border-line bg-ink/40 text-bone backdrop-blur hover:border-blood hover:text-blood",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function ArrowLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-blood transition-colors hover:text-ember",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
    <header className="blueprint noise relative overflow-hidden border-b border-line bg-ink">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-blood/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-16 md:pt-48 md:pb-24">
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-smoke md:text-lg">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

/* ------------------------------ CTA band ------------------------------ */

export function CTABand() {
  return (
    <section className="noise relative overflow-hidden border-t border-line bg-coal">
      <div className="blueprint absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blood/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <SectionTag className="justify-center">Open Mon – Sat · 8:00 AM – 7:00 PM</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone sm:text-5xl md:text-6xl">
            Let's get your car <span className="text-stroke-red">fixed right.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-smoke">
            One call is all it takes. Tell us the symptom — we'll tell you exactly what happens next.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <CallButton />
            </Magnetic>
            <Magnetic>
              <WhatsAppButton />
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
