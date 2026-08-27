import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScanLine, FileText, ShieldCheck } from "lucide-react";
import { PageHero, Reveal, SectionTag, CTABand } from "@/components/shared";

const values = [
  {
    icon: ScanLine,
    title: "Scan first. Always.",
    body: "No part comes off your car before the computer has told us what's wrong. Guessing is how other garages turn a sensor into a full rebuild.",
  },
  {
    icon: FileText,
    title: "Itemised honesty",
    body: "Your quote breaks down every part and every hour of labour. If something changes mid-job, you hear it from us before it happens — not on the invoice.",
  },
  {
    icon: ShieldCheck,
    title: "No guesswork, no shortcuts",
    body: "Torque to spec, measure twice, road-test every car. The work we do is the work we'd accept on our own vehicles.",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <PageHero
        tag="Our story"
        title={
          <>
            Built on the <span className="text-stroke-red">shop floor.</span>
          </>
        }
        description="Anfield Motors is a Kireka-based specialist garage with one obsession: finding the real fault and fixing it right the first time. This is why we exist."
      />

      {/* origin */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag>Why "Anfield"?</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
                A name borrowed from a place where you{" "}
                <span className="text-stroke-red">never walk alone.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 space-y-5 leading-relaxed text-smoke">
                <p>
                  Anfield is more than a stadium — it's a symbol of loyalty that outlasts results.
                  We named the garage after it because that's the relationship we wanted with our
                  customers: one that lasts longer than a single repair.
                </p>
                <p>
                  We opened our gates on the Kampala–Jinja Highway with three bays, one scanner,
                  and a simple rule: <span className="text-bone">scan before you touch a spanner.</span>{" "}
                  Word travelled — first the Range Rovers arrived, then the BMWs, then the Land
                  Cruisers that refused to die.
                </p>
                <p>
                  Today we rebuild engines in-house, trace electrical faults other garages call
                  ghosts, and hand every customer an itemised quote before a single bolt turns.
                  Same rule. Every car. Every day.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div ref={ref} className="relative overflow-hidden border border-line">
              <motion.img
                style={{ y: imgY }}
                src="/images/workshop.jpg"
                alt="Anfield Motors workshop at night"
                className="aspect-[4/5] w-full scale-110 object-cover md:aspect-[4/4.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-bone/15 bg-ink/80 px-4 py-3 backdrop-blur">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone">
                  Kireka · Kampala–Jinja Highway
                </span>
                <span className="h-2 w-2 animate-blink bg-blood" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="border-y border-line bg-coal">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <SectionTag>How we work</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
              Three rules. <span className="text-stroke">Zero exceptions.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="h-full">
                <div className="group relative h-full border border-line bg-ink p-8 transition-colors duration-500 hover:border-blood/40">
                  <span className="absolute right-6 top-6 font-display text-5xl font-bold text-bone/[0.05] transition-colors duration-500 group-hover:text-blood/15">
                    0{i + 1}
                  </span>
                  <v.icon className="h-8 w-8 text-blood" />
                  <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-bone">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* diagnostics gallery */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <SectionTag>Inside the workshop</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
              Where the work <span className="text-stroke">actually happens.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="group relative overflow-hidden border border-line">
                <img
                  src="/images/diagnostics.jpg"
                  alt="Computer diagnostics in progress"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone">
                  01 — Diagnostics bay
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden border border-line">
                <img
                  src="/images/workshop.jpg"
                  alt="Vehicle on the lift at Anfield Motors"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone">
                  02 — Main floor
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
