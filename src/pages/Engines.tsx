import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Gauge, Flame, Wind, Droplets, BatteryWarning, ChevronRight } from "lucide-react";
import { engines, symptoms, rebuildSteps } from "@/data/content";
import { PageHero, Reveal, SectionTag, CTABand } from "@/components/shared";
import { cn } from "@/utils/cn";

/* ------------------------------ Explorer ------------------------------ */

function Explorer() {
  const [active, setActive] = useState(engines[0].id);
  const engine = engines.find((e) => e.id === active)!;

  return (
    <div className="grid gap-px border border-line bg-line lg:grid-cols-[320px_1fr]">
      {/* list */}
      <div className="flex flex-col bg-ink">
        <p className="border-b border-line px-6 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          Select an engine
        </p>
        {engines.map((e) => (
          <button
            key={e.id}
            onClick={() => setActive(e.id)}
            className={cn(
              "group relative flex items-center justify-between border-b border-line px-6 py-5 text-left transition-colors duration-300",
              active === e.id ? "bg-panel" : "hover:bg-panel/60"
            )}
          >
            <span
              className={cn(
                "absolute left-0 top-0 h-full w-1 bg-blood transition-transform duration-300",
                active === e.id ? "scale-y-100" : "scale-y-0"
              )}
            />
            <span>
              <span
                className={cn(
                  "block font-display text-lg font-semibold uppercase tracking-wide transition-colors",
                  active === e.id ? "text-blood" : "text-bone group-hover:text-bone"
                )}
              >
                {e.short}
              </span>
              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
                {e.brands}
              </span>
            </span>
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-all duration-300",
                active === e.id ? "translate-x-1 text-blood" : "text-line"
              )}
            />
          </button>
        ))}
        <div className="hidden flex-1 items-end bg-ink p-6 lg:flex">
          <p className="font-mono text-[10px] leading-relaxed tracking-wider text-smoke">
            // Every engine above has been on our bench. We know its torques, its tolerances and
            its weaknesses.
          </p>
        </div>
      </div>

      {/* detail */}
      <div className="relative min-h-[560px] bg-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={engine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={engine.image}
                alt={engine.name}
                className="h-full min-h-[280px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-panel/40 md:bg-gradient-to-r" />
              <span className="absolute left-4 top-4 bg-blood px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                {engine.short}
              </span>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-display text-3xl font-semibold uppercase leading-tight text-bone">
                {engine.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-blood">
                {engine.brands}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-px border border-line bg-line">
                {engine.spec.map((s) => (
                  <div key={s.label} className="bg-panel px-4 py-3">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-smoke">
                      {s.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-bone">{s.value}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-smoke">{engine.character}</p>
              <p className="mt-3 border-l-2 border-blood pl-4 text-sm italic leading-relaxed text-bone/80">
                {engine.knownFor}
              </p>

              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood">
                  Common faults we repair
                </p>
                <ul className="mt-3 space-y-2">
                  {engine.faults.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-smoke">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-blood" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------ Symptom decoder ------------------------------ */

const symptomIcons = [Flame, Wind, Droplets, Gauge, BatteryWarning, AlertTriangle];

function Symptoms() {
  return (
    <section className="border-y border-line bg-coal">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionTag>What your car is telling you</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
            Decode the symptoms. <span className="text-stroke">Before they decode your wallet.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s, i) => {
            const Icon = symptomIcons[i % symptomIcons.length];
            return (
              <Reveal key={s.symptom} delay={i * 0.06} className="h-full">
                <div className="group flex h-full flex-col bg-ink p-7 transition-colors duration-500 hover:bg-panel">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-blood" />
                    <span
                      className={cn(
                        "px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]",
                        s.severity === "Critical" && "bg-blood text-white",
                        s.severity === "High" && "bg-blood/15 text-blood",
                        s.severity === "Medium" && "border border-line text-smoke"
                      )}
                    >
                      {s.severity}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-bone">
                    {s.symptom}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">{s.meaning}</p>
                  <p className="mt-4 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-blood">
                    {s.action}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Rebuild timeline ------------------------------ */

function Rebuild() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionTag>Anatomy of a rebuild</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold uppercase leading-[1.02] text-bone md:text-5xl">
            How an engine earns <span className="text-stroke">a second life.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <span className="absolute left-[27px] top-0 h-full w-px bg-line md:left-1/2" />
          {rebuildSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <div
                className={cn(
                  "relative mb-10 flex gap-8 md:w-1/2",
                  i % 2 === 0 ? "md:pr-14" : "md:ml-auto md:flex-row-reverse md:pl-14 md:text-right"
                )}
              >
                <span
                  className={cn(
                    "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-line bg-panel font-display text-lg font-semibold text-blood",
                    i % 2 === 0 && "md:absolute md:-right-7",
                    i % 2 === 1 && "md:absolute md:-left-7"
                  )}
                >
                  {s.step}
                </span>
                <div className="border border-line bg-coal p-6 transition-colors duration-500 hover:border-blood/40">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Engines() {
  return (
    <>
      <PageHero
        tag="Engine school"
        title={
          <>
            Know what's <span className="text-stroke-red">under your bonnet.</span>
          </>
        }
        description="Every engine family has its own personality — its strengths, its weaknesses, its signature faults. Pick one and see what we spend our days fixing."
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Explorer />
        </div>
      </section>
      <Symptoms />
      <Rebuild />
      <CTABand />
    </>
  );
}
