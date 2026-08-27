import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote, ChevronDown } from "lucide-react";
import { services, process, testimonials } from "@/data/content";
import {
  Reveal,
  SectionTag,
  Marquee,
  Counter,
  Magnetic,
  CallButton,
  WhatsAppButton,
  ArrowLink,
  IconByName,
  CTABand,
} from "@/components/shared";
import DiagnosticTerminal from "@/components/DiagnosticTerminal";
import { firstLoad } from "@/lib/firstLoad";

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const base = firstLoad ? 1.5 : 0.3;

  const lines = [
    { text: "RANGE ROVER.", cls: "text-bone" },
    { text: "BMW. TOYOTA.", cls: "text-bone" },
    { text: "FIXED RIGHT.", cls: "text-stroke-red" },
  ];

  return (
    <section ref={ref} className="noise relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Engine bay under workshop lights"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base, duration: 0.7 }}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-blood"
        >
          <span className="inline-block h-2 w-2 animate-blink bg-blood" />
          Est. workshop · Kireka — Kampala–Jinja Highway
        </motion.div>

        <h1 className="font-display font-semibold uppercase leading-[0.95] tracking-tight">
          {lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                className={`block text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] ${line.cls}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: base + 0.2 + i * 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.7, duration: 0.7 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-smoke md:text-lg"
        >
          A specialist garage built around three things: engine repair &amp; rebuild, full computer
          diagnostics, and honest workmanship — no guesswork, no shortcuts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.85, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Magnetic>
            <CallButton />
          </Magnetic>
          <Magnetic>
            <WhatsAppButton />
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 0.9, duration: 0.8 }}
        className="relative border-t border-bone/10 bg-ink/60 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-bone/10 px-6 md:grid-cols-4">
          {[
            ["Specialist focus", "Range Rover · BMW · Toyota"],
            ["Core strength", "Engine rebuilds, in-house"],
            ["Every car", "Full computer diagnostics"],
            ["Before any work", "Clear, itemised quote"],
          ].map(([k, v]) => (
            <div key={k} className="px-4 py-5 first:pl-0 md:px-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-blood">{k}</p>
              <p className="mt-1 text-xs text-bone/80 md:text-sm">{v}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: base + 1, duration: 0.8 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-28 right-8 hidden text-blood md:block"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}

/* ------------------------------ Stats ------------------------------ */

function Stats() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:py-20">
        <Counter value={12} suffix="+" label="Years on the tools" />
        <Counter value={300} suffix="+" label="Engines rebuilt & repaired" />
        <Counter value={1500} suffix="+" label="Diagnostics run" />
        <Counter value={3} suffix="" label="Brands, mastered daily" />
      </div>
    </section>
  );
}

/* ------------------------------ Services ------------------------------ */

function Services() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionTag>What we handle</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
                Under the bonnet, on the rack,{" "}
                <span className="text-stroke">and everywhere between.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <ArrowLink to="/parts">Browse spare parts</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-panel">
                <span className="absolute right-6 top-6 font-mono text-xs text-line transition-colors group-hover:text-blood">
                  0{i + 1}
                </span>
                <IconByName
                  name={s.icon}
                  className="h-8 w-8 text-blood transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                />
                <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-bone">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{s.body}</p>
                <span className="mt-auto block pt-6">
                  <span className="block h-px w-8 bg-line transition-all duration-500 group-hover:w-full group-hover:bg-blood" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Diagnostics feature ------------------------------ */

function Diagnostics() {
  return (
    <section className="blueprint noise relative overflow-hidden border-y border-line bg-coal">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-blood/10 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionTag>How we find the real fault</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
              We scan before <span className="text-stroke">we touch a spanner.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg leading-relaxed text-smoke">
              Every car that comes in gets a full computer diagnostic scan first. It tells us exactly
              which system is misbehaving — so the quote you get is based on the actual fault, not a
              guess. Watch the terminal: this is what your car's ECU tells us.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-4">
              {[
                "Factory-level OBD-II scanning with live data",
                "Fault codes explained in plain language",
                "Itemised quotes before a single bolt is turned",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-bone/80">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-blood" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <ArrowLink to="/story" className="mt-8">
              The Anfield way
            </ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <DiagnosticTerminal />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Brands preview ------------------------------ */

function BrandPreview() {
  const items = [
    { name: "Range Rover", img: "/images/range-rover.jpg", note: "Air suspension specialists" },
    { name: "BMW", img: "/images/bmw.jpg", note: "Inline-six whisperers" },
    { name: "Toyota", img: "/images/toyota.jpg", note: "The 1HZ whisperers" },
  ];
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionTag>Makes we specialise in</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
                Three brands. <span className="text-stroke">One deep focus.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <ArrowLink to="/brands">Explore the brands</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <Link to="/brands" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <img
                    src={b.img}
                    alt={b.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood">
                      {b.note}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <h3 className="font-display text-2xl font-semibold uppercase text-bone">
                        {b.name}
                      </h3>
                      <span className="flex h-10 w-10 items-center justify-center border border-bone/20 text-bone transition-all duration-300 group-hover:border-blood group-hover:bg-blood">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Story teaser ------------------------------ */

function StoryTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="border-y border-line bg-coal">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden border border-line">
            <motion.img
              style={{ y: imgY }}
              src="/images/workshop.jpg"
              alt="Anfield Motors workshop floor"
              className="aspect-[4/3] w-full scale-110 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-5 left-5 border border-bone/15 bg-ink/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone backdrop-blur">
              The workshop floor · Kireka
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <SectionTag>From the workshop floor</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
              Named after a place where you <span className="text-stroke-red">never walk alone.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg leading-relaxed text-smoke">
              Anfield is a football cathedral famous for one thing: loyalty. We borrowed the name
              because we run our garage the same way. When your car rolls through our gate, it's ours
              to protect — and you get the truth about what it needs, every time.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ArrowLink to="/story" className="mt-8">
              Read our story
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Process ------------------------------ */

function Process() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionTag>The work order</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
            From first call <span className="text-stroke">to road-tested handover.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="h-full">
              <div className="group relative h-full bg-ink p-6 transition-colors duration-500 hover:bg-panel">
                <span className="font-display text-4xl font-semibold text-line transition-colors duration-500 group-hover:text-blood">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-bone">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-smoke">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

function Testimonials() {
  return (
    <section className="noise relative overflow-hidden border-t border-line bg-coal">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionTag>From the workshop floor</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
            What customers <span className="text-stroke">tell us.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col border border-line bg-ink p-8 transition-colors duration-500 hover:border-blood/40">
                <Quote className="h-6 w-6 text-blood" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-bone/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-smoke">
                  — {t.name}, <span className="text-blood">{t.place}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Page ------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Engine rebuilds",
          "Computer diagnostics",
          "Range Rover",
          "BMW",
          "Toyota",
          "Air suspension",
          "Spare parts",
          "Honest quotes",
        ]}
      />
      <Stats />
      <Services />
      <Diagnostics />
      <BrandPreview />
      <StoryTeaser />
      <Process />
      <Testimonials />
      <CTABand />
    </>
  );
}
